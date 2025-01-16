import "bootstrap/dist/css/bootstrap.min.css";
import './course.css';
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';
import courseImage1 from '../courses/images/course1.jpeg'; // 
import courseImage2 from '../courses/images/course2.jpeg'; // Add an image for the course
import courseImage3 from '../courses/images/course3.jpeg'; // Add an image for the course

export default function Course() {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Full Stack Data Science and AI",
      description: "A comprehensive 6-month part-time course on Data Science and AI.",
      image: courseImage1,
      link: "/course/full-stack-data-science"
    },
    {
      id: 2,
      title: "Web Development with React",
      description: "Learn modern web development with React, Redux, and Node.js.",
      image: courseImage2,
      link: "/course/web-development-react"
    },
    {
      id: 3,
      title: "Machine Learning for Beginners",
      description: "Introduction to machine learning with hands-on projects.",
      image: courseImage3,
      link: "/course/machine-learning"
    },
  ];

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
        <div className="course-cards-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img className="course-card-img" src={course.image} alt={course.title} />
              <div className="course-card-body">
                <h2 className="course-card-title">{course.title}</h2>
                <p className="course-card-description">{course.description}</p>
                <a href={course.link} className="course-card-button">Explore Course</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="learning-carculam">

      </section>
    </div>
  );
}
