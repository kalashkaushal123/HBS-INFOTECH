import "bootstrap/dist/css/bootstrap.min.css";
import './course.css';
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';

export default function Course() {
  return (
    <div className="main-section">
      <div className="course-main">
        {/* Left Section - Course Details */}
        <div className="course-left-side">
          <p>Creating</p>
          <h1>Certification in Full Stack Data Science and AI</h1>
          
          <div className="calender">
            Next cohort starting on 14th January
          </div>

          <p>In collaboration with:</p>
          <div className="company-logo">
            <div className="iit-logo">
              <img className="img" src={iitguhati} alt="IIT Guwahati Logo" />
            </div>
            <div className="microsoft">
              <img className="img" src={microsot} alt="Microsoft Logo" />
            </div>
          </div>

          <div className="heding-about-course">
            <p>Advanced Certification from E&ICT Academy, IIT Guwahati.</p>
            <p>6 months part-time program with online classes</p>
            <ul>
              <li><p>Revised curriculum for post Chat-GPT era</p></li>
              <li><p>No prior coding experience required</p></li>
              <li><p>Suitable for final years, graduates, and early professionals.</p></li>
            </ul>
          </div>

          <div className="bottom-button">
            <button>Explore Program</button>
            <button id="enroll">Enrol Now</button>
          </div>
        </div>

        {/* Right Section - Video and Demo Buttons */}
        <div className="course-right-side">
          <div className="video-section">
            {/* Video content can be added here */}
          </div>
          <div className="demobutton">
            <button>Book a Demo class</button>
            <button>Request a Callback</button>
          </div>
        </div>
      </div>

      {/* Section for Other Courses */}
      <section className="course-section">
        <h1>OUR COURSES</h1>
        {/* You can add more content here related to other courses */}
      </section>
    </div>
  );
}
