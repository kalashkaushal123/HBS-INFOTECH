// import React, { Component } from "react";
import './software.css'
import React, { useRef } from "react";

import main_image from './Images/first_image.webp'
import main_image_logo from './Images/first_image_logo.png'

import scalable from './Images/image1.png'
import leverage from './Images/image2.png'
import accelerate from './Images/image3.png'
import speedup from './Images/image4.png'

import marquee1 from './Images/marquee1.webp'
import marquee2 from './Images/marquee2.svg'
import marquee3 from './Images/marquee3.webp'
import marquee4 from './Images/marquee4.webp'
import marquee5 from './Images/marquee5.webp'
import marquee6 from './Images/marquee6.webp'
import marquee7 from './Images/marquee7.svg'
import marquee8 from './Images/marquee8.svg'

import card1 from './Images/card1_img.webp'
import card2 from './Images/card2_img.webp'
import card3 from './Images/card3_img.webp'
import card4 from './Images/card4_img.webp'
import card5 from './Images/card5_img.webp'
import card6 from './Images/card6_img.webp'


export default function Software() {

  const containerRef = useRef(null);

  const scrollLeft = () => {
      containerRef.current.scrollBy({
        left: -1100,
        behavior: "smooth",
      });
    };
  
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 1100, 
      behavior: "smooth",
    });
  };

  return (
    <>
        <div className='First-Image'>
          <div className='main_div'>
            <img src={main_image} alt="" className='main_image' height="800px" />
            <div className="gradient"></div>

            <div className='main_text'>
            <div className='main_img'>
              <img src={main_image_logo} alt="" />
            </div>
            <h1>Custom Software Development</h1>
            <p>Turn business requirements into an evolutive product that attracts customers and creates new revenue streams. Our team can help you design, develop, test and maintain solutions across all digital channels.</p>
            <button>Contact us</button>
          </div>
          </div>

        </div>


        <div className='img-box-div'>

          <div className='create-scalable'>
            <div className='this-div'>
              <img src={scalable} alt='' height="95px" />
            </div>
            <p>Create scalable solutions from scratch</p>
          </div>

          <div className='create-scalable'>
            <div className='this-div'>
              <img src={leverage} alt='' height="95px" />
            </div>
            <p>Leverage emerging tech like cloud, AI and embedded software</p>
          </div>

          <div className='create-scalable'>
            <div className='this-div'>
              <img src={accelerate} alt='' height="95px" />
            </div>
            <p>Accelerate digital transformation strategies</p>
          </div>

          <div className='create-scalable'>
            <div className='this-div'>
              <img src={speedup} alt='' height="95px" />
            </div>
            <p>Speed up software delivery and time to market</p>
          </div>

        </div>



                {/* stages  */}

        <div className='all-stages'>
          <h2>The 5 stages of our custom software development</h2>

          <div className='row'>
            <div className="col-md-6">
              <div className=''>

                <div className='stage-1 one'>
                  <div className='stage-img'>
                    <p>01</p>
                  </div>
                  <div className='stage-text'>
                    <h3>Discovery</h3>
                    <p>Every project starts with workshops to explain context, establish goals and generate a feature backlog. This enables our team to collect, validate and prioritize your product requirements and ideas.</p>
                  </div>
                </div>

                <div className='stage-1'>
                  <div className='stage-img'>
                    <p>03</p>
                  </div>
                  <div className='stage-text'>
                    <h3>Product development</h3>
                    <p>Using Agile methodologies, our team starts developing a Minimum Viable Product, ensuring high quality, dependable stability and easy maintenance.</p>
                  </div>
                </div>

                <div className='stage-1'>
                  <div className='stage-img'>
                    <p>05</p>
                  </div>
                  <div className='stage-text'>
                    <h3>Refinement and iterations</h3>
                    <p>Once a solution goes live, our team starts measuring its performance, monitoring system usage data and running A/B tests on end users to gather insights that help to refine your product.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className='stages-number-2 mt-3'>

                  <div className='d-flex'>
                    <div className='stage-img'>
                      <p>02</p>
                    </div>

                    <div className='stage-text '>
                      <h3>Ideation and wireframing</h3>
                      <p>In this phase, our team creates a prototype and tests it on end users through Design Sprints, Event Storming, Game Storming and other proven methodologies.</p>
                    </div>
                  </div>

                  <div className='stage-1 three'>
                    <div className='stage-img'>
                      <p>04</p>
                    </div>
                    <div className='stage-text'>
                      <h3>Deployment</h3>
                      <p>Leveraging the best DevOps practices enables our experts to swiftly deploy products after the development phase while maintaining the highest stability standards.</p>
                    </div>
                  </div>

              </div>
            </div>




         

        </div>

        {/* marquee */}


        

        </div>


        <section className='marquee-1'>
          <h2>Who we've helped</h2>

          <marquee>
            <ul>
              <li> <img src={marquee1} alt='' height="48px" width="141px" /> </li>
              <li> <img src={marquee2} alt='' height="24px" width="142px" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee3} alt='' height="55" width="85" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee4} alt='' height="48px" width="287px" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee5} alt='' height="36px" width="96px" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee6} alt='' height="36px" width="118px" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee7} alt='' height="24px" width="141px" style={{marginLeft:"5rem"}} /> </li>
              <li> <img src={marquee8} alt='' height="37px" width="100px" style={{marginLeft:"5rem"}} /> </li>
            </ul>
          </marquee>

        </section> 

        <div className='custom-software'>
        
          
          <h2 style={{marginTop:"100px", marginBottom:"60px", fontSize:"28px"}}>Engineering and consultancy that deliver value</h2>


          <div style={{display:'flex'}}>
            <div className='gen'> 
              <img src={card1} alt="" height='300px' />
              <div className='gen_text' style={{width:'342px'}}>
                Generative AI development services
              </div>
          
              <div className='text'>
                Use generative AI models to stay ahead of your competition.
              </div>
            </div>

            <div className='gen'> 
              <img src={card2} alt="" height='300px' />
              <div className='gen_text' style={{width:'342px'}}>
                Cloud consulting & services
              </div>
          
              <div className='text'>
                Use generative AI models to stay ahead of your competition.
              </div>
            </div>

            <div className='gen'> 
              <img src={card3} alt="" height='300px' />
              <div className='gen_text' style={{width:'342px'}}>
                Data science services
              </div>
          
              <div className='text'>
                Operationalize data to drive efficiency, insights and decision-making. 
              </div>
            </div>
          </div>


          <h2 style={{paddingTop:"100px", marginBottom:"60px", fontSize:"28px"}}>Engineering expertise that supports industries</h2>



            <div style={{display:'flex', marginTop:'3rem'}}>
                  
                <div className='gen'> 
                    <img src={card4} alt="" height='300px' />
                    <div className='gen_text' style={{width:'342px'}}>
                      Financial services
                    </div>
                  
                    <div className='text'>
                      Engineer customized solutions that increase personalization and user conversion across channels. 
                    </div>
                  </div>
        
                  <div className='gen'> 
                    <img src={card5} alt="" height='300px' />
                    <div className='gen_text' style={{width:'342px'}}>
                      Telecom
                    </div>
                  
                    <div className='text'>
                      Work with experienced engineering teams to create evolutive solutions for your customers. 
                    </div>
                  </div>
        
                  <div className='gen'> 
                    <img src={card6} alt="" height='300px' />
                    <div className='gen_text' style={{width:'342px'}}>
                      Sports betting
                    </div>
                  
                    <div className='text'>
                      Develop online betting software that prioritizes rewarding customer experience. 
                    </div>
                  </div>
              </div>



          <div className="client">
            <h2>Client reviews</h2>

          <div className='client_review'>
            <div className='client1'>
              <h3 className='client_heading'> 
                <a href="" style={{textDecoration:'none'}} >Software Mind Reviews</a>
                <span className='c_review'>4.9</span>
                <span className="star">★★★★★</span>
                <span className="review">50 REVIEWS</span>
              </h3>

              <div className='clutch'>
                <span style={{fontSize:'12px'}}>Powered by</span>
                <span style={{fontWeight:'700'}}>Clutch</span>
              </div>
            </div>

            <div>

            <button className='c_btn' onClick={scrollLeft} style={{zIndex:1000}}>&#8249;</button>

            <div className='client_text' ref={containerRef}>

              <div className='clientT1' style={{marginLeft:'60px'}}>
                <div>2.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>

              <div className='clientT1'>
                <div>3.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>

              <div className='clientT1'>
                <div>4.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>

              <div className='clientT1'>
                <div>5.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>

              <div className='clientT1'>
                <div>4.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>


              <div className='clientT1'>
                <div>3.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>


              <div className='clientT1'>
                <div>2.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>


              <div className='clientT1'>
                <div>1.0 <span className="star">★★★★★</span> </div>
                <p>"They are very professional and always try to accommodate any requests we have concerning resources or projects."</p>
                <span style={{color:'grey',fontSize:'12px'}}>Sr. Dir. of Software Engineering, Default Solutions Company</span> <br />
                <span style={{margin:'5px 0px', color:'grey', fontSize:'12px'}}>Verified Review</span>
              </div>

            </div>
            
            <button className='c_btn' style={{right:'1.5rem'}} onClick={scrollRight}>&#8250;</button> 
            </div>
          </div>

        </div>



          </div> 
    
    </>
  )
}
