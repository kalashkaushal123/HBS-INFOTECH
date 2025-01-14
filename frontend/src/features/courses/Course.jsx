import "bootstrap/dist/css/bootstrap.min.css";
import datascience from "../courses/images/datascience.jpeg";
import './course.css';

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Learn the fundamentals of web development with HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Master data analysis, visualization, and machine learning with Python and related tools.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile applications with React Native and Flutter.",
    },
  ];

  return (
    <div className="course-container py-5">
      {/* Course Heading */}
      <h1 className="text-center mb-5 course-heading">
        Our Courses
      </h1>

      {/* Certification Course Info */}
      <div className="row mb-5">
        <div className="col-md-6 course-info-box">
          <h2 className="course-title">
            Certification in Full Stack Data Science and AI
          </h2>
          <p className="course-description">
            Advanced Certification from E&ICT Academy, IIT Guwahati.
          </p>
          <p className="course-description">
            6 months part-time program with online classes.
          </p>
          <p className="course-description">
            Revised curriculum for post Chat-GPT era.
          </p>
          <p className="course-description">
            No prior coding experience required.
          </p>
          <p className="course-description">
            Suitable for final years, graduates, and early professionals.
          </p>
          <div className="course-action-buttons">
            <button className="btn btn-outline-primary btn-lg">
              Explore Program
            </button>
            <button className="btn btn-primary btn-lg">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Image and Actions */}
        <div className="col-md-6 course-image-box">
          <img
            src={datascience}
            alt="Data Science Course"
            className="img-fluid course-image"
          />
          <div className="course-action-buttons">
            <button className="btn btn-outline-success btn-lg">
              Book Demo Class
            </button>
            <button className="btn btn-outline-info btn-lg">
              Request a Callback
            </button>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card course-card">
              <div className="card-body">
                <h5 className="card-title course-card-title">
                  {course.title}
                </h5>
                <p className="card-text course-card-text">
                  {course.description}
                </p>
                <button className="btn btn-primary course-card-button">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
