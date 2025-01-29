import React, { useState } from 'react'
import './SecoundHeader.css'
import { Link } from 'react-router-dom';
const SecoundHeader = () => {
    const [state, setstate] = useState([
            {
                id:1,
                svg:"src/features/secoundHeader/img/doctorateactive.svg",
                name:"Doctorate"
            },
            {
                id:2,
                svg:"src/features/secoundHeader/img/AI+active.svg",
                name:"AI & ML"
            },
            {
                id:3,
                svg:"src/features/secoundHeader/img/MBA+active.svg",
                name:"MBA"
            },
            {
                id:4,
                svg:"src/features/secoundHeader/img/data+science+active.svg",
                name:"Data Science"
            },
            {
                id:5,
                svg:"src/features/secoundHeader/img/Marketing+active.svg",
                name:"Marketing"
            },
            {
                id:6,
                svg:"src/features/secoundHeader/img/management+active.svg",
                name:"Management"
            },
            {
                id:7,
                svg:"src/features/secoundHeader/img/technology+active.svg",
                name:"Software & Tech"
            },
            {
                id:8,
                svg:"src/features/secoundHeader/img/Law+Active.svg",
                name:"Law"
            }


        
    ]);
    const [showhide, setshowhide] = useState(false);

    



    const [isHoveringService, setIsHoveringService] = useState(false); 
  return (
    <>
        <center onMouseLeave={() => setIsHoveringService(false)} style={{width:'100%',background:" #062a6c",}} className='shadow  p-0 m-0 ' >
            <div className='p-0 m-0 ' style={{width:"55%"}}>
                <div className="row m-0 p-0">
                    {state.map((item,index)=>
                        <div key={index} className="col m-0 p-0 " 
                            onMouseEnter={() => setIsHoveringService(true)} >
                            <div className='hovercolor btn-color' >
                                                            
                                    <img  id='img'  className=' text-decoration-none grayscale '
                                        width='30px' src={item.svg} style={{stroke:"green",strokeWidth:"30"}} /><br />
                              
                                <span className=' textsize'>
                                    <label id='label' htmlFor="" className='showhim  m-auto ' >
                                        {item.name}&nbsp;
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" 
                                            className="svgrotate bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                                    </label>
                                </span> 
                            </div>
                        </div>
                    )}
                </div>
            
            </div>
            
        </center>
      




    </>
  )
}

export default SecoundHeader