import React from 'react'
import './SecoundHeader.css'
import Header from '../../comman/Header';
const SecoundHeader = () => {
    function showelement() {
        let aa=document.getElementById('aaa')
        if (aa.style.display=='none'){
            aa.style.display='block'; 

        }
        else if(aa.style.display=='block'){
          aa.style.display=='none'
        }
        aa.style.display=='none'
        

    }
  return (
    <>
        <center  style={{width:'100%',backgroundColor:' #062a6c', color:"white"}}>


        <div align='center' class=" d-flex" style={{marginLeft:"12rem"}}>


        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src/features/secoundHeader/img/doctorateactive.svg"  alt="Doctorate"/><br />
            <span>Doctorate</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\AI+active.svg" alt="AI & ML"/><br />
            <span>AI & ML</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\MBA+active.svg" alt="MBA"/><br />
            <span>MBA</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\data+science+active.svg" alt="Data Science"/><br />
            <span>Data Science</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\Marketing+active.svg" alt="Marketing"/><br />
            <span>Marketing</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\management+active.svg" alt="Management"/><br />
            <span>Management</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\technology+active.svg" alt="Software & Tech"/><br />
            <span>Software & Tech</span>
        </div>
        <div class="" onClick={showelement} style={{marginLeft:"2rem"}}>
            <img width={'25px'} src="src\features\secoundHeader\img\Law+Active.svg" alt="Law"/><br />
            <span>Law</span>
        </div>


        </div>

        <div className='' id='aaa' style={{width:"80%",height:"200px", display:'none'}}>
               <div className="row bg-white" style={{borderBottomRightRadius:'2rem',borderBottomLeftRadius:'2rem'}}>
                <div className="col-md-3 mt-3">
                    <button className='btn btn-success'>Degree / Exec. PG  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg></button><br /><br />
                    <button className='btn btn-success'>Executive Certificate 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg> </button>
                </div>
                <div className="col-md-9 ">
                <br />
                       <div className="row" align='left'>

                      <div className="col-md-6">
                          <div class="mb-3" >

                                  <div class="row g-0">
                                    <div class="col-md-1">
                                      <img width='40px'src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title " style={{fontSize:"10px"}}>IIIT Bangalore</h5>
                                        <p class="card-text" style={{fontSize:"10px"}}>Executive Program in Generative AI for Leaders</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                      </div>
                                    </div>
                                  </div>

                          </div>
                      </div>

                      <div className="col-md-6">
                          <div class="mb-3" >

                                  <div class="row g-0">
                                    <div class="col-md-1">
                                      <img width='40px'src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title " style={{fontSize:"10px"}}>IIIT Bangalore</h5>
                                        <p class="card-text" style={{fontSize:"10px"}}>Post Graduate Certificate in Machine Learning and Deep Learning (Executive)</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                      </div>
                                    </div>
                                  </div>

                          </div>
                      </div>


                      <div className="col-md-6">
                          <div class="mb-3" >

                                  <div class="row g-0">
                                    <div class="col-md-1">
                                      <img width='40px'src="http://d2o2utebsixu4k.cloudfront.net/upgrad/new-home/svg/upGrad.svg" alt="" className=" border img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title " style={{fontSize:"10px"}}>upGrad</h5>
                                        <p class="card-text" style={{fontSize:"10px"}}>Advanced Certificate Program in Generative AI</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                      </div>
                                    </div>
                                  </div>

                          </div>
                      </div>


                      <div className="col-md-6">
                          <div class="mb-3" >

                                  <div class="row g-0">
                                    <div class="col-md-1">
                                      <img width='40px'src="https://d2o2utebsixu4k.cloudfront.net/upgrad/logos/U%26AI_Logo.svg" alt="" className="bg-white border img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title " style={{fontSize:"10px"}}>upGrad | Microsoft</h5>
                                        <p class="card-text" style={{fontSize:"10px"}}>The U & AI GenAI Certificate Program from Microsoft
</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                      </div>
                                    </div>
                                  </div>

                          </div>
                      </div>


                      <div className="col-md-6">
                          <div class="mb-3" >

                                  <div class="row g-0">
                                    <div class="col-md-1">
                                      <img width='40px'src="https://d2o2utebsixu4k.cloudfront.net/upgrad/uni-cards-logos/DS_UniLogo_Dweb/DS_ProgramLogo_Dweb_IITB.svg" alt="" className=" border img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title " style={{fontSize:"10px"}}>IIIT Bangalore</h5>
                                        <p class="card-text" style={{fontSize:"10px"}}>Post Graduate Certificate in Machine Learning & NLP (Executive)</p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
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