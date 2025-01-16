import "bootstrap/dist/css/bootstrap.min.css";
import './course.css';
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';
import courseImage1 from '../courses/images/course1.jpeg'; // 
import courseImage2 from '../courses/images/course2.jpeg'; // Add an image for the course
import courseImage3 from '../courses/images/course3.jpeg'; // Add an image for the course
import { useEffect, useState } from "react";

export default function Course() {
   // Sample courses data
   const courses = [
    {
      id: 1,
      title: "Full Stack Data Science and AI",
      description: "A comprehensive 6-month part-time course on Data Science and AI.",
      image: courseImage1,
      link: "/course/full-stack-data-science"
    },
    {
      id: 2,
      title: "Web Development with React",
      description: "Learn modern web development with React, Redux, and Node.js.",
      image: courseImage2,
      link: "/course/web-development-react"
    },
    {
      id: 3,
      title: "Machine Learning for Beginners",
      description: "Introduction to machine learning with hands-on projects.",
      image: courseImage3,
      link: "/course/machine-learning"
    },
    {
      id: 4,
      title: "Machine Learning for Beginners",
      description: "Introduction to machine learning with hands-on projects.",
      image: courseImage3,
      link: "/course/machine-learning"
    },
  ];
  


  const [state, setstate] = useState( [{
      "id":1,
      'title':'Introduction to Computer Programming',
      "subTitle":"Add-On : Pair Programming using ChatGPT",
      "topic":'Topic',
      't1':'Introduction to Python Programming',
      't2':'Data Types in Python',
      "t3":"In-Built Functions & Methods",
      "t4":"Indexing & Slicing",
      "t5":"Operators in Data Types",
      "t6":"Statements, Indentation & Conditionals",
      "t7":"Loops & Iterations",
      "t8":"Conditional & Infinite Looping",
      "t9":"Custom Functions in Python",
      "t10":"Advanced Looping Concepts",
    },{
      "id":2,
      'title':'Numerical Programming in Python',
      "subTitle":"Add-On : Data Wrangling using Pandas AI",
      "topic":'Mastering Data Wrangling',
      't1':'Advanced Data Wrangling Concepts',
      't2':'Data Wrangling on Different Data Formats',
      "t3":"Data Visualization with Matplotlib & Seaborn",
      "t4":"Data Vizualization Tips & Variable Analysis",
      "t5":"Exploratory Data Analysis | Ecommerce Case Study",
      "t6":"Data Modelling via APIs",
      "t7":"Interactive Visuals with Plotly",
      "t8":"Streamlit Dashboards with dynamic Interactions",
      "t9":"",
      "t10":"",
    },{
      "id":3,
      'title':'Relational Databases',
      "subTitle":"Add-On : ChatGPT for writing SQL queries",
      "topic":'Fundamentals of SQL Query',
      't1':'Dealing With Multiple Tables',
      't2':'Advanced SQL Joins',
      "t3":"Type Casting & Math Functions",
      "t4":"DateTime Functions",
      "t5":"String Functions",
      "t6":"Window Functions",
      "t7":"Complex queries using CTE & Connecting with Azure Database",
      "t8":"Data Exploration With SQL & Python",
      "t9":"Database Management & Schema Design",
      "t10":"",
    },{
      "id":4,
      'title':"Data Visualization Tools",
      "subTitle":"Add-On : Creating presentations using ChatGPT",
      "topic":'',
      't1':'Data Exploration with In-Built Functions',
      't2':'Excel Dashboarding',
      "t3":"PowerQuery in Excel",
      "t4":"Introduction to PowerBI & ETL",
      "t5":"Dashboarding Concepts with Power BI",
      "t6":"Introduction to DAX",
      "t7":"Advanced DAX Functions",
      "t8":"Getting Started with Tableau Ecosystem",
      "t9":"Dashboarding & Storytelling with Tableau",
      "t10":"",
    },{
      "id":5,
      'title':"Applied Business Analytics",
      "subTitle":"Add-On : Leveraging AI for equations simplified via ChatGPT",
      "topic":'',
      't1':   'Probability_Theory_and_Random_Variables',
      't2':   'Summary_Statistics',
      "t3":   "Probability_Distributions",
      "t4":   "Sampling_and_Statistical_Inference",
      "t5":   "Concept_of_Confidence",
      "t6":   "Hypothesis_Testing",
      "t7":   "Business_Metrics_101",
      "t8":   "Web_Analytics",
      "t9":   "Experiment_Design",
      "t10":  "Workflow_Management_Automated_Code_Execution",
    },{
      "id":6,
      'title':'Machine Learning & Generative AI with Microsoft Azure',
      "subTitle":"Add-On : Use AI to create AI",
      "topic":'',
      't1':'Supervised_Learning_Regression',
      't2':'Supervised_Learning_Classification',
      "t3":'Tree_Based_Model',
      "t4":'Bagging_Boosting_and_Non_Linear_Algorithms',
      "t5":'Data_Preparation_for_ML_Models_and_Cross_Validation',
      "t6":'Feature_Engineering_and_Model_Interpretation',
      "t7":'Unsupervised_Learning',
      "t8":'Customer_Segmentation_Case_Study',
      "t9":'Time_Series_Analysis',
      "t10":'Recommender_Systems',
    }
  ]);
  let aa=state[0]
  const [onedata, setonedata] = useState({});

  function Introduction() {
      setonedata(state[0])
      console.log(onedata);
      
  }

  function Numerical () {
    setonedata(state[1])
    console.log(onedata);
  }

  function Relational() {
     setonedata(state[2])
     console.log(onedata);
  }

  function Data() {
      setonedata(state[3])
      console.log(onedata);
  }

  function Applied() {
     setonedata(state[4])
     console.log(onedata);
  }

  function Machine() {
    setonedata(state[5])
    console.log(onedata);
  }
  useEffect(() => {
    
    setonedata(state[0])
  }, []);

  return (
    <div className="main-section">

      <div className="course-main">
        {/* Left Section - Course Details */}
        <div className="course-left-side">
          <p>Creating</p>
          <h1>Certification in Full Stack Data Science and AI</h1>
          
          <div className="calender">
            Next cohort starting on 14th January
          </div>

          <p>In collaboration with:</p>
          <div className="company-logo">
            <div className="iit-logo">
              <img className="img" src={iitguhati} alt="IIT Guwahati Logo" />
            </div>
            <div className="microsoft">
              <img className="img" src={microsot} alt="Microsoft Logo" />
            </div>
          </div>

          <div className="heding-about-course">
            <p>Advanced Certification from E&ICT Academy, IIT Guwahati.</p>
            <p>6 months part-time program with online classes</p>
            <ul>
              <li><p>Revised curriculum for post Chat-GPT era</p></li>
              <li><p>No prior coding experience required</p></li>
              <li><p>Suitable for final years, graduates, and early professionals.</p></li>
            </ul>
          </div>

          <div className="bottom-button">
            <button>Explore Program</button>
            <button id="enroll">Enrol Now</button>
          </div>
        </div>

        {/* Right Section - Video and Demo Buttons */}
        <div className="course-right-side">
          <div className="video-section">
            {/* Video content can be added here */}
          </div>
          <div className="demobutton">
            <button>Book a Demo class</button>
            <button>Request a Callback</button>
          </div>
        </div>
      </div>

      {/* Section for Other Courses */}
      <section className="course-section">
        <h1>OUR COURSES</h1>
        <div className="course-cards-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img className="course-card-img" src={course.image} alt={course.title} />
              <div className="course-card-body">
                <h2 className="course-card-title">{course.title}</h2>
                <p className="course-card-description">{course.description}</p>
                <a href={course.link} className="course-card-button">Explore Course</a>
              </div>
            </div>
          ))}
        </div>


        
      </section>

      



      <section className="vuew">
      <div className="bg-black text-white p-0 m-0">
              <h1 className="text-center display-5 fw-bolder text-white mt-5">Curriculum and <a href="" className="text-danger">Learning Track</a></h1>
              <center className="p-5 mb-5 h5">
              We have designed our data science course with curriculum and learning pedagogy based on what top tech companies expect when you join them after you graduate. The curriculum focuses on learning by doing including solving real world problems and working on real industry level projects.
              </center>
              <center>
              <div align="center" class="container p-0 m-0" >

              <div className="col-md-4">
              <div class="section text-start " style={{position:"relative",left:'40%'}} >
                  
                  <div class="course " onClick={Introduction} >
                      <div class="course-number">01 &ensp;</div>
                      <div class="course-info p-0 m-0">
                          <h6 className="title">Introduction to Computer Programming</h6>
                          <p class="add-on">Add-On: Pair Programming using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>


                  <div class="course " onClick={Numerical}>
                      <div class="course-number">02 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title">Numerical Programming in Python</h6>
                          <p class="add-on">Add-On: Data Wrangling using Pandas AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Relational}>
                      <div class="course-number">03 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title">Relational Databases</h6>
                          <p class="add-on">Add-On: ChatGPT for writing SQL queries</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Data}>
                      <div class="course-number">04 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title">Data Visualization Tools</h6>
                          <p class="add-on">Add-On: Creating presentations using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Applied}>

                      <div class="course-number">05 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title">Applied Business Analytics</h6>
                          <p class="add-on">Add-On: Leveraging AI for equations simplified via ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Machine} >
                      <div class="course-number">06 &ensp;</div> 
                      <div class="course-info">
                          <h6 className="title">Machine Learning & Generative AI with Microsoft Azure</h6>
                          <p class="add-on">Add-On: Use AI to create AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

              </div>
              </div>
              
              <div className="col-md-1"></div>

              <div className="col-md-4 bggray p-0 m-0">
                    <div style={{display:'flex'}} className="row ">
                          <div className="row">
                              <div className="col-md-4 ">
                                  <h4>Topics</h4>
                              </div>
                              <div className="col-md-8 text-end ">
                                  Dutation : <label htmlFor="" className="text-danger">1 month</label>
                              </div>
                              
                          </div>
                    
                      </div>
                    <hr />
                    <div className='scrollview' style={{overflow:'scroll',position:"relative",height:'300px', scrollbarWidth: 'none'}}>
                    <ul className="text-start" >
                      <li>• {onedata.t1}</li><br /><br />
                      <li>• {onedata.t2}</li><br /><br />
                      <li>• {onedata.t3}</li><br /><br />
                      <li>• {onedata.t4}</li><br /><br />
                      <li>• {onedata.t5}</li><br /><br />
                      <li>• {onedata.t6}</li><br /><br />
                      <li>• {onedata.t7}</li><br /><br />
                      <li>• {onedata.t8}</li><br /><br />
                      <li>• {onedata.t9}</li><br /><br />
                      <li>• {onedata.t10}</li><br /><br />
                    </ul>
                    </div>
              </div>
       <div className="col-md-1"></div>

   </div>
              </center>
          



          
        </div>
        <center>
        <div  className="bg-black ">
        <img src='iconsset.PNG' alt="" width={'90%'} />
        </div>
        </center>
      </section>

    
    

   



</div>
  );
}
