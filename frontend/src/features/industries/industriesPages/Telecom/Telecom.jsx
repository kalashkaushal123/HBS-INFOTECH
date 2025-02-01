
import '../Telecom/Telecom.css'
import ai_display from './images/ai_display.svg'
import display from './images/display.webp'

import eye from './images/eye.svg'

import bg_image from './images/bg_image.jpeg'

import part1 from './images/part1.webp'
import part2 from './images/part2.webp'

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


export default function Telecom() {
  return (
    <div>
          
        <div>
          <img className="photo" src={display} style={{height:'43.7em'}} />
          <div className="main-photo"  style={{height:'43.7em'}}>
            <img className="firstphoto" src={ai_display} style={{margin:'11.2em 0em 0em 44.4em', padding:'1.4em'}} />
            <h1 className="main-heading" style={{marginTop:'1.2em', fontSize:'2.9em' }}>Telecom Software Development Services</h1>
            <p className="next-line" style={{fontSize:'1.2em', margin:'0.6em 10em'}}>Accelerate the digital transformation of your telecom applications with cloud-native architectures, DevOps tools, and advanced Gen AI technologies that streamline operations..</p>
            <button className="contact" style={{width:'7.5em', margin:'2.5em 42.5em', height:'2.5em'}}> Contact us</button>
          </div>
        </div>
       
        <div className='auto'>
          <div className='auto-text'>
            <h2 style={{color:'black'}}>
              Boost your telecom infrastructures with our experts
            </h2>
            <p>
              Service providers choose us as their long-term partner for platform integrations and bespoke software solutions that use cloud-native, open-source components. With telecommunications expertise spanning BSS/OSS, core network applications for 3G, LTE, and 5G, our software development and engineering services accelerate digital transformation journeys toward private and public clouds. 
            </p>
          </div>
                     
               
                    
        </div>



        <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em'}}>Our telecom software services</h2>


        <div style={{display:'flex', color:'black', margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div style={{display:'flex'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Telecommunications software development</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Optimize network performance, improve customer experience and streamline operations by using our tools and know-how to drive your development. Our teams have delivered software projects connected to self-care portals, CRM, payment systems, provisioning, inventory, monitoring and observability, IN and IMS, IoT, VoIP and roaming.</p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'60px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>DevOps approach and CI/CD methodologies</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Increase your operational agility and reduce maintenance costs through continuous integration (CI) and continuous deployment (CD) methodologies. A DevOps mindset in telecom enables faster releases of new features, automated and iterative software development, as well as the ability to detect and fix errors earlier.</p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'60px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5 style={{width:'400px'}}>Business and Operations Support Systems development</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Enhance telecom operations with customized BSS and OSS solutions that efficiently manage customers, billing, and payments while optimizing network performance and monitoring capabilities. Drive your digital transformation with a partner who knows how to streamline processes, reduce downtimes, and achieve results.</p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'60px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Machine Learning for the telco industry</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Leverage ML models to optimize workflows, monitor traffic patterns, evaluate performance, detect events, or analyze photographic documentation of network cabling. Boost operational efficiency with predictive AIOps that proactively manage and optimize network operations.</p>
              </div>
            </div>

          </div>


          <div style={{marginLeft:'80px'}}>

          <div style={{display:'flex'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Digital transformation of telecommunication services</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Manage a legacy platform transformation - from monolith to microservices. Build a cutting-edge custom telecom solution for existing technologies to automate network lifecycle management, improve scalability, boost performance and deliver a more cost-effective solution. </p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'70px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Security services for telcos</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Enhance your 5G cloud-native architectures with robust security measures. Conduct security pen tests and audits, implement a Secure Software Development Lifecycle (SSDLC), and adopt DevSecOps practices to address and prevent vulnerabilities.</p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'80px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Cloud Native Network functions development</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Utilize Cloud Native architectures to migrate from legacy SS7-based TDM and IN systems to software-based SIP, IMS and 5G network applications. Whether tailored telecom enterprise software development or complete platforms, we design, develop, deploy, migrate and support your network applications. </p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'80px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Generative AI implementation in telco solutions</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Support the automation of sales services and complaint handling processes with ChatGPT or Auto-GPT. Implement generative AI solutions that can assist you with predictive decision-making based on data breakdowns that will elevate your company’s competitiveness.</p>
              </div>
            </div>

            
          </div>
        </div>



        <div style={{position:'relative', marginTop:'140px'}}>

          <img src={bg_image} alt="" height='390px' width='1620px' />

          <div style={{position:'absolute', top:'60px', left:'280px'}}>
            <h2>Explore proven DevOps strategies for telecom operators</h2>

            <p style={{fontSize:'18px', margin:'50px 350px 0px 130px', textAlign:'center'}}>Read this ebook on implementing DevOps in telecom to learn insights from Red Hat and Software Mind experts on enhancing cloud environments, mitigating challenges to adoption and more.</p>

            <button  className="contact" style={{width:'7.5em', margin:'2.5em 26em', height:'2.5em'}}>Download</button>
          </div>

        </div>





        <div>
          <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em'}}>Telecommunication software integrations</h2>


        </div>




        <div>
          <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em'}}>Amplitiv – Software Mind’s telecom products brand</h2>


          <div style={{margin:'4em 16em', display:'flex'}}>

            <div style={{width:'500px'}}>
              <h3>Empowering operators with proven solutions</h3>
              <p style={{marginTop:'20px'}}>Along with our dedicated telco software services, for over 20 years our experts have been delivering ready-made, highly customizable solutions for global telecommunications players looking to generate revenue and deliver rewarding customer experiences. Our specialists design, develop and deploy innovative Roaming, Value-added Services and Cloud Calling solutions.</p>
            </div>

            <div style={{marginLeft:'100px', position:'relative'}}>
              <img src={part1} alt="" height='380px' style={{borderRadius:'50%', marginTop:'-40px'}} />
              <div className='circle' style={{height : '380px', width : '380px'}}></div>
            </div>

          </div>

          <div style={{margin:'4em 16em', display:'flex'}}>

            <div style={{position:'relative'}}>
              <img src={part2} alt="" height='380px' style={{borderRadius:'50%', marginTop:'-40px'}} />
              <div className='circle' style={{height : '380px', width : '380px'}}></div>
            </div>

            <div style={{marginLeft:'120px', marginTop:'40px'}}>
              <h3>Secure products that drive mobile networks’ growth</h3>
              <p style={{marginTop:'20px'}}>Trusted by Tier 1 telecom operators from around the world, our products include a comprehensive Roaming suite with Steering of Roaming, Border Steering, VoLTE Steering, Welcome SMS, proven Value-Added Services platforms such as Voicemail and Call Completion, as well as a UC Self-Care Portal and Recording Server for Cisco BroadWorks.</p>
            </div>

          </div>

          <button style={{marginLeft:'43em', marginTop:'4.6em', border:'1px solid orangered', color:'orangered', backgroundColor:'none', padding:'5px 25px', borderRadius:'10em'}}>Learn More</button>

        </div>
       



        <div style={{backgroundColor:'	#E8E8E8', marginTop:'8em', padding:'7.5em 10em'}}>

          <h2 style={{marginBottom:'2.7em'}}>Who we’ve helped</h2>

          <marquee behavior="smooth" direction="left">
            <img src={logo1} alt="" height='40px'/>
            <img src={logo2} alt="" height='40px' style={{marginLeft:'8em'}}/>
            <img src={logo3} alt="" height='60px' style={{marginLeft:'8em'}}/>
            <img src={logo4} alt="" height='60px' style={{marginLeft:'8em'}}/>
            <img src={logo5} alt="" height='60px' style={{marginLeft:'8em'}}/>
            <img src={logo6} alt="" height='40px' style={{marginLeft:'8em'}}/>
            <img src={logo7} alt="" height='40px' style={{marginLeft:'8em'}}/>
            <img src={logo8} alt="" height='40px' style={{marginLeft:'8em'}}/>
            <img src={logo9} alt="" height='40px' style={{marginLeft:'8em'}}/>
            <img src={logo10} alt="" height='50px' style={{marginLeft:'8em'}}/>
          </marquee>

        </div>



        <div style={{marginRight:'10.5em'}}>
          <div style={{display:'flex', marginTop:'10em', justifyContent:'space-between'}}>
            <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em'}}>Case studies</h2>

            <button style={{ border:'1px solid orangered', color:'orangered', backgroundColor:'none', padding:'5px 25px', borderRadius:'10em', height:'2.5em'}}>More case studies</button>
          </div>

        </div>



        <div>
        <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em'}}>Hear from our clients</h2>
          
        </div>





        <div>
        <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em', width:'25em'}}>What to expect from developing telecom software with Software Mind</h2>


        <div style={{display:'flex', color:'black', margin:'0em 5em 2.5em 10em'}}>
          <div>
            <div style={{display:'flex'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Expertise</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Close cooperation with leading telecom companies and communication service providers.</p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'60px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Operations support</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Take advantage of 24/7 L2 and L3 on-call service level commitment support.</p>
              </div>
            </div>

          </div>


          <div style={{marginLeft:'80px'}}>

          <div style={{display:'flex'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Security</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Unrivaled experience operating under the tightest regulations and security requirements.  </p>
              </div>
            </div>


            <div style={{display:'flex', marginTop:'70px'}}>
              <div style={{boxShadow:'0 4px 8px 0 rgba(102, 102, 102, 0.2), 0 4px 15px 0 rgba(114, 114, 114, 0.19)', borderRadius:'50%',  padding:'20px', height:'100px'}}>
                <img src={eye} alt="" height='60em' />
              </div>
              <div style={{marginLeft:'25px'}}>
                <h5>Agile design and development</h5>
                <p style={{width:'420px', fontSize:'14px', marginTop:'15px'}}>Leverage innovative, agile development methods, business processes, operational strategies, DevOps and automated deployments to get better results.</p>
              </div>
            </div>
            
          </div>
        </div>

        </div>




        <div style={{backgroundColor:'#F0F0F0', padding:'8em 0em'}}>
          <h2 style={{fontWeight:"bold", fontSize:'2.5em', color:'black', margin:'0em 5em 2.5em 4em', width:'25em'}}>Our telecom software development process</h2>

          <div style={{display:'flex', margin:'0em 22.6em'}}>
            <div>
              <div style={{display:'flex'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>1</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Get in touch</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>Use the contact form on our website and our experts will reach out to talk with you.</p>
                </div>
              </div>


              <div style={{display:'flex', marginTop:'2em'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>2</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Tell us about your goals</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>A discovery call helps us understand your business context and expectations.</p>
                </div>
              </div>


              <div style={{display:'flex', marginTop:'2em'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>3</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Discuss the technical details</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>With an NDA in place, we can clarify the business needs and technical requirements.</p>
                </div>
              </div>



              <div style={{display:'flex', marginTop:'2em'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>4</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Conduct deep dive sessions</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>We will carry out technical deep dive sessions and audit current platforms, integrations and processes if needed.</p>
                </div>
              </div>

            </div>

            <div>
              <div style={{display:'flex'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>5</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Accept the cooperation proposal</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>The proposal outlines the scope, team setup, timeline and budget we both agree on.</p>
                </div>
              </div>


              <div style={{display:'flex', marginTop:'2em'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>6</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Let’s kick off the project</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>With all the formalities done, we can establish ways of working and start the project.</p>
                </div>
              </div>


              <div style={{display:'flex', marginTop:'2em'}}>
                <div style={{padding:'0.4em 0.7em', borderRadius:'50%', backgroundColor:'white', fontSize:'1.7em', height:'2.2em', width:'2.2em', fontWeight:'bold', color:'orangered'}}>7</div>
                <div style={{marginLeft:'1em'}}>
                  <h4 style={{marginTop:'0.7em', fontSize:'1.2em', fontWeight:'bolder'}}>Establish further cooperation</h4>
                  <p style={{width:'23em', fontSize:'0.9em'}}>After go-live, we ensure your services run smoothly by providing 24/7 SLA tailored to your needs.</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>




        <div>

        <div className='auto_box' style={{margin:'10em'}}>
          <h2 className='auto_box_heading'>
            Technologies
          </h2>
          <p>
            We deliver cross-functional teams that work with every crucial cloud technology and tool on the market. Here are just a few of the cloud-related tech stacks we operate with.
          </p>
        </div>

        

        </div>





        <div>

        <div className='auto_box' style={{margin:'10em'}}>
          <h2 className='auto_box_heading' style={{width:'10em'}}>
            Read articles about telecommunication software development
          </h2>
          <p style={{marginLeft:'4.5em'}}>
            Learn from our experts’ insightful content regarding telecom software development.
          </p>
        </div>

        

        </div>





        <div className='main-photo' style={{height:'28em', display:'flex', justifyContent:'space-between', padding:'5em 6em'}}>
          <div>
            <p style={{color:'white', fontSize:'3em', width:'12em', fontWeight:'bold'}}>Upgrade telecom services with innovative solutions</p>
            <button style={{color:'white', backgroundColor:'orangered', border:'none', padding:'0.6em 2em', borderRadius:'2em', marginTop:'5em'}}>Contact us</button>
          </div>
          <div style={{margin:'0em 5em 0em 0em'}}>
            <p style={{fontSize:'2.3em', color:'white', marginTop:'1em'}}>1500+ experts</p>
            <p style={{fontSize:'2.3em', color:'white', marginTop:'1em'}}>25+ years of innovation</p>
            <p style={{fontSize:'2.3em', color:'white', marginTop:'1em'}}>250+ clients who trust us</p>
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
                 <div className='telecom'> 
                   <img src={card1} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                     Generative AI development services
                   </div>
                 
                   <div className='tele-text' >
                     Use generative AI models to stay  ahead of your competition.
                   </div>
                 </div>
       
                 <div className='telecom'> 
                   <img src={card2} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                     Cloud consulting & services
                   </div>
                 
                   <div className='tele-text' >
                   Accelerate your cloud migration strategy and develop cloud-native apps.
                   </div>
                 </div>
       
                 <div className='telecom'> 
                   <img src={card3} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                   Data science services
                   </div>
                 
                   <div className='tele-text' >
                   Operationalize data to drive efficiency, insights and decision-making. 
                   </div>
                 </div>
               </div>
       
               
       
       
               <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Engineering expertise that supports industries</h2>
       
       
       
               <div style={{display:'flex'}}>
                 <div className='telecom '> 
                   <img src={card6} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                   Telecom
                   </div>
                 
                   <div className='tele-text'>
                   Transform your telecommunication services with customized solutions for modern and legacy systems. 
                   </div>
                 </div>
       
                 <div className='telecom'> 
                   <img src={card5} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                   Biotech & Healthcare
                   </div>
                 
                   <div className='tele-text' >
                   Discover how to maximize the output of your R&D and grow your business with AI-tailored solutions. 
                   </div>
                 </div>
       
                 <div className='telecom'> 
                   <img src={card4} alt="" height='300px' />
                   <div className='telecom_text' style={{fontSize:'1.1em'}}>
                   Manufacturing
                   </div>
                 
                   <div className='tele-text'>
                   Enhance your manufacturing operations by turning to experts with proven expertise with Industry 4.0 tech.   
                   </div>
                 </div>
               </div>
       
       
       
       
             </section>
       
       
       
       
       
         
            
             
    </div>
  )
}
