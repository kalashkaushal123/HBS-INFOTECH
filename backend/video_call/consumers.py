# video_call/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer

class VideoCallConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Get the room name from the URL
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'video_{self.room_name}'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message_type = text_data_json.get('type', '')

        # Broadcast message to room group
        if message_type == "call_initiated":
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'call_initiated',
                    'caller': text_data_json['caller'],
                    'receiver': text_data_json['receiver'],
                }
            )

        # Add additional message handling (e.g., answer, ice candidates)

    # Receive message from room group
    async def call_initiated(self, event):
        caller = event['caller']
        receiver = event['receiver']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'call_initiated',
            'caller': caller,
            'receiver': receiver,
        }))
