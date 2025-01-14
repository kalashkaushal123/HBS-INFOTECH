import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../comman/Header';
import Footer from '../comman/Footer';
import About from '../features/about/About';
import Course from '../features/courses/Course';
import Solutions from '../features/new_ solutions/Solutions';
import microsoftpng from '../assets/icons/microsoft.png'
import  down from '../assets/icons/dwn.png'
import coconut from '../assets/icons/coconut.png'

export default function Home() {
  const [showWrapper, setShowWrapper] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the wrapper on certain routes (e.g., when on '/about', '/courses', '/solutions')
    if (location.pathname === '/about' || location.pathname === '/course' || location.pathname === '/solutions') {
      setShowWrapper(false);
    } else {
      setShowWrapper(true);
    }
  }, [location]);

  return (
    <div>
      <Header />

      {/* Outlet for nested routing */}
      <Outlet />

      {showWrapper && (
        <div className="wrapper" >
          <div className="content">
            <div className="box">
              <div className="content-img">
                <img src={microsoftpng } alt="Microsoft Solutions Logo" />
              </div>
              <h1 className="heading">
                Microsoft Solutions
                <span className="head-clr">
                  Dynamics CRM . Azure . Office 365
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Sections for About, Courses, and Solutions */}
      <About />
      <Course />
      <Solutions />

      <Footer />
    </div>
  );
}
