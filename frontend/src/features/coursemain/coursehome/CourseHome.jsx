import "./CourseHome.css";
// import coding from '../courses/images/microsoft.png';
export default function CourseHome() {
  return (
    <div>
      <div className="course-home-main">
        <div className="introdution">
          <h4>
            Introducing our brand new certification course with HBS INFOTECH 🎉
          </h4>
        </div>
        <div className="course-home-block1">
          <div className="course-home-block1-lfet-side">
            <video src=""></video>
          </div>
          <div className="course-home-block1-right-side">
            <h1>AlmaBetter X WOOLF University, Master’s Degree</h1>
            <p style={{color:"white"}}>
              Introducing a global Master’s Degree Program 
            </p>
            <div className="course-home-block1-right-side-bottom  " style={{display:"flex"}} >
              <button>Explore our programs</button>
              <button>Talk to addmission Team</button>
             
            </div>
          </div>
        </div>
        <div className="course-home-block2">
          <div className="course-home-block2-left-side">
            <div className="course-home-block2-left-side-inside">
              <h4>Full Stack Data Science Program</h4>
              
             <div className="learning-ciriculam-block2">
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, possimus!
              </p>
             </div>
              
            </div>
            <div className="course-home-block2-right-side-inside">
            
              
            </div>
            <button className="btn-course-inside">Contiene Learning</button>
            

          </div>
          <div className="course-home-block2-right-side">
          <h5>Our Heros</h5>
            

          </div>

        </div>

  <div className="card-opretor">
<div className="card-inner">
{/* <div className="card-inner-img">
  <img className="img" src={coding} alt="image" />
    </div> */}
  <h5>Accenture Coding Problems</h5>
  <p>5 Question 75 min</p>
  <a href="#">Strat Now</a>
</div>
<div className="card-inner">
  <h5>Accenture Coding Problems</h5>
  <p>5 Question 75 min</p>
</div>
<div className="card-inner">
  <h5>Accenture Coding Problems</h5>
  <p>5 Question 75 min</p>
</div>
          </div>


        <div className="course-home-block3">
          <div className="course-home-block3-top d-flex justify-content-between m-1
          font-bold
          ">
            <h3>Practice Coding Assessments</h3>
            <p>see all</p>
          </div>

         

          <div className="coding_assessments">

          <div className="coding_assessments-items"></div>
          <div className="coding_assessments-items"></div>
          <div className="coding_assessments-items"></div>
          <div className="coding_assessments-items"></div>
          </div>
          

        </div>
        <div className="course-home-block4"></div>
        <div className="course-home-block5"></div>
        <div className="course-home-block6"></div>
        <div className="course-home-block7"></div>
        <div className="course-home-block7"></div>
      </div>
    </div>
  );
}
