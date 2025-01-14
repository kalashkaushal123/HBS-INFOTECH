import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For Bootstrap Icons

export default function Footer() {
  return (
<footer className="text-white py-4" style={{ margin: 0, backgroundColor: '#062868' }}>
<div className="container">
        {/* Footer Row */}
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <div className="about-ftr">
            <h5 className='heading-ftr'>About Us</h5>
            <p className='text-white text-justify'>
            RARR Technologies Pvt. Ltd. is an industry leading software development company building digital products that lasts. By being reasonable product craftsmen, we're able to avoid surprises and focus on the quality of the software and deliver.

            </p>

            </div>
            
          </div>

          {/* Links Section */}
          <div className="col-md-3">
            
          <h5 className='heading-ftr'>Quick Links</h5>
            <ul className="list-unstyled list-footer">
              <li>
                <a href="#about" className="text-white text-decoration-none">
                Microsoft Solutions
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white text-decoration-none">
                Coconut ERP
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                atsMantra
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white text-decoration-none">
                UI/UX Designing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            
            <ul className="list-unstyled list-footer">

              <li>
                <a href="#about" className="text-white text-decoration-none">
                Microsoft Solutions
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white text-decoration-none">
                Coconut ERP
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                atsMantra
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white text-decoration-none">
                UI/UX Designing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
          <h5 className='heading-ftr'>Our Address
            </h5>
            <ul className="list-unstyled list-footer">
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

       
      </div>
      <div className="row">
  <div className="col-md-12"> {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0 text-white">
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </p>
        </div></div>
</div>
    </footer>
  );
}
