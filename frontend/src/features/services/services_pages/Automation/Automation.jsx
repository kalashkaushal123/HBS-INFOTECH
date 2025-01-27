import './automation.css'

import main_image from './image/main.webp'
import setting from './image/setting.png'

import functional_testing from './image/functional_testing.png'
import automated_testing from './image/automated_testing.png'
import security_testing from './image/security_testing.png'
import dedicated_term from './image/dedicated_term.png'
import manual_test from './image/manual_test.png'
import performance from './image/performance.png'
import manage from './image/manage.png'
import data_test from './image/data_test.png'

import mobile from './image/mobile.png'
import orange from './image/orange.png'
import dvs from './image/dvs.png'
import openBet from './image/openBet.png'

import case1 from './image/case1.png'
import case2 from './image/case2.png'

import card1 from './image/card1.webp'
import card2 from './image/card2.webp'
import card3 from './image/card3.webp'
import card4 from './image/card4.webp'
import card5 from './image/card5.webp'
import card6 from './image/card6.webp'
import Header from "/src/comman/Header.jsx";

import slide from './image/slide_image.png'
import slide1 from './image/slide_image1.png'
import slide2 from './image/slide_image2.png'
import slide3 from './image/slide_image3.png'
import slide4 from './image/slide_image4.png'
import slide5 from './image/slide_image5.png'

import Footer from "/src/comman/Footer.jsx";
import { useRef } from 'react'

