import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react'; 
import { FaAlignJustify } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false); 

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
                <Link className="nav-link text-white" to="/course">Learning Path</Link>
              </li>

              {/* Services Link with Hover */}
              <li 
                className="nav-item services" 
                onMouseEnter={() => setIsHoveringServices(true)} 
                onMouseLeave={() => setIsHoveringServices(false)}
              >
                <Link className="nav-link text-white" to="/solutions">Services</Link>
                {/* Conditionally show the dropdown */}
                <div className={`services-dropdown ${isHoveringServices ? 'show' : ''}`}>
                  <div className="services-menu">
                  <div className="services-left-side">
                    <h1 className='m-5'>AI expertise tailored to business goals </h1>
                    <button className="btn btn-danger m-5" style={{backgroundColor:"red",
                      position:"relative",
                      top:"100px",
                      left:"20px",
                      height:"4rem",
                      width:"20rem",
                      fontSize:"25px",
                      fontWeight:"bolder"
                    }}>Lets together work</button>

                  </div>
                  <div className="services-mid-side">
                    <div className="mid-services-block1">
                      <p>Ideate</p>
                      <ul className='mid-link'>
                        <Link to="/ui"><li>UX & UI Design Services </li></Link>
                        <Link to="/software"><li>Software Development Services</li></Link>
                        <Link to="/cloud"><li>Cloud Consulting & Services</li></Link>
                      </ul>
                    </div>

                    <div className="mid-services-block2">
                      <p>Improve</p>
                     <ul className='mid-link'>
                      <Link to="/digitaltransformation"><li>Digital Transformation Services</li></Link>
                      <Link to="/dataengineering"><li>Data Engineering and Data Science Services</li></Link>
                      <Link to="/mobile"><li>Mobile App Development Services</li></Link>
                      <Link to="/ai"><li>AI & ML Services</li></Link>
                     
                     </ul>


                    </div>
                    <div className="mid-services-block3">
                      <p>Scale</p>
                      <ul className='mid-link'>
                        <li>Nearshoring Services for the North American Market</li>
                        <li>Software Development Outsourcing Services</li>
                       
                      </ul>
                    </div>


                  </div>
                  <div className="services-rigth-side">
                   <div className="right-side-block1">
                   <p>Build</p>
                    <ul className='mid-link'>
                      <li>Dedicated Software Development Teams</li>
                      <li>Cloud Engineering Service</li>
                      <li>Embedded Software Services</li>
                      <li>Mobile Apps Development Services</li>
                    </ul>
                   </div>
                   <div className="rigth-side-block2">
                    <p>Operate</p>
                    <ul className='mid-link'>
                      <li>Identity and Access Management Services</li>
                      <li>Automation Testing Services</li>
                      <li>DevOps Consulting Services & Solutions</li>
                      <li>Software Auditing Services</li>
                      <li>Security Audit and Governance Services</li>
                    </ul>
                   </div>
                  </div>
                  </div>
                  .
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Industries</a>
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
