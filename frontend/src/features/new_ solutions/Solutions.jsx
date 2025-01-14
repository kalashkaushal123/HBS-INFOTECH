import "bootstrap/dist/css/bootstrap.min.css";

export default function Solutions() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-4 text-center text-md-left">
          <h1 className="font-weight-bold">Bridge the Gap</h1>
          <p>Between Business and Technology</p>
        </div>

        {/* Vertical Line */}
        <div className="col-md-1 d-none d-md-block">
          <div
            style={{
              borderLeft: "2px solid #007bff",
              height: "100%",
              margin: "0 auto",
            }}
          ></div>
        </div>

        {/* Solutions Content */}
        <div className="col-md-7">
          <div className="row">
            {/* Solution 1 */}
            <div className="col-md-4 text-center">
              <h2 style={{ color: "#ff1493" }}>01</h2>
              <h5>Microsoft Solutions</h5>
              <p>
                Unlock The Power Of Microsoft’s Suite Of Solutions And Elevate
                Your Business.
              </p>
              <a href="#">Learn More</a>
            </div>
            {/* Solution 2 */}
            <div className="col-md-4 text-center">
              <h2 style={{ color: "#007bff" }}>02</h2>
              <h5>Coconut ERP</h5>
              <p>
                With Coconut ERP You Get Industry 4.0 Compatible ERP And Smart
                Age Dashboard.
              </p>
              <a href="#">Learn More</a>
            </div>
            {/* Solution 3 */}
            <div className="col-md-4 text-center">
              <h2 style={{ color: "#ffa500" }}>03</h2>
              <h5>atsMantra</h5>
              <p>
                Resolve Complex Issues And Ensure Optimal Solutions Are Put
                Together.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
