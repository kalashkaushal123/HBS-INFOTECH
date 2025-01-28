import './CourseHeader.css';

export default function CourseHeader() {
  return (
    <div>
      <header className="CourseMain-main">
        {/* Left Section */}
        <div className="course-header-left-side">
          <h1>HBS INFOTECH</h1>
          <button>My Goal | Certification Course in Fullstack</button>
        </div>

        {/* Right Section */}
        <div className="course-header-right-side">
          <div className="coin">
            <button>10,000 Coins</button>
          </div>
          <div className="track-performance">
            <button>APs 2735</button>
          </div>
          <div className="myperformance">
            <button>Track Performance</button>
          </div>
          <div className="learn-about-master">
            <button>Learn About Master</button>
          </div>
          <div className="profile">
            <button>P</button>
          </div>
        </div>
      </header>
    </div>
  );
}
