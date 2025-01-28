import "bootstrap/dist/css/bootstrap.min.css";
import './course.css'
import microsot from '../courses/images/microsoft.png';
import iitguhati from '../courses/images/iiguhati.png';
import courseImage1 from '../courses/images/course1.jpeg'; // 
import courseImage2 from '../courses/images/course2.jpeg'; // Add an image for the course
import courseImage3 from '../courses/images/course3.jpeg'; // Add an image for the course

import { useEffect, useState } from "react";
import Header from "../../comman/Header";
import Footer from "../../comman/Footer";
import { Link } from "react-router-dom";


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
  const [onedata, setonedata] = useState({});
  const [languageColl, setlanguageColl] = useState([
    {'img':'python.webp',
      'title':'Python'
    },
    {'img':'pandas.webp',
      'title':'Pandas'
    },
    {'img':'numpy.webp',
      'title':'NumPy'
    },
    {'img':'matplotlib.webp',
      'title':'Matplotlib'
    },
    {'img':'SQL.webp',
      'title':'SQL'
    },
    {'img':'tableau.webp',
      'title':'Tableau'
    },
    {'img':'power-bi.webp',
      'title':'PowerBI'
    },
    {'img':'git.webp',
      'title':'GIT'
    },
    {'img':'github.webp',
      'title':'GitHub'
    },
    {'img':'scikit.3c999cb6.svg',
      'title':'Scikit-Learn'
    },
    {'img':'xgboost.ce4f3649.svg',
      'title':'XGBoost'
    },
    {'img':'NLTK.webp',
      'title':'NLTK'
    },
    {'img':'scipy.0c3c9f53.svg',
      'title':'SciPy'
    },
    {'img':'pytorch.webp',
      'title':'PyTorch'
    },
    {'img':'tensor-flow.webp',
      'title':'TensorFlow'
    },
    {'img':'gpt.webp',
      'title':'Chat GPT'
    },
    {'img':'claude.58786435.svg',
      'title':'Claude'
    },
    {'img':'langchain.2852fd57.svg',
      'title':'LangChain'
    },
    {'img':'hugging-face.318578d3.svg',
      'title':'Hugging Face'
    },
    {'img':'midway-journey.97430ae0.svg',
      'title':'MidJourney'
    },
    {'img':'gemini.cb778bb8.svg',
      'title':'Gemini'
    },
    {'img':'dall-e.a621d4c5.svg',
      'title':'Dall-E'
    },
    {'img':'runway-ml.43c8523a.svg',
      'title':'Runway ML'
    },
    {'img':'gradio.4e207dfb.svg',
      'title':'Gradio'
    },
    

  ]);

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
    <>
    <Header></Header>
    <div className="main-section">
    
      <section>
      <div className="bg-black text-white p-0 mt-5">
              <h1 className="text-center display-5 fw-bolder text-white">
                    Curriculum and 
                    <a href="" className="text-danger">Learning Track</a></h1>
              <center className="p-5 mb-5 h5">
              We have designed our data science course with curriculum and learning pedagogy based on what top tech companies expect when you join them after you graduate. The curriculum focuses on learning by doing including solving real world problems and working on real industry level projects.
              </center>

              <center>
              <div align="center" class="container p-0 m-0" >
       



              <div className="col-md-4">
              <div class="section text-start " style={{position:"relative",left:'40%'}} >
                  
                  <div class="course " onClick={Introduction} >
                      <div class="course-number mb-4 ">01 &ensp;</div>
                      <div class="course-info p-0 m-0">
                          <h6 className="title text-white">Introduction to Computer Programming</h6>
                          <p class="add-on">Add-On: Pair Programming using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>


                  <div class="course " onClick={Numerical}>
                      <div class="course-number mb-4">02 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Numerical Programming in Python</h6>
                          <p class="add-on">Add-On: Data Wrangling using Pandas AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Relational}>
                      <div class="course-number mb-4">03 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Relational Databases</h6>
                          <p class="add-on">Add-On: ChatGPT for writing SQL queries</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Data}>
                      <div class="course-number mb-4">04 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Data Visualization Tools</h6>
                          <p class="add-on">Add-On: Creating presentations using ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Applied}>

                      <div class="course-number mb-4">05 &ensp;</div>
                      <div class="course-info">
                          <h6 className="title text-white">Applied Business Analytics</h6>
                          <p class="add-on">Add-On: Leveraging AI for equations simplified via ChatGPT</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

                  <div class="course " onClick={Machine} >
                      <div class="course-number mb-4">06 &ensp;</div> 
                      <div class="course-info">
                          <h6 className="title text-white">Machine Learning & Generative AI with Microsoft Azure</h6>
                          <p class="add-on">Add-On: Use AI to create AI</p>
                      </div>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                  </div>

              </div>
              </div>

        <div className="col-md-1"></div>

       <div className="col-md-4 bggray p-0 m-0 bg-dark rounded-3">
             <div style={{display:'flex'}} className="row ">
                  <div className="row p-4">
                      <div className="col-md-4 ">
                          <h4>Topics</h4>
                      </div>
                      <div className="col-md-8 text-end ">
                          Dutation : <label htmlFor="" className="text-danger">1 month</label>
                      </div>
                      
                  </div>
             
              </div>
             <hr />
             <div className='scrollview ' style={{overflow:'scroll',position:"relative",height:'300px', scrollbarWidth: 'none'}}>
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

     
        <div className="bg-black pt-5">
        {/* <img src='iconsset.PNG' alt="" width={'90%'} /> */}

       <center>
       <div className="row container ">
        {languageColl.map((item,index)=>
        <>
        <div align='center' className="col-md-2 col-4 ">
                <img className="border rounded-2 p-1 imgsizehover"  src={item.img} width={'40px'} height='40px' alt="" />
                <br /><br />
                <p className="text-white text-center ">&ensp; {item.title}</p>
          </div>
        </>)}
          
        </div>
       </center>
        
              
        </div>
      </section>

    
    

   



</div>
<Footer></Footer>
</>
  );
}
