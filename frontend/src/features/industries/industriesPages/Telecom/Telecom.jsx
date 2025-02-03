
import '../Telecom/Telecom.css'
import ai_display from './images/ai_display.svg'
import display from './images/display.webp'

import bg_image from './images/bg_image.jpeg'

import part1 from './images/part1.webp'
import part2 from './images/part2.webp'

import icon1 from './images/icon1.svg'
import icon2 from './images/icon2.svg'
import icon3 from './images/icon3.svg'
import icon4 from './images/icon4.svg'
import icon5 from './images/icon5.svg'
import icon6 from './images/icon6.svg'
import icon7 from './images/icon7.svg'
import icon8 from './images/icon8.svg'
import icon9 from './images/icon9.svg'
import icon10 from './images/icon10.svg'
import icon11 from './images/icon11.svg'
import icon12 from './images/icon12.svg'

import logo1 from './images/logo1.webp'
import logo2 from './images/logo2.webp'
import logo3 from './images/logo3.svg'
import logo4 from './images/logo4.webp'
import logo5 from './images/logo5.svg'
import logo6 from './images/logo6.webp'
import logo7 from './images/logo7.svg'
import logo8 from './images/logo8.webp'
import logo9 from './images/logo9.svg'
import logo10 from './images/logo10.webp'

import card1 from './images/card1.webp'
import card2 from './images/card2.webp'
import card3 from './images/card3.webp'
import card4 from './images/card4.webp'
import card5 from './images/card5.webp'
import card6 from './images/card6.webp'

import slide from './images/slide_image.webp'
import slide1 from './images/slide_image1.webp'
import slide2 from './images/slide_image2.webp'
import slide3 from './images/slide_image3.webp'
import slide4 from './images/slide_image4.webp'
import slide5 from './images/slide_image5.webp'
import slide6 from './images/slide_image6.webp'

import slider1 from './images/slider1.webp'
import slider2 from './images/slider2.webp'
import slider3 from './images/slider3.webp'
import slider4 from './images/slider4.webp'
import slider5 from './images/slider5.webp'
import slider6 from './images/slider6.webp'

import option1 from './images/option1.svg'
import option2 from './images/option2.svg'
import option3 from './images/option3.svg'
import option4 from './images/option4.svg'
import option5 from './images/option5.svg'
import option6 from './images/option6.svg'

import { useRef, useState, useEffect } from 'react'


