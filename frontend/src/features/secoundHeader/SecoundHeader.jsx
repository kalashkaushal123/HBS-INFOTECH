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
    function showelement() {
        let aa=document.getElementById('aaa');
        let rotate=document.getElementById('rotate');
        let img=document.getElementById('img');
        let label=document.getElementById('label');
        let hashLink=document.getElementById('hashLink');
        // aa.style.display='block';
        rotate.style.rotate='0deg';
        rotate.style.color='red';
        rotate.style.transition='0.5s ease-in-out';
        label.style.color='orangered';
        img.style.filter='none';
        hashLink.style.display='block';
        if (showhide==false){
            console.log('false');
            
            aa.style.display='block';
            setshowhide(true)
        }
        else if(showhide==true){
            console.log('true');
            
            aa.style.display='none';
            setshowhide(false)
        }
        
       
        
    
    }
  return (
    <>
        <center style={{width:'100%',background:" #062a6c",borderBottom:'0px solid gray'}} className='shadow  p-0 m-0 ' >
        <div className='p-0 m-0 ' style={{position:"",left:'0%',width:"55%"}}>
            <div className="row m-0 p-0">
                {/* <div className="col-md-2 p-0 m-0"></div> <div className="col-md-1"></div> */}

                {state.map((item,index)=>
                <>
                <div className="col m-0 p-0 " onClick={showelement}>
                    <div className='textChager ' onClick={showelement}>
                        <a href="#hashLink" className=' text-decoration-none grayscale textChager'>
                            <img id='img' width='30px' src={item.svg} style={{stroke:"green",strokeWidth:"30"}} /><br />
                        </a>
                        <span className=' textsize ' >
                            <label id='label' htmlFor="" className='m-auto ' >{item.name}&nbsp;
                                <svg id='rotate'  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className=" svgrotate  textChager bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                            </label>
                        </span> 
                    </div>
                </div>
               
                </>
                )

                }
            </div>
        
        </div>




        <div id="hashLink" style={{width:"100%"}} className='bottomShadow border-bottom'>
                  <div className='' id='aaa' style={{ width: "60%", height: "200px", display: 'none' }}>
                      <div className="row  shadow p-3 mb-5  bg-body" style={{ borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem' }}>
                          <div className="col-md-4 mt-3 card bg-transparent rounded-0 " style={{ borderRight: "1px solid gray", borderTop: "0", borderLeft: '0', borderBottom: "0" }}>

                              <button className=' d-flex btn btn-color w-100  '>
                                  <div className='fonw'>Degree / Exec. PG  </div>
                                  <div style={{marginTop:"-8%"}}>
                                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg></div>
                              </button><br />

                              <button className='d-flex btn btn-color '>
                                  <div className='fonw'>Executive Certificate </div>
                                  <div style={{marginTop:"-8%"}}>
                                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray-400 group-hover:text-white block" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                                </div>
                              </button>
                          </div>
                          <div className="col-md-8 ">
                              <br />
                              <div className="row" align='left'>

                                  <div className="col-md-6">
                                      <div class="mb-1">
                                          <div class="row g-0">
                                              <div class="col-md-2 ">
                                                  <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h5 class="card-title ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</h5>
                                                      <a href="" className='td-none'><p class="card-text ps-2 ps-2" style={{ fontSize: "10px" }}>Executive Program in Generative AI for Leaders</p></a>
                                                      {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div class="mb-3" >

                                          <div class="row g-0">
                                              <div class="col-md-2">
                                                  <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h5 class="card-title ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</h5>
                                                      <div className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>Post Graduate Certificate in Machine Learning and Deep Learning (Executive)</p></div>
                                                      {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>


                                  <div className="col-md-6">
                                      <div class="mb-3" >

                                          <div class="row g-0">
                                              <div class="col-md-2">
                                                  <img src="http://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/svg/upGrad.svg" alt="" className=" border img-fluid rounded-start" />
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h5 class="card-title ps-2" style={{ fontSize: "10px" }}>upGrad</h5>

                                                      <a href="" className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>Advanced Certificate Program in Generative AI</p></a>

                                                      {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>


                                  <div className="col-md-6">
                                      <div class="mb-3" >

                                          <div class="row g-0">
                                              <div class="col-md-2">
                                                  <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/logos/U%26AI_Logo.svg" alt="" className="bg-white border img-fluid rounded-start" />
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h5 class="card-title ps-2" style={{ fontSize: "10px" }}>upGrad | Microsoft</h5>
                                                      <a href='' className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>The U & AI GenAI Certificate Program from Microsoft</p></a>

                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>


                                  <div className="col-md-6">
                                      <div class="mb-3" >

                                          <div class="row g-0">
                                              <div class="col-md-2">
                                                  <img src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                              </div>
                                              <div class="col-md-8">
                                                  <div class="card-body">
                                                      <h5 class="card-title ps-2" style={{ fontSize: "10px" }}>IIIT Bangalore</h5>
                                                      <div className='td-none'></div>
                                                      <a href='' className='td-none'><p class="card-text ps-2" style={{ fontSize: "10px" }}>
                                                          Post Graduate Certificate in Machine Learning & NLP (Executive)</p></a>
                                                      {/* <p class="card-text ps-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                  </div>
                                              </div>
                                          </div>

                                      </div>
                                  </div>





                              </div>
                          </div>
                      </div>
                  </div>
        </div>
        </center>





    </>
  )
}

export default SecoundHeader