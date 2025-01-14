import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react'; 
import { FaAlignJustify } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div>
      <header className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Side */}
          <div className='top'>
          <div className="logo d-flex align-items-center">
            <h1 className="mb-0 fs-4 fw-bold text-white">HBS INFOTECH</h1>
          </div>
          </div>

          {/* Right Side */}
          <div className="nav-bar">
            {/* Hamburger Icon for Mobile */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><FaAlignJustify /></span>
            </button>

            {/* Navigation Menu */}
            <ul className={`nav ${isMenuOpen ? "show" : ""} d-lg-flex`}>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/course">Course</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/solutions">Solutions</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Placement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">More</a>
              </li>
              <li className="nav-item">
                <button className="button btn-primary">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
