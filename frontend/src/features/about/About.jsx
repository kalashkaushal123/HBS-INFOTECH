import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "../about/laptop.png";
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';
import './about.css'

export default function About() {
  return (
    <div>
    <div className="" style={{ backgroundColor: "#062969" }}>
      <div className="main" style={{ marginLeft: "4rem" }}>
        <div className="row align-items-center text-white py-5">
          {/* Left Side (Text Content) */}
          <div className="col-md-6 col-12 mb-4 mb-md-0">
            <h1 className="display-4 font-weight-bold" style={{ color: "white" }}>
              Drive Digital Revolution With Us!
            </h1>
            <p className="lead text-white">
              At RARR Technologies Pvt. Ltd., we believe in the power of
              collaboration and open communication. Our collaborative approach
              enables us to deeply understand our clients' requirements, allowing
              us to craft software products that are not only technically superior
              but also align perfectly with their business goals. By combining our
              expertise with meticulous attention to detail, we ensure that every
              line of code we write contributes to the creation of robust, scalable,
              and future-proof digital solutions that stand the test of time.
            </p>
            <button className="button btn-primary">Discuss with us</button>
          </div>

          {/* Right Side (Image) */}
          <div className="col-md-6 col-12 text-center">
            <img
              src={laptop}
              alt="Laptop"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                width: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>

    </div>

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


    </div>
  );
}
