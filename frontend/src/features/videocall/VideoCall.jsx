import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer'

const VideoCall = ({ roomName }) => {
  const [stream, setStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [socket, setSocket] = useState(null);
  const userVideo = useRef(null);
  const remoteVideo = useRef(null);

  

  useEffect(() => {
    // Get user media (camera and mic)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error('Error getting user media:', err);
      });

    // Initialize socket connection
    const socket = io('ws://localhost:8000/ws/video-call/' + roomName + '/');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('connected to room');
    });

    socket.on('message', (message) => {
      if (message.type === 'offer') {
        // Handle incoming offer
        const peer = new SimplePeer({ initiator: false, trickle: false });
        peer.signal(message.offer);
        peer.on('signal', (data) => {
          socket.emit('message', { type: 'answer', answer: data });
        });
        peer.on('stream', (stream) => {
          remoteVideo.current.srcObject = stream;
        });
        setPeer(peer);
      } else if (message.type === 'answer') {
        peer.signal(message.answer);
      }
    });

    return () => {
      socket.close();
    };
  }, [roomName]);

  const startCall = () => {
    if (!stream) return; // Make sure the stream is available

    const peer = new SimplePeer({ initiator: true, trickle: false });
    
    peer.on('signal', (data) => {
      if (socket) {
        socket.emit('message', { type: 'offer', offer: data });
      }
    });

    peer.on('stream', (stream) => {
      remoteVideo.current.srcObject = stream;
    });

    // Add tracks to peer connection instead of addStream
    stream.getTracks().forEach(track => {
      peer.addTrack(track, stream);
    });

    setPeer(peer);
  };

  return (
    <div>
      <div>
        <video ref={userVideo} autoPlay muted />
        <video ref={remoteVideo} autoPlay />
      </div>
      <button onClick={startCall}>Start Call</button>
    </div>
  );
};

VideoCall.propTypes = {
  roomName: PropTypes.string.isRequired,
};

export default VideoCall;