export default function Automation() {

  const containerRef = useRef(null);
  const clientRef = useRef(null);

  const scrollLeft = () => {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    };
  
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, 
      behavior: "smooth",
    });
  };


  const Left = () => {
    clientRef.current.scrollBy({
      left:-1000,
      behavior: "smooth",
    });
  }

  const Right = () => {
    clientRef.current.scrollBy({
      left:-1000,
      behavior: "smooth",
    });
  }


  return (
    <>
    <Header/>
    <div className='main_div '>
      <img src={main_image} alt="" className='main_image' height='' />
      <br /><br /><br /><br /><br />
      <div className="gradient"></div>
      <div className='main_text '>
        <div className='main_img'>
          <img src={setting} alt="" />
        </div>
       
          <h1>Automation Testing Services</h1>
          <p align='center'style={{margin:"5rem"}}>Improve accuracy and speed up software delivery through automated testing strategies that save time, reduce costs and enhance product quality.</p>
    
       <br /><br /><br />
        <button>Contact us</button>
      </div>
    </div>

    <div className='auto'>
      <div className='auto-text'>
        <h2>
          Automation testing services increase accuracy & speed up delivery
        </h2>
        <p>
          For companies serious about software quality and committed to swiftly delivering services to their customers, automatic tests are essential. We provide comprehensive support in the construction of integrated test platforms, including production environments, test teams and the tests themselves.
        </p>
      </div>
      
    




<br />
      <h2>Why do companies turn to us?</h2>

      <div className='para'>
        <div>

          <div className='com mb-4'>
            <div className='com_icon'></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
              <p>across the financial services, telecommunications,<br />_ sports betting and other industries</p>
            </div>
          </div>

          <div className='com mb-4'>
            <div className='com_icon'></div>
              <div className='com-text'>
                <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
                <p>across the financial services, telecommunications,<br /> sports betting and other industries</p>
            </div>
          </div>

          <div className='com mb-4'>
            <div className='com_icon'></div>
              <div className='com-text'>
                <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
                <p>across the financial services, telecommunications,<br /> sports betting and other industries</p>
              </div>
            </div>
        </div>
 
        <div style={{marginLeft:'80px'}}>

          <div className='com mb-4'>
            <div className='com_icon'></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
              <p>across the financial services, telecommunications,<br /> sports betting and other industries</p>
            </div>
          </div>

          <div className='com mb-4'>
            <div className='com_icon'></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
              <p>across the financial services, telecommunications,<br /> sports betting and other industries</p>
            </div>
          </div>

          <div className='com mb-4'>
            <div className='com_icon'></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Extensive experience</h5>
              <p>across the financial services, telecommunications,<br /> sports betting and other industries</p>
            </div>
          </div>
        </div>
 
      </div>
    </div>


<section>
<h2 className='' style={{marginLeft:"8rem"}}><strong className=''>Our testing services cover all stages of software development</strong></h2>

<div className='testing'>
  <div className='row' style={{marginLeft:"8rem"}}>

    <div className='col-md-6 mb-4 '>
      <div className="d-flex">
      <div className='testing_image'>
        <img src={functional_testing} alt="" height="60px" />
      </div>
      <div className='testing_text'>
        <h5 style={{fontWeight:'600'}}>Functional Testing</h5>
        <p className='pe-5'>Provide full functionality of your software to meet your customers’ needs and increase customer trust in your product.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
      <div className='d-flex'>
      <div className='testing_image'>
        <img src={automated_testing} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 style={{fontWeight:'600'}}>Automated Testing</h5>
        <p className='pe-5'>Automate critical application areas or build end-to-end test automation platforms using the latest tools.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={security_testing} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 style={{fontWeight:'600'}}>Security Testing</h5>
        <p className='pe-5'>Carry out environmental safety audits and protect your customers’ data.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={dedicated_term} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 style={{fontWeight:'600'}}>Dedicated team or end-to-end service</h5>
        <p className='pe-5'>Build a dedicated team of carefully selected specialists or deliver our service in a Fix Price model.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={manual_test} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 ><strong>Manual Testing</strong></h5>
        <p className='pe-5'>Test whether new functionalities comply with requirements, deliver a rewarding interface and are intuitive to use.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={performance} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 ><strong>Performance Testing</strong></h5>
        <p className='pe-5'>Identify application performance problems (slow response <br /> times, bottlenecks and poor scalability) before running your solution in a production environment.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={manage} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 ><strong>Managed Testing</strong></h5>
        <p className='pe-5'>Manage your test processes so you can focus on your core business.</p>
      </div>
      </div>
    </div>

    <div className='col-md-6 mb-4 '>
    <div className="d-flex">
      <div className='testing_image'>
        <img src={data_test} alt="" height="60px"  />
      </div>
      <div className='testing_text'>
        <h5 ><strong>Test Data Management</strong></h5>
        <p className='pe-5'>Create and manage test data in an efficient and automated manner.</p>
      </div>
      </div>
    </div>


  </div>
  <div>



  </div>
</div>
      
</section>

      <section className='device'>
        <h2>Who we’ve helped</h2>

        <div>
          <img src={mobile} alt="" height='50px' />
          <img src={orange} alt="" height='70px' className='dev_img' />
          <img src={dvs} alt="" height='35px' className='dev_img' />
          <img src={openBet} alt="" height='40px' className='dev_img' />
        </div>
      </section>

      <section className='auto'>
        <div className='case_head'>
          <h2>Case studies</h2>
          <button>More case studies <span style={{fontSize:'25px'}}>&#8250;</span> </button>
        </div>

        <div className='case_box'>
          <div className='case_img'>
            <img src={case1} alt="" />
          </div>
          <div className='case_text'>
            <a href="">
              <p style={{marginBottom:'10px'}}>FANANCIAL SERVICES</p>
              <h3>Building a test automation platform for a mulinational insurance company</h3>
              <p>Software Mind prepared a test automation framework based on Selenium WebDriver and created robots to automate labor-intensive and repetitive work, automated web and desktop applications, as well as installed and configured a test suite launching platform.</p>
              <button>Learn more <span style={{fontSize:'25px'}}>&#8250;</span> </button>
            </a>
          </div>
        </div>

      
        <div className='case_box box1'>
          <div className='case_img'>
            <img src={case2} alt="" />
          </div>
          <div className='case_text1'>
            <a href="">
              <p style={{marginBottom:'10px'}}>Telecom</p>
              <h3>Building and developing a test automation platform for an international mobile telecommunications company </h3>
              <p>Software Mind helped a global telco company build a test automation platform for physical and virtual machines. Beyond enabling reporting on various platforms and developing a GUI to access data, we migrated and rebuilt existing automated scripts. </p>
              <button>Learn more <span style={{fontSize:'25px'}}>&#8250;</span> </button>
            </a>
          </div>
        </div>


        <div className="client">
          <h2>Client reviews</h2>

          <div className='client_review'>
            <div className='client1'>
              <h3 className='client_heading'> 
                <a href="">Software Mind Reviews</a>
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

            <button className='c_btn' onClick={Left} style={{zIndex:1000}}>&#8249;</button>

            <div className='client_text' ref={clientRef}>

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
            
            <button className='c_btn' style={{right:'1.5rem'}} onClick={Right}>&#8250;</button> 
            </div>
          </div>

        </div>


        <div className='auto_box'>
          <h2>
            Automation testing insights
          </h2>
          <p>
            Get expert advice and best practices on efficiently testing solutions, automating tests and conducting effective quality assurance.
          </p>
        </div>


      </section>



      
      <div className="slider">
          <button className='btn left' onClick={scrollLeft}>&#8249;</button>
          <div className="slides" ref={containerRef}>

            <div className="slide" style={{marginLeft:'160px'}}>
              <div className="slide_img">
                <img src={slide1} alt="" />
              </div>
              <div className="slide_text">
                <div className="image">
                  <img src={slide} alt="" />
                  <div className="txt">
                    KAROLINA BLOK <br/>
                    2024/04/04
                  </div>
                </div>
                <p>Google Chrome Tools and Extensions to Make Software Testing More Efficient</p>
                <button>Read more <span className='icon'>&#8250;</span> </button>
              </div>
            </div>

            <div className="slide">
            <div className="slide_img">
                <img src={slide2} alt="" />
              </div>
              <div className="slide_text" style={{backgroundColor:'black'}}>
                <div className="image">
                  <img src={slide} alt="" />
                  <div className="txt">
                    KAROLINA BLOK <br/>
                    2023/09/28
                  </div>
                </div>
                <p>Tips & Best Practices for Choosing the Right Automation Testing Framework for Your Software Project</p>
                <button>Read more <span className='icon'>&#8250;</span> </button>
              </div>
            </div>

            <div className="slide">
            <div className="slide_img">
                <img src={slide3} alt="" />
              </div>
              <div className="slide_text" style={{backgroundColor:'rgb(210, 210, 210)', color:'black'}}>
                <div className="image">
                  <img src={slide} alt="" />
                  <div className="txt">
                    KAROLINA BLOK <br/>
                    2023/08/03
                  </div>
                </div>
                <p style={{color:'black'}}>Why Automation Testing is Essential for Quality Assurance</p>
                <button style={{color:'black', border:'1px solid black'}}>Read more <span className='icon'>&#8250;</span> </button>
              </div>
            </div>

            <div className="slide">
            <div className="slide_img">
                <img src={slide4} alt="" />
              </div>
              <div className="slide_text">
                <div className="image">
                  <img src={slide} alt="" />
                  <div className="txt">
                    KAROLINA BLOK <br/>
                    2023/03/23
                  </div>
                </div>
                <p>Microservices & Non-functional Testing – How Can You Ensure High Performance of Your Microservice-based App?</p>
                <button>Read more <span className='icon'>&#8250;</span> </button>
              </div>
            </div>

            <div className="slide" style={{marginRight:'160px'}}>
            <div className="slide_img">
                <img src={slide5} alt="" />
              </div>
              <div className="slide_text" style={{backgroundColor:'black'}}>
                <div className="image">
                  <img src={slide} alt="" />
                  <div className="txt">
                    KAROLINA BLOK <br/>
                    2023/02/16
                  </div>
                </div>
                <p>Quality Assurance – Software Development’s Guarantee of Business Value</p>
                <button>Read more <span className='icon'>&#8250;</span> </button>
              </div>
            </div>

          </div>
          <button className='btn right' onClick={scrollRight}>&#8250;</button>
        </div>


      <div className='contain'>
        <div>
          <h2>
            Improve delivery accuracy and effectiveness
          </h2>

          <button>
            Contact us
          </button>
        </div>
        <div className='contain_text'>
          <p>1500+ experts</p>
          <p>25+ years of innovation</p>
          <p>250+ clients who trust us</p>
        </div>
      </div>
      

      <section className='auto'>



        <div className='auto_box'>
          <h2 className='auto_box_heading'>
            Looking for other software services?
          </h2>
          <p>
            For over two decades we've been helping companies across markets and sectors develop disruptive solutions. Proven ways of working, domain knowledge and an open culture that prioritizes ownership mean we contribute from day one.
          </p>
        </div>


        <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Engineering and consultancy that deliver value</h2>



        <div style={{display:'flex'}}>
          <div className='gen'> 
            <img src={card1} alt="" height='300px' />
            <div className='gen_text'>
              Generative AI development services
            </div>
          
            <div className='text'>
              Use generative AI models to stay ahead of your competition.
            </div>
          </div>

          <div className='gen'> 
            <img src={card2} alt="" height='300px' />
            <div className='gen_text'>
              Cloud consulting & services
            </div>
          
            <div className='text'>
              Use generative AI models to stay ahead of your competition.
            </div>
          </div>

          <div className='gen'> 
            <img src={card3} alt="" height='300px' />
            <div className='gen_text'>
            Data science services
            </div>
          
            <div className='text'>
            Operationalize data to drive efficiency, insights and decision-making. 
            </div>
          </div>
        </div>

        


        <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Engineering and consultancy that deliver value</h2>



        <div style={{display:'flex'}}>
          <div className='gen'> 
            <img src={card4} alt="" height='300px' />
            <div className='gen_text'>
            Financial services
            </div>
          
            <div className='text'>
            Engineer customized solutions that increase personalization and user conversion across channels. 
            </div>
          </div>

          <div className='gen'> 
            <img src={card5} alt="" height='300px' />
            <div className='gen_text'>
            Telecom
            </div>
          
            <div className='text'>
            Work with experienced engineering teams to create evolutive solutions for your customers. 
            </div>
          </div>

          <div className='gen'> 
            <img src={card6} alt="" height='300px' />
            <div className='gen_text'>
            Sports betting
            </div>
          
            <div className='text'>
            Develop online betting software that prioritizes rewarding customer experience. 
            </div>
          </div>
        </div>




      </section>


    
      <Footer/>
    </>
  )
}
