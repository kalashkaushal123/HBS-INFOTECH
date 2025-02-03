import React, { useState, useRef, useEffect } from 'react'
import './FinancialServices.css'
import ai_display from './images/ai brain.svg'
import display from './images/display.webp'

import eye from './images/eye.svg'
import tick from './images/tick.svg'
import lock from './images/lock.svg'
import face_recognition from './images/human verification.svg'
import upscale from './images/upscale.svg'
import cloud from './images/cloud.svg'
import text from './images/book.svg'
import analysis from './images/bulb ai.svg'

import  image1 from './images/1.webp'
import image2 from './images/2.webp'
import image3 from './images/3.svg'
import image4 from './images/4.svg'
import image5 from './images/5.webp'
import image6 from './images/6.svg'

import checkbox from './images/checkbox.svg'

import card1 from './images/card1.webp'
import card2 from './images/card2.webp'
import card3 from './images/card3.webp'
import card4 from './images/card4.webp'
import card5 from './images/card5.webp'
import card6 from './images/card6.webp'


export default function FinancialServices() {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);


  const containerRef = useRef(null);

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

  const scrollRef = useRef(null)

    const scrollup = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
              top: -300,
            });
          }
    }

    const scrolldown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
              top: 300,
            });
          }
    }



    const containRef = useRef(null)

    const Left = () => {
      containRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }

    const Right = () => {
      containRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    };



    const scrollRef2 = useRef(null);

    const telecomscrollLeft = () => {
        scrollRef2.current.scrollBy({
            top:-400,
            // behavior: 'smooth',
        })

    }

    const telecomscrollRight = () => {
        scrollRef2.current.scrollBy({
            top:400,
            // behavior: 'smooth',
        })
    }

    useEffect(() => {
      const telecom_scroll = setInterval(() => {
        telecomscrollRight();
      }, 6000); 
  
      return () => clearInterval(telecom_scroll);
    }, []);



  return (
     <div>
       
          <div>
            <img className="photo" style={{height:'43.7em'}} src={display} />
            <div className="main-photo" style={{height:'43.7em'}}>
              <img className="firstphoto p-[1.4em]" src={ai_display} style={{margin:'11.2em 0em 0em 44.4em'}} />
              <h1 className="main-heading mt-[1.2em] text-[2.9em]">Financial Software Development & Consulting Services</h1>
              <p className="next-line text-[1.2em]" style={{margin:'0.6em 10em'}}>Enhance solutions, develop platforms and implement emerging technologies to deliver intuitive and secure products and services that accelerate your digital transformation.</p>
              <button className="contact" style={{margin:'2.5em 42.5em', width:'7.5em', height:'2.5em'}}> Contact us</button>
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
            
            </div>
    
    

        <h2 className='font-bold text-[2.5em] text-black' style={{margin:'0em 5em 2.5em 4em'}}>Our financial software development services</h2>


        <div className='flex text-black' style={{margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>
                Customized development and consultancy for financial services</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>
                For financial institutions, we provide tailored software solutions that ensure security, scalability and compliance. Data engineering capabilities mean our experts can enhance decision-making through predictive analytics and data-driven insights that enable fraud detection, customer segmentation, and credit scoring models.
                </p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Blockchain development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Ensure secure, transparent financial transactions with blockchain expertise that reduces risk and increases trust in your systems. Reduce overhead and transaction costs, while increasing speed, efficiency and automation.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5 style={{width:'400px'}}>Data Processing and Engineering</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Efficient data processing is the foundation of AI and ML integration. Our cloud-based infrastructures enable scalable data engineering pipelines for real-time data ingestion, transformation, and storage. Handle vast amounts of structured and unstructured data efficiently, while optimizing the flow of information between systems.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Mobile banking solutions</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Develop secure, user-friendly mobile apps featuring digital wallets, mobile payments and P2P transfers. Cloud computing enables these solutions to be accessible anywhere and at any time – so you can provide your customers with high availability and reliability.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Payment gateway integration</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>We ensure seamless integration with multiple payment processors for secure and fast transactions. Cybersecurity measures, embedded to protect transactions and customer data, are supported by advanced threat detection and identity management systems.</p>
              </div>
            </div>

          </div>


          <div className='ml-[80px]'>

          <div className=' flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Cloud services</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Ensure flexible, scalable infrastructures to efficiently manage workloads, reduce operational costs, and ensure high availability and resilience in data storage and processing. Partnerships with leading cloud providers mean our teams can support cloud migrations and optimizations.</p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>
                AI & ML integration</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Integrate AI and ML to offer predictive analytics and fraud detection, while personalizing customer experiences. Use intelligent systems to make faster, more informed decisions that reduce risks and improve customer satisfaction.</p>
              </div>
            </div>


            <div className='flex mt-[80px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Data Science and Machine Learning</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Leverage our data science expertise to build advanced machine learning models that provide deep insights and drive predictive analytics. Uncover hidden patterns in data, develop more accurate fraud detection systems, enhance credit scoring, and create personalized customer solutions. Get the scalability and flexibility required to train, deploy, and iterate on models at speed.</p>
              </div>
            </div>


            <div className='flex mt-[80px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Regulatory technology (RegTech)</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Stay up to date and compliant with dynamic financial regulations through compliance management and automated reporting solutions, along with risk assessment and mitigation strategies. Our engineers implement cloud computing to support these functions by providing a scalable platform for managing compliance data and reporting requirements.</p>
              </div>
            </div>

            
          </div>
        </div>





        <div>
          <h2 className=' font-bold text-[2.5em] text-black w-4/12' style={{margin:'3em 5em 2.5em 4em'}}>Benefits of financial software development with Software Mind</h2>


        </div>



        <div className="auto_slider mb-[10em]">
                  <button className='telecom_btn telecom_left p-[0.1em]' onClick={Left}>&#8249;</button>
                  <div className="auto_slides" ref={containRef}>
        
                    <div className="telecom_software_slide ml-[160px]">
                      
                      <h2>Migration to Public Cloud  </h2>
                      <p>Seamlessly migrate your telecom applications to AWS, GCP, Azure public clouds, or private OpenStack cloud infrastructures. </p>
                      
                    </div>


                    <div className="telecom_software_slide1 ml-[2em]">
                      
                      <h2>Telecom API   </h2>  
                      <p>Boost your services and increase the efficiency of your business software solutions by implementing TM Forum and GSMA CAMARA APIs.  </p>
                      
                    </div>


                    <div className="telecom_software_slide2 ml-[2em]">
                      
                      <h2>5G and Open RAN   </h2>
                      <p>Streamline your cloud and edge deployments by implementing efficient and secure CI/CD pipelines with DevSecOps principles and tools.  </p>
                      
                    </div>


                    <div className="telecom_software_slide ml-[2em] mr-[7em]">
                      
                      <h2>Unified Communications   </h2>
                      <p>Integrate Cisco BroadWorks, Webex Calling, or bespoke Cloud PBX solutions and ensure seamless migrations and operations of VoIP services.  </p>
                      
                    </div>

        
                  </div>
                  <button className='telecom_btn telecom_right p-[0.1em]' onClick={Right}>&#8250;</button>
              </div>
        

    
    
    
    
     
        <div className='whole-div mb-[18em]' style={{marginTop:'100px' ,width:'100%', height:'500px' ,backgroundColor:'#F8F8F8'}}>  
          <h2 className=' w-5/12'>Supporting organizations in the financial services industry with software solutions</h2>
          
          <div className='para'>
                    <div>
    
                      <div className='com'>
                        <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                        <div className='com-text'>
                          <h5 style={{fontWeight:'600'}}>Banks and financial institutions</h5>
                          <p>Strengthen operations and security with our custom banking solutions. Enhance decision-making and improve financial performance through predictive analytics and risk management.</p>
                        </div>
                      </div>
                      <br /><br />
    
                      <div className='com mt-1'>
                        <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                          <div className='com-text'>
                            <h5 style={{fontWeight:'600'}}>Fintech startups and scaleups</h5>
                            <p>Scale business efficiently with innovative experts who leverage cost-effective cloud computing infrastructure to support growth, compete effectively and accelerate time-to-market.</p>
                        </div>
                      </div>
                      <br /><br />
    
                      <div className='com mt-3'>
                        <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                          <div className='com-text'>
                            <h5 style={{fontWeight:'600'}}>Insurance companies</h5>
                            <p>Transform ways of working with digital solutions and process automation. Our AI and ML technologies help streamline claims processing and risk assessment, while improving customer satisfaction and operational efficiency.</p>
                        </div>  
                      </div>
                      <br /><br />
    
                      <div className='com'>
                        <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                          <div className='com-text'>
                            <h5 style={{fontWeight:'600'}}>Investment firms</h5>
                            <p>Optimize portfolio management, trading and analytics with our advanced tools. Gain predictive insights and make informed decisions that enhance returns, minimize risks and provide a competitive edge.</p>
                        </div>
                      </div>
                    </div>
    
            <div >
    
              <div className='com'>
                <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                <div className='com-text'>
                  <h5 ><strong>Payment processors</strong></h5>
                  <p>Streamline your transaction processes and ensure compliance with our integration solutions. Advanced cybersecurity measures protect sensitive data and build trust with clients and partners.</p>
                </div>
              </div>
              <br /><br />
              <div className='com'>
                <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                <div className='com-text'>
                  <h5 ><strong>Wealth management firms</strong></h5>
                  <p>Enhance wealth management services with tailored solutions that offer portfolio optimization and customer insights. Scalable cloud infrastructure supports growth, while robust cybersecurity protects client data and transactions.</p>
                </div>
              </div>
              <br /><br />
              <div className='com'>
                <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                <div className='com-text'>
                  <h5 ><strong>Regulatory technology (RegTech) companies</strong></h5>
                  <p>Manage compliance efficiently with our automation strategies. Reduce the burden of manual reporting and mitigate risks, while ensuring scalability and efficiency in meeting regulatory demands.</p>
                </div>
              </div>
              <br /><br />
              <div className='com'>
                <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                <div className='com-text'>
                  <h5 ><strong>Lending institutions</strong></h5>
                  <p>Improve loan origination, underwriting and servicing processes. Implement data-driven risk assessment and AI-powered credit scoring models that boost decision-making and customer satisfaction.</p>
                </div>
              </div>
              </div>
    
          </div>
    
      </div>



        <div style={{backgroundColor:'#E8E8E8', marginTop:'8em', padding:'7.5em 10em'}}>

          <h2 className='mb-[2.7em]'>Who we’ve helped</h2>

          <marquee behavior="smooth" direction="left" className='m-0'>
          <div className='flex h-[3em]'>
            <img src={image1} alt=""/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            </div>
          </marquee>

        </div>





      <div className='mr-[10.5em]'>
          <div className='flex mt-[10em]' style={{justifyContent:'space-between'}}>
            <h2 className=' font-bold text-[2.5em] text-black' style={{margin:'0em 5em 2.5em 4em'}}>Case studies</h2>

            <button className='h-[2.5em] border-r-[10em] bg-none text-orange-700' style={{ border:'1px solid orangered', padding:'5px 25px'}}>More case studies</button>
          </div>

        </div>




    <div>
    <div className='mx-[10em] h-[25em] overflow-hidden' ref={scrollRef2}> 

        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[68em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Migrating Orange's custom system to GCP and streamlining the deployment process</p>
                <p className=' mt-8 text-white'>Orange tasked Software Mind with transforming their technical support and migrating a customer value management system to Google Cloud Platform (GCP).</p>
                <button className=' mt-16 text-[1.3em] '>Learn more</button>
            </div>
        </div>


        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[70em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Replacing and unifying the Steering and SMS Welcome platforms for Deutsche Telekom</p>
                <p className=' mt-8 text-white'>Software Mind was assigned to replace and unify the existing Steering and SMS Welcome roaming platforms. The client needed a multi-tenant platform with a centralized management and reporting interface.</p>
                <button className=' mt-10 text-[1.3em] '>Learn more</button>
            </div>
        </div>


        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Building a custom top-rated B2C AI bot</p>
                <p className=' mt-8 text-white'>A leading mobile operator tasked Software Mind with developing a custom AI bot from scratch and building secure local architecture for it. The bot’s aim was to provide help to customers who encountered issues with their Internet connection. </p>
                <button className=' mt-16 text-[1.3em] '>Learn more</button>
            </div>
        </div>


        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Replacing a voicemail system and enhancing platform efficiency for Sunrise</p>
                <p className=' mt-8 text-white'>A leading mobile operator tasked Software Mind with developing a custom AI bot from scratch and building secure local architecture for it. The bot’s aim was to provide help to customers who encountered issues with their Internet connection. </p>
                <button className=' mt-10 text-[1.3em] '>Learn more</button>
            </div>
        </div>


        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[86em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Replacing a legacy convergent Nokia IN platform with a new, custom-developed solution</p>
                <p className=' mt-8 text-white'>Software Mind was tasked with replacing an existing voicemail system, which was experiencing issues and didn’t address various call scenarios. Our team implemented the platform within five months, as requested by the client, and designed it to support four different languages.</p>
                <button className=' mt-4 text-[1.3em] '>Learn more</button>
            </div>
        </div>


        <div className='flex h-[25em]'>
            <div>
                <img src={card1} alt="" className='h-[25em] w-[65em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
            </div>
            <div className='telecom_slider_box'>
                <p className='text-white'>Telecom</p>
                <p className='text-[2.5em] leading-none font-semibold mt-4 text-white'>Building a custom top-rated B2C self-care mobile app</p>
                <p className=' mt-8 text-white'>Our client required a new mobile self-care platform that would be designed from scratch with a focus on providing an exceptional user experience and high usability. Software Mind delivered a top-rated app. </p>
                <button className=' mt-16 text-[1.3em] '>Learn more</button>
            </div>
        </div>



        


    </div>
    <div className='mx-[35em] my-[1em]'>
    <button className=' text-[4em] text-orange-700' onClick={telecomscrollLeft}>&#8249;</button>

    <button className='text-[4em] text-orange-700 ml-[5em]' onClick={telecomscrollRight}>&#8250;</button>
    </div>
    </div>









      <div>
        <h2 className='font-bold text-[2.5em] text-black' style={{margin:'2em 5em 2.5em 4em'}}>Hear from our clients</h2>
          
        </div>





        <div className='flex h-[18em]' style={{margin:'5em 10em'}}>
        <div style={{maxHeight:'18em', overflowY:'hidden', width:'47em'}} ref={scrollRef}>
            <div className='p-[2em] w-[47em]' style={{border:'1px solid black', margin:'2em 0em', borderRadius:'1em'}}>
                <p>We have been growing in Finland in terms of personnel, and Software Mind has been growing with us and increasing the team here, and we’ve been quite happy with that. I would recommend Software Mind as a partner due to the value of ownership and openness.</p>

                <p className='mt-[5em] text-right'>Juha Havu, Head of Architecture, FMS Cluster at Procountor a+</p>
            </div>

            <div className='p-[2em] w-[47em]' style={{border:'1px solid black', margin:'2em 0em', borderRadius:'1em'}}>
                <p>We find the developers from Software Mind to be highly qualified, and the cooperation with them works very well. We recommend Software Mind for similar projects.</p>

                <p className='mt-[5em] text-right'> Gerdt Vedeler, CEO at Escali (now Stacc)</p>
            </div>

            <div className='p-[2em] w-[47em]' style={{border:'1px solid black', margin:'2em 0em', borderRadius:'1em'}}>
                <p>We are very glad that our partnership with Software Mind has been so efficient and are pleased to recommend Software Mind to any company requiring a modern, experienced and motivated partner for development of state-of-the-art IT solutions. Furthermore, it has been my experience that the entire team is eager to fulfil our expectations and even to go the extra mile to achieve our goal.</p>

                <p className='mt-[5em] text-right'> Tom Ilube, CEO/Founder of Garlik (now Experian)</p>
            </div>

        </div>

        <div>
            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrollup}>&#9650;</button> <br />

            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrolldown}>&#9660;</button>
        </div>
    </div>






      <div>

        <div className='auto_box m-[10em]'>
          <h2 className='auto_box_heading' style={{width:'10em'}}>
            Finance software development insights
          </h2>
          <p className='ml-[4.5em]'>
          Access expert advice and best practices on developing user-friendly, innovative and secure financial software.
          </p>
        </div>



      </div>





        <div className="auto_slider mb-[10em]">
                  <button className='btn left p-[0.1em]' onClick={scrollLeft}>&#8249;</button>
                  <div className="auto_slides" ref={containerRef}>
        
                    <div className="auto_slide ml-[160px]">
                      <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text">
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2024/04/04
                          </div>
                        </div>
                        <p>Google Chrome Tools and Extensions to Make Software Testing More Efficient</p>
                        <button>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>
        
                    <div className="auto_slide">
                    <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text bg-black">
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2023/09/28
                          </div>
                        </div>
                        <p>Tips & Best Practices for Choosing the Right Automation Testing Framework for Your Software Project</p>
                        <button>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>
        
                    <div className="auto_slide">
                    <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text text-black" style={{backgroundColor:'rgb(210, 210, 210)'}}>
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2023/08/03
                          </div>
                        </div>
                        <p className='text-black'>Why Automation Testing is Essential for Quality Assurance</p>
                        <button style={{color:'black', border:'1px solid black'}}>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>
        
                    <div className="auto_slide">
                    <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text">
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2023/03/23
                          </div>
                        </div>
                        <p>Microservices & Non-functional Testing – How Can You Ensure High Performance of Your Microservice-based App?</p>
                        <button>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>
        
                    <div className="auto_slide">
                      <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text bg-black">
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2023/02/16
                          </div>
                        </div>
                        <p>Quality Assurance – Software Development’s Guarantee of Business Value</p>
                        <button>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>


                    <div className="auto_slide mr-[160px]">
                      <div className="tele_slide_img">
                        <img src={card1} alt="" />
                      </div>
                      <div className="auto_slide_text text-black" style={{backgroundColor:'rgb(210, 210, 210)'}}>
                        <div className="auto_image">
                          <img src={card1} alt="" />
                          <div className="auto_txt">
                            KAROLINA BLOK <br/>
                            2023/02/16
                          </div>
                        </div>
                        <p className='text-black'>Quality Assurance – Software Development’s Guarantee of Business Value</p>
                        <button style={{color:'black', border:'1px solid black'}}>Read more <span className='icon'>&#8250;</span> </button>
                      </div>
                    </div>
        
                  </div>
                  <button className='btn right p-[0.1em]' onClick={scrollRight}>&#8250;</button>
              </div>






      <div className='main-photo flex' style={{justifyContent:'space-between', padding:'5em 6em', height:'28em'}}>
          <div>
            <p className='text-white text-[3em] w-[12em] font-bold'>Build financial products that create revenue</p>
            <button className='text-white bg-orange-700 border-none mt-[5em]' style={{padding:'0.6em 2em', borderRadius:'2em'}}>Contact us</button>
          </div>
          <div style={{margin:'0em 5em 0em 0em'}}>
            <p className='text-[2.3em] text-white mt-[1em]'>1600+ experts</p>
            <p className='text-[2.3em] text-white mt-[1em]'>25+ years of innovation</p>
            <p className='text-[2.3em] text-white mt-[1em]'>350+ clients who trust us</p>
          </div>

        </div>




      <div className='tele_software'>
          <div>
            <h2 className='tele_software_heading'>Frequently asked questions (FAQ)</h2>
          </div>

          <div className='tele_software_box'>
            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible1(!isVisible1)}>
              <button>
                <p className='text-[1em] font-bold'>What is financial software?</p>
              </button>
              <div style={{ display: isVisible1 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Financial software is designed to automate and streamline financial tasks in different areas, for individual customers and businesses. Examples of financial software include personal finance software, banking solutions, embedded finance platforms, payment technology, accounting software, and investment management applications. Nowadays, creating financial software goes beyond regular development; it also focuses on cloud-solution integration, AI and data science implementation, and taking advantage of Open API.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible2(!isVisible2)}>
                <button>
                    <p className='text-[1em] font-bold'>What features does financial software need?</p>
                </button>
                <div style={{ display: isVisible2 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                While the specific functionalities of your digital products will differ, depending on factors like your sector, offer and target users, there are some shared requirements that most financial software should meet. Financial software solutions should implement a range of security measures to keep customers’ data safe, e.g., by incorporating strong authentication mechanisms. These days, customers also expect intuitive and user-friendly interfaces so they can easily manage their finances. This ease of use often leads to various app integrations with other services so that customers can quickly access relevant information, while companies can improve their processes and save time. Finally, it’s a good idea to include analytical capabilities in your financial software that empower users with detailed reporting.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible3(!isVisible3)}>
                <button>
                    <p className='text-[1em] font-bold'>What are the stages of finance software development?</p>
                </button>
                <div style={{ display: isVisible3 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Custom development of financial software usually starts with discovery workshops to gather, validate and prioritize requirements for a new product. The feature backlog generated in these workshops guides a development team to create and test prototypes. Next, the team develops a Minimum Viable Product (MVP) that ensures high quality, stability and performance. After development, the MVP is deployed. The team measures its performance and gathers more feedback from users to refine the solution, enhance it with new features and maintain it.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible4(!isVisible4)}>
                <button>
                    <p className='text-[1em] font-bold'>Which technologies can enhance financial software solutions?</p>
                </button>
                <div style={{ display: isVisible4 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Open banking enables companies to share financial data with regulated third-party providers through open APIs. For customers, this means wider access to transactions and services, as well as better control over their finances, while companies can use it to lower transaction costs and increase conversion rates. Many financial services providers have decided to leverage cloud computing to reduce operational costs and boost accessibility. Artificial intelligence (AI) and machine learning (ML) are also more and more widely used to improve customer experience and turn large datasets into actionable insights, for both companies and users.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible5(!isVisible5)}>
                <button>
                    <p className='text-[1em] font-bold'>How to choose the right financial software development company?</p>
                </button>
                <div style={{ display: isVisible5 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                It’s important to partner with a software development company that matches your organizational culture and has financial software development experience. Shared values ensure fast onboarding, smooth cooperation and meaningful engagement. It’s always a good idea to refer to a potential software partner’s case studies and referrals to verify whether the company lives up to its promises. The right software development partner will focus on adding value, rather than simply writing code, so open communication, alignment with your business goals and transparency should also be prioritized.
                </p>
              </div>
            </div>


            <div style={{padding:'2em'}} onClick={() => setIsVisible6(!isVisible6)}>
                <button>
                    <p className='text-[1em] font-bold'>What are the benefits of outsourcing financial software development?</p>
                </button>
                <div style={{ display: isVisible6 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Outsourcing your software development helps you optimize your costs and boost productivity as your teams can focus on your core business, while an external, dedicated development team delivers high-quality financial products. Software outsourcing also gives you access to specialized talent and enables you to scale your IT capacity up and down, as needed. Cooperation with an experienced software development company means you get practical advice on improving software development processes, while avoiding the pitfalls that can occur when implementing new technologies, tools and methods.
                </p>
              </div>
            </div>


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
       
       


          <h2 className='mt-[100px] mb-[60px]'>Engineering and consultancy that deliver value</h2>
       
       
       
          <div className='flex'>
            <div className='telecom'> 
              <img src={card1} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
                Generative AI development services
              </div>
                 
              <div className='tele-text' >
                Use generative AI models to stay  ahead of your competition.
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card2} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
                Cloud consulting & services
              </div>
                 
              <div className='tele-text' >
                Accelerate your cloud migration strategy and develop cloud-native apps.
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card3} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
              Digital transformation services
              </div>
                 
              <div className='tele-text' >
              Integrate emerging technologies that boost performance, security and user experience.
              </div>
            </div>
          </div>
       
               
       
       
          <h2 className='mt-[100px] mb-[60px]'>Engineering expertise that supports industries</h2>
       
       
       
          <div style={{display:'flex'}}>
            <div className='telecom '> 
              <img src={card6} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
                Telecom 
              </div>
                 
              <div className='tele-text'>
                Work with experienced engineering teams to create evolutive solutions for your customers. 
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card5} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
                Sports betting 
              </div>
                 
              <div className='tele-text' >
                Develop online betting software that prioritizes rewarding customer experience. 
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card4} alt="" className='h-[20em]' />
              <div className='telecom_text' style={{fontSize:'1.1em'}}>
                Biotech & Healthcare
              </div>
                 
              <div className='tele-text'>
                Empower your organization with AI and digital tools to maximize the output of your R&D.   
              </div>
            </div>
          </div>
       
       
       
       
        </section>
    
    
    
    
    
      
         
          
      </div>
  )
}
