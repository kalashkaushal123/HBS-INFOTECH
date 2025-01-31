import "./CourseHome.css";

import acenture from './image/acenture.png'
import hcltech from './image/HCLTech.png'
import dropbox from './image/Dropbox.png'
import metaimage from './image/meta.png'
import microsoftiamge from "./image/microsoft.png"
import nural_network from './image/nural_network.png'
import myntra from "./image/Myntra.png"
import amezon_kendle from "./image/Amazon-Kindle.png"
import newsartical from './image/newsarticale.png'
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
            <p style={{ color: "white" }}>
              Introducing a global Master’s Degree Program
            </p>
            <div className="course-home-block1-right-side-bottom  " style={{ display: "flex" }} >
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



        <div className="course-home-block3-top d-flex justify-content-between m-5
          font-bold
          ">
          <h3>Practice Coding Assessments</h3>
          <p>see all</p>
        </div>
        <div className="card-opretor">

          <div className="card-inner">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={acenture} alt="image" />
            </div>
            <h5>Accenture Coding Problems</h5>

            <p>5 Question 75 min</p>
            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={hcltech} alt="image" />
            </div>
            <h5>Hcl tech Coding Problems</h5>
            <p>5 Question 75 min</p>
            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner">

            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={dropbox} alt="image" />
            </div>
            <h5>Dropbox Coding Problems</h5>
            <p>5 Question 75 min</p>
            <a href="#">Strat Now</a>
          </div>
        </div>

        <div className="course-home-block3-top d-flex justify-content-between m-5
          font-bold
          ">
          <h3>Practice Quiz Assessments</h3>
          <p>see all</p>
        </div>
        <div className="card-opretor">

          <div className="card-inner">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={nural_network} alt="image" />
            </div>
            <h5>Neural Networks</h5>



            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={microsoftiamge} alt="image" />
            </div>
            <h5>Microsoft Data Analyst Mock Test</h5>

            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner">

            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={metaimage} alt="image" />
            </div>
            <h5>Meta Data Scientist Mock Test</h5>

            <a href="#">Strat Now</a>
          </div>
        </div>

        <div className="course-home-block3-top d-flex justify-content-between m-5
          font-bold
          ">
          <h3>Capstone Projects</h3>
          <p>see all</p>
        </div>

        <div className="card-opretor">

          <div className="card-inner h-10">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={myntra} alt="image" />
            </div>
            <h5>Myntra Online Retail Customer Segmentation</h5>
            <p>Unsupervised ML</p>



            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner h-10">
            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={amezon_kendle} alt="image" />
            </div>
            <h5>Kindle Book Recommendation System</h5>
            <p>Unsupervised ML</p>

            <a href="#">Strat Now</a>
          </div>
          <div className="card-inner h-10">

            <div className="card-inner-img">
              <img className="img" style={{ backgroundColor: "white" }} src={newsartical} alt="image" />
            </div>
            <h5>Topic Modeling on News Articles</h5>
            <p>Unsupervised ML</p>

            <a href="#">Strat Now</a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 w-full mt-32">
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
          <div className="text-center bg-white py-4 rounded-sm flex flex-col w-full borderFull ">
            <div className="my-2 flex flex-col items-center justify-center ">
              <div className="relative">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/thumbnail_Rochit_Jain_c0d9004286.png" alt="User Profile" className="rounded-full object-cover" style={{ width: "6rem", height: "6rem" }} />
                <img src="https://grow.almabetter.com/static/media/linkedin.2a78755a.svg" alt="linkedin" className="absolute bottom-1 right-1 w-4 cursor-pointer bg-white" />
              </div>
              <div className="mt-2 font-bold text-lg">Rochit Jain</div>
              <div className="text-blue-c9"> Data Scientist</div>
              <div className="relative h-20 flex items-center justify-center">
                <img src="https://almablog-media.s3.ap-south-1.amazonaws.com/Rochit_Jain_BCG_52d9f3ae3d.png" alt="social" className="bg-white top-0 object-cover w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    );
}
