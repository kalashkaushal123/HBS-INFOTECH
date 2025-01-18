import "bootstrap/dist/css/bootstrap.min.css";
import './solutions.css'
import { useState } from "react";

export default function Solutions() {
  const [collection, setcollection] = useState([
    {
      'id':0,
      // 'number':'0',
      'title':'Bridge the Gap',
      'sub':'Between Business and Technology',
      'color':''
    },
    {
      'id':1,
      'number':'1',
      'title':'Microsoft Solutions',
      'sub':'Unlock the power of Microsofts suite of solutions and elevate your business. Streamline operations, boost collaboration, and drive innovation with our expertly tailored Microsoft services.',
      'color':'pink'
    },
    {
      'id':2,
      'number':'2',
      'title':'Coconut ERP',
      'sub':'With Coconut ERP you get Industry 4.0 compatible ERP. Now you do have visibility of all of your plants and sites with single intelligent and smart age dashboard.',
      'color':'sky'
    },
    {
      id:3,
      number:'3',
      title:'atsMantra',
      sub:'Case is defined in businesses as one of issues to be handled. With Caseio Enterprises can resolve complex issues and ensure that optimal solutions are put together.',
      'color':'purpal'
    },
    {
      id:4,
      number:'4',
      title:'Recruitment Services',
      sub:"Revolutionize your hiring process with our expert recruitment solutions. We'll find your perfect dream team while you stay focused on your core business.",
      'color':'green'
    },
    {
      id:5,
      number:'5',
      title:'Database Design & Development',
      sub:'HBS Database Specialists focus on providing potential outcomes with the complex needs of organizations. Potent IT services for optimized data storage & management.',
      'color':'yellow'
    },
    {
      id:6,
      number:'6',
      title:'Application development',
      sub:'RARR Application developer focuses on developing tailor-made mobile applications using top notch technologies. mobile app development with expert analysis and UI/EX design.',
      'color':'pink'
    },
    {
      id:6,
      number:'7',
      title:'UI/UX Design',
      sub:'Elevate your digital presence with our exceptional UI/UX design service. We craft captivating interfaces that engage users, prioritize seamless interactions, and ensure responsive design across devices.',
      'color':'sky'
    }
  ]);
  return (
    <>
    <center>
    <div className="container-fluid mt-4 text-start" style={{width:'92%'}}>
        <div className="row">
        {collection.map((item,key)=>
        
        <>
        <div  className="col-md-3 startline startline2">
             
              
                  <div className={item.id==0 ? 'sub-head  marset mt-5 ':'sub-head '+item.color}>
                      {item.number}
                  </div>
                  
                  <div className="small-head">{item.title}</div>
                  <p>{item.sub}</p>
                  {item.id===0 ? 
                  <></>:
                  <>
                    <button className="btn border"> Learn more</button>
                  </>}
              
              
              
          </div>
          <div className="bottomeveryline"></div>
            {item.id ===3? 
            <>
            <div className="bottomline"></div>
            </> 
            :
            <></>}
        </>
        )}
      
          
        </div>
    </div>
    </center>

    <br /><br /><br /><br />



    
    </>
  );
}