export default function Telecom() {

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
          <img className="photo" style={{height:'43.7em'}} src={display}/>
          <div className="main-photo" style={{height:'43.7em'}} >
            <img className="firstphoto p-[1.4em]" src={ai_display} style={{margin:'11.2em 0em 0em 44.4em'}} />
            <h1 className="main-heading mt-[1.2em] text-[2.9em]">Telecom Software Development Services</h1>
            <p className="next-line text-[1.2em]" style={{margin:'0.6em 10em'}}>Accelerate the digital transformation of your telecom applications with cloud-native architectures, DevOps tools, and advanced Gen AI technologies that streamline operations..</p>
            <button className="contact" style={{margin:'2.5em 42.5em', width:'7.5em', height:'2.5em'}}> Contact us</button>
          </div>
        </div>
       
        <div className='auto'>
          <div className='auto-text'>
            <h2 className='text-black'>
              Boost your telecom infrastructures with our experts
            </h2>
            <p>
              Service providers choose us as their long-term partner for platform integrations and bespoke software solutions that use cloud-native, open-source components. With telecommunications expertise spanning BSS/OSS, core network applications for 3G, LTE, and 5G, our software development and engineering services accelerate digital transformation journeys toward private and public clouds. 
            </p>
          </div>
                     
               
                    
        </div>



        <h2 className='font-bold text-[2.5em] text-black' style={{margin:'0em 5em 2.5em 4em'}}>Our telecom software services</h2>


        <div className='flex text-black' style={{margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon1} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Telecommunications software development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Optimize network performance, improve customer experience and streamline operations by using our tools and know-how to drive your development. Our teams have delivered software projects connected to self-care portals, CRM, payment systems, provisioning, inventory, monitoring and observability, IN and IMS, IoT, VoIP and roaming.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon2} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>DevOps approach and CI/CD methodologies</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Increase your operational agility and reduce maintenance costs through continuous integration (CI) and continuous deployment (CD) methodologies. A DevOps mindset in telecom enables faster releases of new features, automated and iterative software development, as well as the ability to detect and fix errors earlier.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon3} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5 style={{width:'400px'}}>Business and Operations Support Systems development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Enhance telecom operations with customized BSS and OSS solutions that efficiently manage customers, billing, and payments while optimizing network performance and monitoring capabilities. Drive your digital transformation with a partner who knows how to streamline processes, reduce downtimes, and achieve results.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon4} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Machine Learning for the telco industry</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Leverage ML models to optimize workflows, monitor traffic patterns, evaluate performance, detect events, or analyze photographic documentation of network cabling. Boost operational efficiency with predictive AIOps that proactively manage and optimize network operations.</p>
              </div>
            </div>

          </div>


          <div className='ml-[80px]'>

          <div className=' flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon5} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Digital transformation of telecommunication services</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Manage a legacy platform transformation - from monolith to microservices. Build a cutting-edge custom telecom solution for existing technologies to automate network lifecycle management, improve scalability, boost performance and deliver a more cost-effective solution. </p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon6} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Security services for telcos</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Enhance your 5G cloud-native architectures with robust security measures. Conduct security pen tests and audits, implement a Secure Software Development Lifecycle (SSDLC), and adopt DevSecOps practices to address and prevent vulnerabilities.</p>
              </div>
            </div>


            <div className='flex mt-[80px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon7} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Cloud Native Network functions development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Utilize Cloud Native architectures to migrate from legacy SS7-based TDM and IN systems to software-based SIP, IMS and 5G network applications. Whether tailored telecom enterprise software development or complete platforms, we design, develop, deploy, migrate and support your network applications. </p>
              </div>
            </div>


            <div className='flex mt-[80px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon8} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Generative AI implementation in telco solutions</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Support the automation of sales services and complaint handling processes with ChatGPT or Auto-GPT. Implement generative AI solutions that can assist you with predictive decision-making based on data breakdowns that will elevate your company’s competitiveness.</p>
              </div>
            </div>

            
          </div>
        </div>



        <div className=' relative mt-[140px]'>

          <img src={bg_image} alt="" className='w-[1620px] max-h-[25em]'/>

          <div className=' absolute top-[60px] left-[280px]'>
            <h2>Explore proven DevOps strategies for telecom operators</h2>

            <p className='text-[18px] text-center' style={{margin:'50px 350px 0px 130px'}}>Read this ebook on implementing DevOps in telecom to learn insights from Red Hat and Software Mind experts on enhancing cloud environments, mitigating challenges to adoption and more.</p>

            <button  className="contact w-[7.5em] h-[2.5em]" style={{margin:'2.5em 26em'}}>Download</button>
          </div>

        </div>





        <div>
          <h2 className=' font-bold text-[2.5em] text-black' style={{margin:'3em 5em 2.5em 4em'}}>Telecommunication software integrations</h2>


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
        








        <div>
          <h2 className='font-bold text-[2.5em] text-black' style={{margin:'0em 5em 2.5em 4em'}}>Amplitiv – Software Mind’s telecom products brand</h2>


          <div className='flex' style={{margin:'4em 16em'}}>

            <div className='w-[500px]'>
              <h3>Empowering operators with proven solutions</h3>
              <p className='mt-[20px]'>Along with our dedicated telco software services, for over 20 years our experts have been delivering ready-made, highly customizable solutions for global telecommunications players looking to generate revenue and deliver rewarding customer experiences. Our specialists design, develop and deploy innovative Roaming, Value-added Services and Cloud Calling solutions.</p>
            </div>

            <div className='ml-[100px] relative'>
              <img src={part1} alt="" className='mt-[-40px] h-[24em] w-[24em]' style={{borderRadius:'50%'}} />
              <div className='circle h-[380px] w-[380px]'></div>
            </div>

          </div>

          <div style={{margin:'4em 16em'}} className='flex'>

            <div className=' relative'>
              <img src={part2} alt="" className='mt-[-40px] h-[24em] w-[120em]' style={{borderRadius:'50%'}} />
              <div className='circle h-[380px] w-[380px]'></div>
            </div>

            <div className='ml-[120px] mt-[40px]'>
              <h3>Secure products that drive mobile networks’ growth</h3>
              <p className='mt-[20px]'>Trusted by Tier 1 telecom operators from around the world, our products include a comprehensive Roaming suite with Steering of Roaming, Border Steering, VoLTE Steering, Welcome SMS, proven Value-Added Services platforms such as Voicemail and Call Completion, as well as a UC Self-Care Portal and Recording Server for Cisco BroadWorks.</p>
            </div>

          </div>

          <button className='ml-[43em] mt-[4.6em] text-orange-700 bg-none border-r-[10em]' style={{ border:'1px solid orangered', padding:'5px 25px'}}>Learn More</button>

        </div>
       



        <div style={{backgroundColor:'#E8E8E8', marginTop:'8em', padding:'7.5em 10em'}}>

          <h2 className='mb-[2.7em]'>Who we’ve helped</h2>

          <marquee behavior="smooth" direction="left" className='m-0'>
          <div className='flex h-[3em]'>
            <img src={logo1} alt=""/>
            <img src={logo2} alt="" className='ml-[8em]'/>
            <img src={logo3} alt="" className='ml-[8em]'/>
            <img src={logo4} alt="" className='ml-[8em]'/>
            <img src={logo5} alt="" className='ml-[8em]'/>
            <img src={logo6} alt="" className='ml-[8em]'/>
            <img src={logo7} alt="" className='ml-[8em]'/>
            <img src={logo8} alt="" className='ml-[8em]'/>
            <img src={logo9} alt="" className='ml-[8em]'/>
            <img src={logo10} alt="" className='ml-[8em]'/>
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
                <img src={slider1} alt="" className='h-[25em] w-[68em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={slider2} alt="" className='h-[25em] w-[70em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={slider3} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={slider4} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={slider5} alt="" className='h-[25em] w-[86em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={slider6} alt="" className='h-[25em] w-[65em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <p>Thanks to the developed platform, we have increased the quality and reliability of the services we provide. We recommend the Software Mind team for their professionalism and high level of competence in their fields.</p>

                <p className='mt-[5em] text-right'>Jaroslaw Jarzebowski, CTO at Globitell Wholesale</p>
            </div>

            <div className='p-[2em] w-[47em]' style={{border:'1px solid black', margin:'2em 0em', borderRadius:'1em'}}>
                <p>BroadWorks UC platform, implemented by Software Mind team, offers a wide range of business benefits. Using this modern solution deployed on a cloud computing infrastructure, Orange Slovensko provides customers with an improved and stable experience.</p>

                <p className='mt-[5em] text-right'>Eric Maintenay, CTIO at Orange Slovakia</p>
            </div>

        </div>

        <div>
            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrollup}>&#9650;</button> <br />

            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrolldown}>&#9660;</button>
        </div>
    </div>












        <div>
        <h2 className='font-bold text-[2.5em] text-black w-[25em]' style={{margin:'0em 5em 2.5em 4em'}}>What to expect from developing telecom software with Software Mind</h2>


        <div className='flex text-black' style={{margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon9} alt=""/>
              </div>
              <div className='ml-[25px]'>
                <h5>Expertise</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Close cooperation with leading telecom companies and communication service providers.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon10} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Operations support</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Take advantage of 24/7 L2 and L3 on-call service level commitment support.</p>
              </div>
            </div>

          </div>


          <div className='ml-[80px]'>

          <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon11} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Security</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Unrivaled experience operating under the tightest regulations and security requirements.  </p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={icon12} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Agile design and development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Leverage innovative, agile development methods, business processes, operational strategies, DevOps and automated deployments to get better results.</p>
              </div>
            </div>
            
          </div>
        </div>

        </div>




        <div style={{backgroundColor:'#F0F0F0', padding:'8em 0em'}}>
          <h2 className='font-bold text-[2.5em] text-black w-[25em]' style={{margin:'0em 5em 2.5em 4em'}}>Our telecom software development process</h2>

          <div style={{display:'flex', margin:'0em 22.6em'}}>
            <div>
              <div className='flex'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>1</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Get in touch</h4>
                  <p className='w-[23em] text-[0.9em]'>Use the contact form on our website and our experts will reach out to talk with you.</p>
                </div>
              </div>


              <div className='flex mt-[2em]'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>2</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Tell us about your goals</h4>
                  <p className='w-[23em] text-[0.9em]'>A discovery call helps us understand your business context and expectations.</p>
                </div>
              </div>


              <div className='flex mt-[2em]'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>3</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Discuss the technical details</h4>
                  <p className='w-[23em] text-[0.9em]'>With an NDA in place, we can clarify the business needs and technical requirements.</p>
                </div>
              </div>



              <div className='flex mt-[2em]'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>4</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Conduct deep dive sessions</h4>
                  <p className='w-[23em] text-[0.9em]'>We will carry out technical deep dive sessions and audit current platforms, integrations and processes if needed.</p>
                </div>
              </div>

            </div>

            <div>
              <div className='flex'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>5</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Accept the cooperation proposal</h4>
                  <p className='w-[23em] text-[0.9em]'>The proposal outlines the scope, team setup, timeline and budget we both agree on.</p>
                </div>
              </div>


              <div className='flex mt-[2em]'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>6</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Let’s kick off the project</h4>
                  <p className='w-[23em] text-[0.9em]'>With all the formalities done, we can establish ways of working and start the project.</p>
                </div>
              </div>


              <div className='flex mt-[2em]'>
                <div className=' bg-white text-[1.7em] h-[2.2em] w-[2.2em] font-bold text-orange-700' style={{padding:'0.4em 0.7em', borderRadius:'50%'}}>7</div>
                <div className='ml-[1em]'>
                  <h4 className='mt-[0.7em] text-[1.2em] font-semibold'>Establish further cooperation</h4>
                  <p className='w-[23em] text-[0.9em]'>After go-live, we ensure your services run smoothly by providing 24/7 SLA tailored to your needs.</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>




        <div>

        <div className='auto_box m-[10em]'>
          <h2 className='auto_box_heading'>
            Technologies
          </h2>
          <p>
            We deliver cross-functional teams that work with every crucial cloud technology and tool on the market. Here are just a few of the cloud-related tech stacks we operate with.
          </p>
        </div>

        

        </div>






        <div className='m-[10em]'>
          <div className='flex'>
            <div className='w-[24.2em] p-[1.5em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible5(!isVisible5)}>
                <button className='telecom_box_heading text-[1.3em]'>Platforms</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible5 ? "block" : "none"}}>
                  <li style={{margin:'0em'}}>UC: Cisco BroadWorks, Webex</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>5G: Casa Systems</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>MRF: Dialogic Powermedia XMS</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>SBC: Oracle Session Director</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Opensource: OpenSIPS, Kamailio, FreeSwitch</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>NT Inventory: Netcracker</li>
                </ul>
              </div>
            </div>

            <div className='w-[24.2em] p-[1.5em] ml-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible6(!isVisible6)}>
                <button className='telecom_box_heading text-[1.3em]'>Infrastructure and cloud</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible6 ? "block" : "none"}}>
                  <li style={{margin:'0em'}}>Docker, Kubernetes</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Ansible and Ansible Tower, Chef, Terraform</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>GCP, AWS, Azure</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>KVM, VMWare, Proxmox, Openstack</li>
                </ul>
              </div>
            </div>

            <div className='w-[24.2em] p-[1.5em] ml-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible7(!isVisible7)}>
                <button className='telecom_box_heading text-[1.3em]'>Software technology stack</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible7 ? "block" : "none"}}>
                  <li style={{margin:'0em'}}>Linux-based systems</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>SQL: MySQL, PostgreSQL, Oracle</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>NoSQL: MongoDB, Apache Cassandra, Redis, Hazelcast, KeyDB</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>LDAP: OpenDJ, OpenLDAP</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Java: Spring Boot, Spring Reactive, Quarkus</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Java EE/JAIN SLEE: Telscale, Metaswitch Rhino TAS, Jboss/Wildfly</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Front-end: Angular, React, NodeJS</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>CI/CD: Gitlab, Jenkins, Teamcity, Gherkin, Cucumber, Azure DevOps</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>QA: Selenium, Playwright, CafeSip, Sipp, MTS, Protractor, Karate</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
          <div className='w-[24.2em] p-[1.5em] mt-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible8(!isVisible8)}>
                <button style={{fontSize:'1.3em'}} className='telecom_box_heading'>Monitoring and observability</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible8 ? "block" : "none"}}>
                  <li style={{margin:'0em'}}>Elasticsearch and Elastic APM</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>OpenSearch</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Grafana Stack (Grafana, Loki, Prometheus, Tempo)</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>InfluxDB, Telegraf</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>OpenTelemetry, Jaeger</li>
                  <li style={{margin:'1em 0em 0em 0em'}}>Homer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>





        <div>

        <div className='auto_box m-[10em]'>
          <h2 className='auto_box_heading w-[10em]'>
            Read articles about telecommunication software development
          </h2>
          <p className='ml-[4.5em]'>
            Learn from our experts’ insightful content regarding telecom software development.
          </p>
        </div>

        

        </div>







        <div className="auto_slider mb-[10em]">
                  <button className='btn left p-[0.1em]' onClick={scrollLeft}>&#8249;</button>
                  <div className="auto_slides" ref={containerRef}>
        
                    <div className="auto_slide ml-[160px]">
                      <div className="tele_slide_img">
                        <img src={slide1} alt="" />
                      </div>
                      <div className="auto_slide_text">
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
                        <img src={slide2} alt="" />
                      </div>
                      <div className="auto_slide_text bg-black">
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
                        <img src={slide3} alt="" />
                      </div>
                      <div className="auto_slide_text text-black" style={{backgroundColor:'rgb(210, 210, 210)'}}>
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
                        <img src={slide4} alt="" />
                      </div>
                      <div className="auto_slide_text">
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
                        <img src={slide5} alt="" />
                      </div>
                      <div className="auto_slide_text bg-black">
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
                        <img src={slide6} alt="" />
                      </div>
                      <div className="auto_slide_text text-black" style={{backgroundColor:'rgb(210, 210, 210)'}}>
                        <div className="auto_image">
                          <img src={slide} alt="" />
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
            <p className='text-white text-[3em] w-[12em] font-bold'>Upgrade telecom services with innovative solutions</p>
            <button className='text-white bg-orange-700 border-none mt-[5em]' style={{padding:'0.6em 2em', borderRadius:'2em'}}>Contact us</button>
          </div>
          <div style={{margin:'0em 5em 0em 0em'}}>
            <p className='text-[2.3em] text-white mt-[1em]'>1500+ experts</p>
            <p className='text-[2.3em] text-white mt-[1em]'>25+ years of innovation</p>
            <p className='text-[2.3em] text-white mt-[1em]'>250+ clients who trust us</p>
          </div>

        </div>






        <div className='tele_software'>
          <div>
            <h2 className='tele_software_heading'>Telecom software development - FAQ</h2>
          </div>

          <div className='tele_software_box'>
            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible1(!isVisible1)}>
              <button>
                <p className='text-[1em] font-bold'>What is telecom software?</p>
              </button>
              <div style={{ display: isVisible1 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                  Telecom software is critical to managing and optimizing operations, services and processes in the telecommunications industry. It includes tools for network management, billing and customer management, along with call center operations. Effective network management ensures smooth operations and rapid problem resolution. The growing demand for data services and emerging technologies such as 5G make telecom software essential for businesses to remain competitive. Companies can use telecom software to improve operations, optimize services and deliver high-quality customer experiences. 
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible2(!isVisible2)}>
                <button>
                    <p className='text-[1em] font-bold'>Can I get custom IT solutions for the telecom industry?</p>
                </button>
                <div style={{ display: isVisible2 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                You can get custom IT solutions for the telecom industry. Many software development companies specialize in providing custom IT solutions to meet the unique needs of companies in the telecom industry. By partnering with a software house, you can work with experienced developers who can design and develop a solution that meets your specific needs, enabling you to streamline your operations and improve customer experience. Tailored-made IT solutions can also help you integrate new technologies, such as 5G, into your existing infrastructure.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible3(!isVisible3)}>
                <button>
                    <p className='text-[1em] font-bold'>What does a digital transformation in telecom look like?</p>
                </button>
                <div style={{ display: isVisible3 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Digital transformations in telecom involve the integration of advanced digital technologies into telecommunications operations and services to improve efficiency and customer experience. With a digital transformation, telcos can offer customers a more personalized experience, including customized services. They can also use data analytics to improve network management and detect and respond to issues in real time. In addition, a digital transformation can help telcos reduce costs and improve operational efficiencies, such as automated billing and customer service processes.
                </p>
              </div>
            </div>


            <div style={{padding:'2em'}} onClick={() => setIsVisible4(!isVisible4)}>
                <button>
                    <p className='text-[1em] font-bold'>What are the latest trends in the telecom industry?</p>
                </button>
                <div style={{ display: isVisible4 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                One of the most notable trends is the adoption of 5G technology, which will provide users with faster and more reliable connectivity. In addition, telecom companies are leveraging the popularity of IoT devices to provide connectivity solutions. AI and machine learning will be crucial in optimizing network management, improving customer service and enabling predictive maintenance. Cloud computing can improve scalability, flexibility and cost-effectiveness, while virtualization technology reduces hardware requirements. Finally, enhanced cybersecurity solutions protect networks and data.
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
                Financial services
              </div>
                 
              <div className='tele-text'>
                Engineer customized solutions that increase personalization and user conversion across channels. 
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
