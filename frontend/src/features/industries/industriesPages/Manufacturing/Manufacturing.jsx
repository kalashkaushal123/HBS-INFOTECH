import "./Manufacturing.css"
import '../FinancialServices/FinancialServices.css'
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
import { useState, useRef, useEffect } from "react"
export default function Manufacturing() {


  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);


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
              top: -240,
              // behavior: "smooth",
            });
          }
    }

    const scrolldown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
              top: 240,
              // behavior: "smooth",
            });
          }
    }

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
                 <h1 className="main-heading mt-[1.2em] text-[2.9em]">Manufacturing software development & consulting services</h1>
                 <p className="next-line text-[1.2em]" style={{margin:'0.6em 10em'}}>Enhance solutions, develop platforms and implement emerging technologies to deliver intuitive and secure products and services that accelerate your digital transformation.</p>
                 <button className="contact" style={{margin:'2.5em 42.5em', width:'7.5em', height:'2.5em'}}> Contact us</button>
               </div>
               </div>
       
               <div className='auto'>
                     <div className='auto-text'>
                       <h2 className=" text-black">
                         Automation testing services increase accuracy & speed up delivery
                       </h2>
                       <p>
                         For companies serious about software quality and committed to swiftly delivering services to their customers, automatic tests are essential. We provide comprehensive support in the construction of integrated test platforms, including production environments, test teams and the tests themselves.
                       </p>
                     </div>
               
                    
               </div>
               
       



      <div>
        <h2 className='font-bold text-[2.5em] text-black w-[25em]' style={{margin:'0em 5em 2.5em 4em'}}>Manufacturing software development solutions that drive Industry 4.0</h2>


        <div className='flex text-black' style={{margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt=""/>
              </div>
              <div className='ml-[25px]'>
                <h5>AI-driven development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Develop smart applications that incorporate IoT, AI and robotics to operationalize data and drive advanced automation strategies. Streamline maintenance processes and enhance their effectiveness by anticipating maintenance needs, automating responses and improving asset performance. Optimize maintenance schedules, reduce manual intervention and ensure that equipment operates at peak efficiency with minimal downtime.</p>
              </div>
            </div>


            <div className='flex mt-[80px] '>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Cloud-driven data management</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Create a robust framework for collecting, storing, processing and analyzing data to unlock actionable insights that lead to more informed maintenance decisions for enhanced equipment reliability and operational efficiency. Integrate data management services and cloud computing to achieve a dynamic and responsive maintenance strategy that minimizes downtime, reduces maintenance costs and improves overall operational effectiveness.</p>
              </div>
            </div>


            <div className='flex mt-[100px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Preventive and predictive maintenance</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Implement Internet of Things (IoT) and cloud-based solutions and transition towards smart factories by leveraging real-time data collection and analytics to identify potential issues and address them proactively. Reduce unplanned downtime and increase operational efficiency through the deployment of sensors and devices that continuously monitor equipment condition, performance and environmental factors and send this critical data to the cloud for analysis.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Customized embedded systems</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Design and deploy embedded systems that support your business goals and drive digital transformations. Beyond designing firmware, our embedded software experts develop testing tools and environments, deliver functional applications and incorporate third-party modules to create secure solutions based on stable architectures. Tap into expertise in emerging technologies and best industry practices to maximize the efficiency and performance of your systems.</p>
              </div>
            </div>

          </div>


          <div className='ml-[80px]'>

          <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Proprietary embedded software hardware development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Overcome scalability problems and develop customized solutions tailored to your needs with experts who efficiently create hardware platforms from scratch to meet wide-ranging configuration goals. Upgrade and accelerate your hardware with systems that help you adapt to dynamic market demands. Test and validate your solutions to ensure your solutions are compliant with industry standards and regulations.</p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Firmware development</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Benefit from bare-metal programming to optimize solutions and resources, program directly at the hardware level and eliminate the need for operating systems. Develop, with our experts, firmware for microcontroller units (MCUs), engineer drivers, platforms, applications and operating systems, while implementing wired and wireless communication standards, upgrading testing processes and increasing firmware capabilities. Get comprehensive development support, from architecture design to troubleshooting and maintenance.</p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Real-time operating systems (RTOS) deployment</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Optimize resource management, improve device responsiveness and enhance system performance through tailored RTOS. Customize existing RTOS kernels or create new applications to deal with real-time constraints and deliver desired functionalities. Select the appropriate RTOS for your specific application and hardware architecture, port existing software to a different RTOS or migrate from a bare-metal system to a real-time platform.</p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>5G connectivity</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Boost network reliability and security, improve system flexibility and speed up device communication by leveraging 5G connectivity. Reduce latency, energy consumption and costs, while increasing your IoT capabilities to connect and operate more devices of different types. Facilitate automation processes, enhance remote control of various equipment, monitor quality and strengthen operational resiliency with 5G networks.</p>
              </div>
            </div>
            
          </div>
        </div>

        </div>


       
       
       
       
        
           <div className='whole-div mb-[17em]' style={{marginTop:'100px' ,width:'100%', height:'500px' ,backgroundColor:'#F8F8F8'}}>  
             <h2 className=" text-black">Companies choose us as their AI & ML development partner</h2>
             
             <div className='para'>
                       <div>
       
                         <div className='com'>
                           <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                           <div className='com-text'>
                             <h5 style={{fontWeight:'600'}}>A proven track record</h5>
                             <p>With several successful projects completed, Software Mind is an ideally suited AI & ML development company with validated expertise across various industries and markets.</p>
                           </div>
                         </div>
                         <br /><br />
       
                         <div className='com'>
                           <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                             <div className='com-text'>
                               <h5 style={{fontWeight:'600'}}>Cost-effective engineering</h5>
                               <p>Develop an AI & ML project and maximize your return on investment (ROI) without compromising on quality and delivery timeline.</p>
                           </div>
                         </div>
                         <br /><br />
       
                         <div className='com'>
                           <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                             <div className='com-text'>
                               <h5 style={{fontWeight:'600'}}>Cost-effective engineering</h5>
                               <p>Develop an AI & ML project and maximize your return on investment (ROI) without compromising on quality and delivery timeline.</p>
                           </div>
                         </div>
                         <br /><br />
       
                         <div className='com'>
                           <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                             <div className='com-text'>
                               <h5 style={{fontWeight:'600'}}>Cost-effective engineering</h5>
                               <p>Develop an AI & ML project and maximize your return on investment (ROI) without compromising on quality and delivery timeline.</p>
                           </div>
                         </div>
                       </div>
       
               <div >
       
                 <div className='com'>
                   <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                   <div className='com-text'>
                     <h5 ><strong>Leading AI & ML specialists</strong></h5>
                     <p>A cross-functional team of certified AI & ML experts provide guidance through all stages of your project, from concept to implementation and beyond.</p>
                   </div>
                 </div>
                 <br /><br />
                 <div className='com'>
                   <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                   <div className='com-text'>
                     <h5 ><strong>Time zone compatibility</strong></h5>
                     <p>With offices and engineers around the world, Software Mind provides 24/7 support for projects. We can take care of your AI & ML needs, so you can focus on your core business.</p>
                   </div>
                 </div>
                 <br /><br />
                 <div className='com'>
                   <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                   <div className='com-text'>
                     <h5 ><strong>Time zone compatibility</strong></h5>
                     <p>With offices and engineers around the world, Software Mind provides 24/7 support for projects. We can take care of your AI & ML needs, so you can focus on your core business.</p>
                   </div>
                 </div>
                 <br /><br />
                 <div className='com'>
                   <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
                   <div className='com-text'>
                     <h5 ><strong>Time zone compatibility</strong></h5>
                     <p>With offices and engineers around the world, Software Mind provides 24/7 support for projects. We can take care of your AI & ML needs, so you can focus on your core business.</p>
                   </div>
                 </div>
                 </div>
       
             </div>
       
         </div>




        <div style={{backgroundColor:'#E8E8E8', marginTop:'8em', padding:'7.5em 10em'}}>

          <h2 className='mb-[2.7em]  text-black'>Who we’ve helped</h2>

          <marquee behavior="smooth" direction="left" className='m-0'>
          <div className='flex h-[3em]'>
            <img src={image1} alt=""/>
            <img src={image2} alt="" className='ml-[8em]'/>
            <img src={image3} alt="" className='ml-[8em]'/>
            <img src={image4} alt="" className='ml-[8em]'/>
            <img src={image5} alt="" className='ml-[8em]'/>
            <img src={image6} alt="" className='ml-[8em]'/>
            <img src={image1} alt="" className='ml-[8em]'/>
            <img src={image2} alt="" className='ml-[8em]'/>
            <img src={image3} alt="" className='ml-[8em]'/>
            <img src={image4} alt="" className='ml-[8em]'/>
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
                <img src={card2} alt="" className='h-[25em] w-[68em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={card2} alt="" className='h-[25em] w-[70em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={card2} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={card2} alt="" className='h-[25em] w-[75em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={card2} alt="" className='h-[25em] w-[86em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
                <img src={card2} alt="" className='h-[25em] w-[65em]' style={{borderTopLeftRadius:'2em', borderBottomLeftRadius:'2em'}}/>
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
        <h2 className='font-bold text-[2.5em] text-black' style={{margin:'2em 5em 2.5em 4em'}}>What our clients say</h2>
          
        </div>





        <div className='flex h-[15.4em]' style={{margin:'5em 10em'}}>
        <div style={{maxHeight:'18em', overflowY:'hidden', width:'47em'}} ref={scrollRef}>
            <div className='p-[2em] w-[47em] h-[240px]' style={{border:'1px solid black', borderRadius:'1em'}}>
                <p>The diversity and flexibility of the team were impressive. We had team members with different personalities and working styles which helped balance the project. For example, we had a teammate that excelled at taking a big picture approach, but we had another developer that was more detail oriented.</p>

                <p className='mt-[5em] text-right'>Kai Limbach, Product Owner at Siegwerk Druckfarben AG & Co. KGaA</p>
            </div>

            <div className='p-[2em] w-[47em] h-[240px]' style={{border:'1px solid black', borderRadius:'1em'}}>
                <p>Impressive is the high quality of the individuals, both personally (proactive approach) and professionally.</p>

                <p className='mt-[5em] text-right'>Senior Director of Software Engineering at Hydrafacial</p>
            </div>


            <div className='p-[2em] w-[47em] h-[240px]' style={{border:'1px solid black', borderRadius:'1em'}}>
                <p>Their professionalism working in a complex environment with cutting-edge technologies is top-notch!</p>

                <p className='mt-[5em] text-right'>Chief Product Officer at GemOne</p>
            </div>


            <div className='p-[2em] w-[47em] h-[240px]' style={{border:'1px solid black', borderRadius:'1em'}}>
                <p>The partnership that we have with Software Mind is actually critical to CSL. We’re looking to deliver specific features and functions to our customers and the only way that we’re going to do that is through this collaboration. They're critical to what we want to do as a business and our growth strategy going forward.”</p>

                <p className='mt-[5em] text-right'>Steven Robertson, CTO at CSL</p>
            </div>

            <div className='p-[2em] w-[47em] h-[240px]' style={{border:'1px solid black', borderRadius:'1em'}}>
                <p>I would recommend other companies using Software Mind’s services and their personnel for a few reasons. The main reason obviously is that they delivered to my satisfaction. Software Mind under promised and overdelivered, and they delivered on time and under budget.</p>

                <p className='mt-[5em] text-right'>Luke Crane, CEO at Voice of Fire</p>
            </div>

        </div>

        <div>
            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrollup}>&#9650;</button> <br />

            <button className=' text-orange-600 m-[2em] text-[1.7em]' onClick={scrolldown}>&#9660;</button>
        </div>
    </div>










        <div>
        <h2 className='font-bold text-[2.5em] text-black w-[25em]' style={{margin:'0em 5em 2.5em 4em'}}>Organizations we support with manufacturing software solutions</h2>


        <div className='flex text-black' style={{margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt=""/>
              </div>
              <div className='ml-[25px]'>
                <h5>Industrial manufacturing</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Improve operations by connecting people, devices and processes and utilizing tailor-made solutions designed for your business goals. Enhance machine maintenance, track product quality and automate processes to drive productivity and save resources.</p>
              </div>
            </div>


            <div className='flex mt-[60px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Automotive</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Get cross-technological support, from embedded platform development to advanced data management, and optimize production processes through predictive analytics and device connectivity. Design and develop innovative smart vehicle functionalities using 5G, embedded systems and AI.</p>
              </div>
            </div>

          </div>


          <div className='ml-[80px]'>

          <div className='flex'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Food industry </h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Apply innovative technologies to production management to boost efficiency, reduce wastage and control resources more effectively. Monitor harvesting performance and animal stock health, maintain optimal storage environments and address facility inefficiencies.</p>
              </div>
            </div>


            <div className='flex mt-[70px]'>
              <div className='p-[20px] h-[6em] w-[6em]' style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%'}}>
                <img src={eye} alt="" className='h-[4em]'/>
              </div>
              <div className='ml-[25px]'>
                <h5>Apparel manufacturing</h5>
                <p className='w-[420px] text-[14px] mt-[15px]'>Design autonomous processing chains, improve machine maintenance with predictive analytics and track inventory in real time. Create smart factories by implementing evolutive custom software and firmware, while developing wearable electronics and e-textiles.</p>
              </div>
            </div>
            
          </div>
        </div>

        </div>








        <div>

        <div className='auto_box m-[10em]'>
          <h2 className='auto_box_heading text-black'>
            Technologies
          </h2>
          <p>
            Our cross-functional teams work with best-of-breed tools to develop customized solutions that deliver rewarding experiences and comply with market regulations.
          </p>
        </div>

        

        </div>


        <div className='m-[10em]'>
          <div className='flex'>
            <div className='w-[24.2em] p-[1.5em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible8(!isVisible8)}>
                <button className='telecom_box_heading text-[1.3em] text-black'>Platforms</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible8 ? "block" : "none"}}>
                  <li className=" text-black" style={{margin:'0em'}}>Microsoft Azure IoT Suite</li>
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>3Google Cloud IoT Core and AI Platform</li>
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>AWS IoT Core and AWS SageMaker</li>
                </ul>
              </div>
            </div>

            <div className='w-[24.2em] p-[1.5em] ml-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible9(!isVisible9)}>
                <button className='telecom_box_heading text-[1.3em] text-black'>Industrial Connectivity</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible9 ? "block" : "none"}}>
                  <li className=" text-black" style={{margin:'0em'}}>MODBUS</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>AWS IoT Expresslink</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>OPC UA</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>FreeRTOS</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>AWS IOT Core</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>ProfiBUS</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>MS Azzure IoT HUB</li>
                </ul>
              </div>
            </div>

            <div className='w-[24.2em] p-[1.5em] ml-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible10(!isVisible10)}>
                <button className='telecom_box_heading text-[1.3em] text-black'>Cloud Tech</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible10 ? "block" : "none"}}>
                  <li className=" text-black" style={{margin:'0em'}}>Microsoft Azure</li> <br />  
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Amazon Web Services</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Google Cloud Platform</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className='w-[24.2em] p-[1.5em] mt-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible11(!isVisible11)}>
                <button style={{fontSize:'1.3em'}} className='telecom_box_heading text-black'>Azure</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible11 ? "block" : "none"}}>
                  <li className=" text-black" style={{margin:'0em'}}>Azure DevOps</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Azure Sire Recovery</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Azure Machine Learning</li>
                </ul>
              </div>
            </div>

            <div className='w-[24.2em] p-[1.5em] mt-[1em] ml-[1em]' style={{border:'1px solid grey', borderRadius:'0.5em'}}>
              <div  onClick={() => setIsVisible12(!isVisible12)}>
                <button style={{fontSize:'1.3em'}} className='telecom_box_heading text-black'>MLOPS</button>
              </div>
              <div>
                <ul style={{margin:'1.1em 0em 0em 0em', padding:'0em', display: isVisible12 ? "block" : "none"}}>
                  <li className=" text-black" style={{margin:'0em'}}>AWS SageMaker</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Generative AI</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Kubeflow</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Private Chat</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>Tensorflow</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>PyTorch</li> <br />
                  <li className=" text-black" style={{margin:'1em 0em 0em 0em'}}>TinyML</li> <br />
                </ul>
              </div>
            </div>
          </div>
          
        </div>






         <div className='auto_box mx-[10em] my-[5em]'>
            <h2 className='auto_box_heading text-black'>
              Looking for other software services?
            </h2>
            <p>
              For over two decades we've been helping companies across markets and sectors develop disruptive solutions. Proven ways of working, domain knowledge and an open culture that prioritizes ownership mean we contribute from day one.
            </p>
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
            <p className='text-white text-[3em] w-[12em] font-bold'>Optimize your manufacturing operations</p>
            <button className='text-white bg-orange-700 border-none mt-[5em]' style={{padding:'0.6em 2em', borderRadius:'2em'}}>Contact us</button>
          </div>
          <div style={{margin:'0em 5em 0em 0em'}}>
            <p className='text-[2.3em] text-white mt-[1em]'>1600+ talented experts</p>
            <p className='text-[2.3em] text-white mt-[1em]'>25+ years of innovation</p>
            <p className='text-[2.3em] text-white mt-[1em]'>350+ clients who trust us</p>
          </div>

        </div>
       
               



         <div className='tele_software'>
          <div>
            <h2 className='tele_software_heading text-black'>Manufacturing software development – FAQ</h2>
          </div>

          <div className='tele_software_box'>
            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible1(!isVisible1)}>
              <button>
                <p className='text-[1em] font-bold'>How can AI support manufacturing software?</p>
              </button>
              <div style={{ display: isVisible1 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                AI supports software for the manufacturing industry in several ways:
                </p>
                <p className='text-[0.9em] mt-3'>
                Enhanced operational efficiency – By automating repetitive processes, AI can improve the effectiveness and precision of manufacturing operations so that workers can focus on more complex tasks.
                </p>
                <p className='text-[0.9em] mt-3'>
                Improved production – By enabling predictive maintenance, AI reduces downtimes by identifying potential problems before they occur, which supports smooth production cycles and keeps down maintenance costs.
                </p>
                <p className='text-[0.9em] mt-3'>
                Intelligent supply chain management – AI can help predict demand, manage inventory and help companies coordinate production rates with market demand.
                </p>
                <p className='text-[0.9em] mt-3'>
                Data-driven insights – By supporting data gathering and analysis, AI can help businesses understand and act on data – in real-time. These AI-driven decisions can cut costs and maximize resource allocation.
                </p>
                <p className='text-[0.9em] mt-3'>
                  
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible2(!isVisible2)}>
                <button>
                    <p className='text-[1em] font-bold'>How can manufacturing software enhance workflow automation?</p>
                </button>
                <div style={{ display: isVisible2 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Manufacturing software helps companies automate operations – from procurement processes and production lines to supply chain coordination, customer service and software delivery. Along with increasing the speed of processes and reducing human error, this type of software enables specialists to focus on core business issues and high-level tasks.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible3(!isVisible3)}>
                <button>
                  <p className='text-[1em] font-bold text-left'>What are the benefits that custom software solutions bring to an organization?</p>
                </button>
                <div style={{ display: isVisible3 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                The significant advantages of custom manufacturing software development in the manufacturing industry include scalability, improved performance, enhanced customer relationships, support for machinery control and production plans, increased monitoring capabilities, accurate business intelligence solutions and many more.
                </p>
              </div>
            </div>


            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible4(!isVisible4)}>
                <button>
                    <p className='text-[1em] font-bold'>What is manufacturing software development?</p>
                </button>
                <div style={{ display: isVisible4 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Manufacturing software development involves the creation of programs that aim to streamline factory operations. These programs are designed to manage various tasks such as scheduling production, inventory tracking, and machine control. The ultimate goal of manufacturing software development is to enable manufacturers to optimize their workflows, reduce wastage of both time and materials, and achieve a more cost-effective operation overall.
                </p>
              </div>
            </div>

            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible5(!isVisible5)}>
                <button>
                    <p className='text-[1em] font-bold'>How does custom software help the manufacturing industry?</p>
                </button>
                <div style={{ display: isVisible5 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                Custom software can improve business performance by providing tailor-made solutions, security maintenance and integration, as well as by speeding up reporting. Custom software streamlines production planning and machinery control, helps with proactive monitoring, provides insightful business intelligence, enhances customer relationships and improves scalability and performance for distinct competitive advantages.
                </p>
              </div>
            </div>

            <div style={{padding:'2em', borderBottom:'1px solid black'}} onClick={() => setIsVisible6(!isVisible6)}>
                <button>
                    <p className='text-[1em] font-bold'>What are the types of software used in manufacturing?</p>
                </button>
                <div style={{ display: isVisible6 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                There are various types of software used in manufacturing – one of the most crucial is Enterprise Resource Planning (ERP), software for managing resources and operations. Another critical type of solution is a manufacturing execution system (MES). A MES focuses on monitoring the real-time production process to optimize outputs. The third essential software for industrial-related assignments is (PLM), which manages product data throughout its lifecycle. Other types of industrial software worth mentioning are Quality Management Systems (QMS) and Computer-Aided Manufacturing (CAM).
                </p>
              </div>
            </div>

            <div style={{padding:'2em'}} onClick={() => setIsVisible7(!isVisible7)}>
                <button>
                    <p className='text-[1em] font-bold'>What is the cost of developing custom manufacturing software?</p>
                </button>
                <div style={{ display: isVisible7 ? "block" : "none", margin:'1.2em 0em 0em 0em'}}>
                <p className='text-[0.9em]'>
                A proper cost estimate for developing a custom manufacturing software tailored to your business needs depends on the features included, project requirements, tools and technologies, developers’ expertise and a software company’s reputation. Only then will it be possible to provide an accurate estimate for the cost of manufacturing software development.
                </p>
              </div>
            </div>


          </div>
        </div>



       
       
       
       
           <section className='auto'>
               
           <div className='auto_box'>
            <h2 className='auto_box_heading text-black'>
              Looking for other software services?
            </h2>
            <p>
              For over two decades we've been helping companies across markets and sectors develop disruptive solutions. Proven ways of working, domain knowledge and an open culture that prioritizes ownership mean we contribute from day one.
            </p>
          </div>
       
       
          <h2 className='mt-[100px] mb-[60px] text-black'>Engineering and consultancy that deliver value</h2>
                     
                     
                     
          <div className='flex'>
            <div className='telecom'> 
              <img src={card1} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
                Generative AI development services
              </div>
                 
              <div className='tele-text' >
                Use generative AI models to stay  ahead of your competition.
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card2} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
                Cloud consulting & services
              </div>
                 
              <div className='tele-text' >
                Accelerate your cloud migration strategy and develop cloud-native apps.
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card3} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
              Digital transformation services
              </div>
                 
              <div className='tele-text' >
              Integrate emerging technologies that boost performance, security and user experience.
              </div>
            </div>
          </div>
       
               
       
       
          <h2 className='mt-[100px] mb-[60px] text-black'>Engineering expertise that supports industries</h2>
       
       
       
          <div style={{display:'flex'}}>
            <div className='telecom '> 
              <img src={card6} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
                Financial services
              </div>
                 
              <div className='tele-text'>
                Engineer customized solutions that increase personalization and user conversion across channels. 
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card5} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
                Sports betting 
              </div>
                 
              <div className='tele-text' >
                Develop online betting software that prioritizes rewarding customer experience. 
              </div>
            </div>
       
            <div className='telecom'> 
              <img src={card4} alt="" className='h-[20em]' />
              <div className='telecom_text text-black' style={{fontSize:'1.1em'}}>
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
