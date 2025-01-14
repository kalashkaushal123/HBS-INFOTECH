import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For Bootstrap Icons

export default function Footer() {
  return (
<footer className="text-white py-4" style={{ margin: 0, backgroundColor: '#062868' }}>
<div className="container">
        {/* Footer Row */}
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className='text-white'>
              We are dedicated to providing the best solutions to help you
              achieve your goals. Join us for a journey of learning and success.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, City
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>+1 234 567 890
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>info@example.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
