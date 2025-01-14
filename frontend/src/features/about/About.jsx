import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "../about/laptop.png";
import './about.css'

export default function About() {
  return (
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
  );
}
