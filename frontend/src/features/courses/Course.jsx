import "bootstrap/dist/css/bootstrap.min.css";
import './course.css';

export default function Course() {
  return (
    <div className="course-main">
      <div className="course-left-side">
        <p>Creating</p>
        <h1>Certification in Full Stack Data Science and AI</h1>
        <div className="calender">
          Next cohort starting on 14th January
        </div>
        <p>In collaboration with:</p>
        <div className="company-logo">
          <div className="iit-logo"></div>
          <div className="microsoft"></div>
        </div>
        <div className="heding-about-course">
          <p>Advanced Certification from E&ICT Academy, IIT Guwahati.</p>
          <p>6 months part-time program with online classes</p>
          <ul>
            <li><p>Revised curriculum for post Chat-GPT era</p></li>
            <li><p>No prior coding experience required</p></li>
            <li><p>Suitable for final years, graduates and early professionals.</p></li>
          </ul>
        </div>
        <div className="bottom-button">
          <button>Explore Program</button>
          <button id="enroll">Enrol Now</button>
        </div>
      </div>
      <div className="course-rigth-side">
        <div className="video-section">
          <video src="" controls></video>
        </div>
        <div className="demobutton">
          <button>Book a Demo class</button>
          <button>Request a Callback</button>
        </div>
      </div>
    </div>
  );
}
