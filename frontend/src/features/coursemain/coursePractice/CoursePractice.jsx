import React, { useState } from 'react'
import './CoursePractice.css'
import ('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
import ('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900');
import ('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');


export default function CoursePractice() {
  const [Allproblems, setAllproblems] = useState([
     
    {
      "problem": "Count the Characters",
      "asked_in": ["HCL", "Pinged"],
      "skill": "Python",
      "difficulty": "Easy",
      "status": "unsolved"
    },
    {
      "problem": "Race for the Armstrong Award",
      "asked_in": ["Somalogy", "HCL", "Microsoft"],
      "skill": "Python",
      "difficulty": "Easy",
      "status": "unsolved"
    },
    {
      "problem": "Mingle to Single : Repeated Digit Sum",
      "asked_in": ["Scal", "Quantzig"],
      "skill": "Python",
      "difficulty": "Easy",
      "status": "unsolved"
    },
    {
      "problem": "Identify Words with Prime Lengths",
      "asked_in": ["Oracle", "Capgemini"],
      "skill": "Python",
      "difficulty": "Easy",
      "status": "unsolved"
    },
    {
      "problem": "Total Salaries",
      "asked_in": [],
      "skill": "SQL",
      "difficulty": "Easy",
      "status": "unsolved"
    },
    {
      "problem": "Mary’s Client Email Formatter",
      "asked_in": ["Somalogy"],
      "skill": "Python",
      "difficulty": "Easy",
      "status": "unsolved"
    }
  ]);

  return (
    <>
    <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
          <h1>Practice</h1>
          <h6>Put your learning to use. Practice and test your skills through curated coding problems and assessments.</h6>

          </div>

          <div className="col-md-6 border m-auto">
              <img width={'50%'} src="/src/features/coursemain/Images/1st.jpg" alt="" />
          </div>
        </div>

       


        
    
    </div>


    <div className="container">
    <div class="navbar">
        <a href="#" class="nav-item active">Coding Problems</a>
        <a href="#" class="nav-item">Supplementary Courses</a>
        <a href="#" class="nav-item">Coding Assessments</a>
        <a href="#" class="nav-item">Quiz Assessments</a>
    </div>
    </div>


    <div class="filter-container">
        <div class="filter-item active">All Problems <span class="filter-count">132</span></div>
        <div class="filter-item">Solved <span class="filter-count">0</span></div>
        <div class="filter-item active">Unsolved <span class="filter-count">132</span></div>
        <select class="filter-item active " style={{padding:"0.7rem"}}>
        
          <option value="">Python</option>
          <option value="">Sql</option>
          <option value="">Intiger,Float,Bulion</option>
          </select>
        <select class="filter-item active" style={{padding:"0.7rem",width:"13%"}} placeholder="Company" id="course-lms-select"><option value="default">Company</option><option value="HCL">HCL</option><option value="Fingent">Fingent</option><option value="OpeninApp">OpeninApp</option><option value="Microsoft">Microsoft</option><option value="SwanCapital">SwanCapital</option><option value="Quantzig">Quantzig</option><option value="Oracle">Oracle</option><option value="Capgemini">Capgemini</option><option value="Unacademy">Unacademy</option><option value="Meta">Meta</option><option value="Nissan">Nissan</option><option value="Cartesian">Cartesian</option><option value="GOQii">GOQii</option><option value="Eaglytics">Eaglytics</option><option value="Agoda">Agoda</option><option value="Freecharge">Freecharge</option><option value="StayVista">StayVista</option><option value="Novartis">Novartis</option><option value="Accenture">Accenture</option><option value="Cisco">Cisco</option><option value="Cognizant">Cognizant</option><option value="Blitzpoker">Blitzpoker</option><option value="Adobe">Adobe</option><option value="IBM">IBM</option><option value="HSBC">HSBC</option><option value="Airtel">Airtel</option><option value="IndiaMART">IndiaMART</option><option value="HCLTech">HCLTech</option><option value="Octalogic Tech">Octalogic Tech</option><option value="Kriyadocs">Kriyadocs</option><option value="Seven Square Technosoft">Seven Square Technosoft</option><option value="CostaCloud">CostaCloud</option><option value="Next Labs">Next Labs</option><option value="Unstop">Unstop</option><option value="Vishleshan">Vishleshan</option><option value="Richpanel Inc">Richpanel Inc</option></select>
       
        <button class="reset-button">Reset</button>

        
    </div>
    <div className="container p-3 ">
    
          <table  width={'100%'} className='table'>  
          <thead>
            <th>Problem</th>
            <th>Ask in</th>
            <th>Skill</th>
            <th>Difficulty</th>
            <th>Status</th>
          </thead>
          <tbody>
           {Allproblems.map((item,index)=>
            <tr>
              <td>{item.problem}</td>
              <td>{item.asked_in}</td>
              <td>{item.skill}</td>
              <td>{item.difficulty}</td>
              <td>{item.status}</td>
            </tr>
           )}
          </tbody>
          </table>
        </div>
   





   
    </>
  )
}
