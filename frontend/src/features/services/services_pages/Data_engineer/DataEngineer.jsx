
import './dataengineer.css'
import Header from "/src/comman/Header.jsx"
import Footer from "/src/comman/Footer.jsx"
import  image1 from './images/1.webp'
import image2 from './images/2.webp'
import image3 from './images/3.svg'
import image4 from './images/4.svg'
import image5 from './images/5.webp'
import image6 from './images/6.svg'
import image7 from './photos/case.webp'
import card1 from './photos/card1.webp'

import imagea from './photos/Development-Services.svg'
import imagedesign from './photos/app-design.svg'
import imageconsult from './photos/consulting.svg'
import imageappdevelop from './photos/app-development.svg'
import imageappinte from './photos/app-integration.svg'
import imagecyber from './photos/Cybersecurity.svg'
import imageenterinte from './photos/Enterprise-integration.svg'
import imagefinanc from './photos/Financial-Services.svg'
import imagehealth from './photos/healthcare.svg'
import imageimage from './photos/image_.svg'
import imageintegration from './photos/integration.svg'
import imageitser from './photos/IT-Services.svg'
import imagemaintan from './photos/maintenance-and-support.svg'
import imagemobileapp from './photos/mobile-apps-featured-image.webp'
import imagepayment from './photos/payment-gateways.svg'
// import imagephonemain from './photos/phone mAIN.svg'
import imageplat from './photos/platforms.svg'
import imagepush from './photos/push-notifications.svg'
import imagereality from './photos/reality-experiences.svg'
import imagerevital from './photos/revitalization-and-modernization.svg'
import imagesign from './photos/Sign-On-SSO.svg'
import imagetelecom from './photos/Telecom.svg'
import imagetravel from './photos/travel-and-leisure-.svg'
import imagewebser from './photos/web-services.svg'

export default function DataEngineer() {
  return (
       <>
   
   
   <Header/>
   <div>
    <div className="fluid" style={{backgroundColor:"white"}}>
         <div className="backgroundimg w-100" >
           <div className="trnbox" style={{width:"100%",height:"600px"}}>
           <center className="m-auto mt-5 ">
            <svg className='rcicel' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 7.75266C22.9744 7.75266 22.1197 6.89979 22.1197 5.87633C22.1197 4.85288 22.9744 4 24 4C25.0256 4 25.8803 4.85288 25.8803 5.87633C25.8803 6.89979 25.0256 7.75266 24 7.75266ZM24 7.75266V11.3348M15.0684 15.0448L12.547 12.5288M7.76068 24C7.76068 25.0235 6.90598 25.8763 5.88034 25.8763C4.8547 25.8763 4 25.0235 4 24C4 22.9765 4.8547 22.1237 5.88034 22.1237C6.90598 22.1237 7.76068 22.9765 7.76068 24ZM7.76068 24H11.3504M15.0684 32.9552L12.547 35.4712M24 40.2473C25.0256 40.2473 25.8803 41.1002 25.8803 42.1237C25.8803 43.1471 25.0256 44 24 44C22.9744 44 22.1197 43.1471 22.1197 42.1237C22.1197 41.1002 22.9744 40.2473 24 40.2473ZM24 40.2473V36.6652M32.9316 32.9552L35.453 35.4712M40.2393 24C40.2393 22.9765 41.094 22.1237 42.1197 22.1237C43.1453 22.1237 44 22.9765 44 24C44 25.0235 43.1453 25.8763 42.1197 25.8763C41.094 25.8763 40.2393 25.0235 40.2393 24ZM40.2393 24H36.6496M35.4957 12.5288L32.9744 15.0448M20.8376 6.1322C18.188 6.60128 15.7094 7.62473 13.6154 9.11727M9.17094 13.5949C7.67521 15.7271 6.64957 18.2004 6.17949 20.8443M6.17949 27.1557C6.64957 29.7996 7.67521 32.2729 9.17094 34.4051M13.6154 38.8401C15.7521 40.3326 18.188 41.3561 20.8376 41.8252M27.1624 41.8678C29.812 41.3987 32.2906 40.3753 34.3846 38.8827M38.8291 34.4051C40.3248 32.2729 41.3504 29.7996 41.8205 27.1557M41.8205 20.8443C41.3504 18.2004 40.3248 15.7271 38.8291 13.5949M34.3846 9.15991C32.2479 7.66738 29.812 6.60128 27.1624 6.17484M22.4188 16.8358L22.5897 15.0448H25.3675L25.5385 16.8358L27.9316 17.8166L29.3419 16.6652L31.3077 18.6269L30.1538 20.0341L31.1367 22.4222L32.9316 22.5927V25.3646L31.1367 25.5352L30.1538 27.9232L31.3077 29.3305L29.3419 31.2921L27.9316 30.1407L25.5385 31.1215L25.3675 32.9126H22.5897L22.4188 31.1215L20.0256 30.1407L18.6154 31.2921L16.6496 29.3305L17.8034 27.9232L16.8205 25.5352L15.0256 25.3646V22.5927L16.8205 22.4222L17.8034 20.0341L16.6496 18.6269L18.6154 16.6652L20.0256 17.8166L22.4188 16.8358ZM20.6667 24C20.6667 25.8337 22.1624 27.3689 24 27.3689C25.8376 27.3689 27.3333 25.8763 27.3333 24C27.3333 22.1237 25.8376 20.6311 24 20.6311C22.1624 20.6311 20.6667 22.1237 20.6667 24ZM9.8547 9.84222C9.12821 10.5672 9.12821 11.7612 9.8547 12.4861C10.5812 13.2111 11.7778 13.2111 12.5043 12.4861C13.2308 11.7612 13.2308 10.5672 12.5043 9.84222C11.7778 9.11727 10.5812 9.11727 9.8547 9.84222ZM9.8547 38.1578C10.5812 38.8827 11.7778 38.8827 12.5043 38.1578C13.2308 37.4328 13.2308 36.2388 12.5043 35.5139C11.7778 34.7889 10.5812 34.7889 9.8547 35.5139C9.12821 36.2388 9.12821 37.4328 9.8547 38.1578ZM38.1453 38.1578C38.8718 37.4328 38.8718 36.2388 38.1453 35.5139C37.4188 34.7889 36.2222 34.7889 35.4957 35.5139C34.7692 36.2388 34.7692 37.4328 35.4957 38.1578C36.2222 38.8827 37.4188 38.8827 38.1453 38.1578ZM38.1453 9.84222C37.4188 9.11727 36.2222 9.11727 35.4957 9.84222C34.7692 10.5672 34.7692 11.7612 35.4957 12.4861C36.2222 13.2111 37.4188 13.2111 38.1453 12.4861C38.8718 11.7612 38.8718 10.5672 38.1453 9.84222Z" stroke="#FFFFFF" stroke-width="1.44" stroke-miterlimit="10"></path></svg> 
             
   
             <div className="firNyj"> <h1 className="fRjBVq sm-header2">
             Data Engineering and Data Science Services
             </h1></div>
             <div className="dwCooV cCEOnh sm-body20 m-auto">
             Gather, organize, analyze and operationalize large data sets to deliver a personalized customer experience and increase your competitive advantage.


             </div>
           
           <br /><br /><br />
           <button className="btn btn-dark rounded-5">Contact Us</button>
   
           </center>        
           {/* <div className="backgroundimg" style={{width:"100%",height:"600px"}}></div> */}
           </div>
           
         </div>
   
         
   </div>
   
   
     {/* <img className="photo" src={imagemobileapp} alt />
     <div className="main-photo">
       <img className="firstphoto" src={imagea} alt />
       <h1 className="main-heading">Mobile Apps Development Services</h1>
       <p className="next-line">Empower your mobile presence by delivering innovative apps that drive <br />growth</p>
       <button className="contact"> Contact us</button>
     </div> */}
   
   
   
   
     <div className="next-box">
       <h1 className="main-head2">A mobile apps <br />
         development <br />
         company that <br />
         delivers results</h1> 
       <p className="main-head3">Guarantee the success of your mobile applications by partnering with a reliable and <br />
         experienced team who can implement the latest mobile solutions. Make your app <br />
         stand out with Software Mind's mobile development services.</p>
       <div className="th4head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>Our mobile application development   services
         </h1>
       </div>
       <div className="first-table-part1">
         <div className="justify-table-first">
           <div className="first-row">
             <div className="row-photo">  
               <img src={imageconsult} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">App consulting</h3>
               <p className="row-para"> Leverage a complete app audit that assesses your project's scope <br />
                 to choose the most beneficial technologies and customize your <br />
                 toolkit to enter the market with a high-quality application.</p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagedesign} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">App design</h3>
               <p className="row-para"> Captivate your users with apps that provide an intuitive interface <br />
                 and design thanks to thorough UX usability testing. <br /> 
                 Adhere to best practices required by Google Material Design and <br />
                 Apple Human Interface to deliver a flawless app experience.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first2">
           <div className="first-row1">
             <div className="row-photo1">  
               <img src={imageappdevelop} alt />
             </div>
             <div className="row-des1">
               <h3 className="row-head1">App development</h3>
               <p className="row-para1">Boost your mobile app development with our end-to-end approach, <br />
                 including strategies to streamline coding, robust CI/CD <br />
                 process, ready-to-use components, bespoke tools, dedicated <br />
                 testing procedures and quality assurance.</p>
             </div>
           </div>
           <div className="first-row1">
             <div className="row-photo1">  
               <img src={imageappinte} alt />
             </div>
             <div className="row-des1">
               <h3 className="row-head1">App integration</h3>
               <p className="row-para1"> Take advantage of third-party APIs and software development kits <br />
                 (SDK) to empower your mobile app by implementing external solutions like payment <br />
                 gateways, geolocation services, or analytics platforms.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first3">
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagerevital} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">App revitalization and modernization</h3>
               <p className="row-para"> Reduce technical debt by raising your code standards and refactoring existing <br />
                 legacy code with our engineers’ assistance, while applying test automation to improve <br />
                 accuracy, reduce the number of bugs and speed up your software delivery.</p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagemaintan} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">App maintenance and support</h3>
               <p className="row-para">Benefit from constant monitoring of status and performance of your mobile <br />
                 application thanks to a team dedicated to resolving issues, frequently releasing updates <br />
                 and enhancing security thus guaranteeing a seamless performance and continued growth.</p>
             </div>
           </div>
         </div>
       </div>
   
       
       <div className="th8head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>Benefits of our mobile app services
         </h1>
       </div>
       <div className="table-number">
         <div className="justify-table-number">
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">1</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">Scalable solutions</h3>
               <p className="row-para"> Design the architecture of mobile applications crafted to efficiently <br />
                 grow and adapt to handle increasing user loads and evolving requirements, as the <br />
                 changing needs of our customers are met by incorporating their feedback into every <br />
                 stage of the development process.</p>
             </div>
           </div>
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">2</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">Agile development process</h3>
               <p className="row-para"> Implement an iterative and flexible approach to mobile app <br />
                 development that emphasizes collaboration, adaptability and customer feedback. <br />
                 Our agile approach, which emphasizes customer-centricity and continuous input from <br />
                 end-users and stakeholders, refines product development.</p>
             </div>
           </div>
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">3</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">Security-first approach</h3>
               <p className="row-para"> Increase your app's cybersecurity, enhance its reputation <br />
                 and reduce the risk of security breaches by working with a team that adheres <br />
                 to regulatory requirements to ensure users can trust your <br />
                 applications with their sensitive data.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-number2">
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">4</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">Multi-platform expertise</h3>
               <p className="row-para">Create and maintain applications that can run on multiple <br />
                 operating systems and mobile device types. By making the most out of the <br />
                 diversity of the mobile ecosystem, including iOS and Android, our mobile <br />
                 development process increases development effectiveness.</p>
             </div>
           </div>
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">5</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">    High performing apps</h3>
               <p className="row-para"> Provide users with a seamless experience defined by <br />
                 quick loading times, smooth animations and minimal lag, with the emphasis <br />
                 put on optimizing mobile applications' speed, responsiveness, and efficiency.</p>
             </div>
           </div>
           <div className="first-number">
             <div className="row-number">  
               <p className="sc-505250e6-1">6</p>
             </div>
             <div className="row-des">
               <h3 className="row-head">UI &amp; UX design mastery</h3>
               <p className="row-para"> Deliver user interface (UI) and user experience (UX) <br />
                 that captivate with stunning visuals and provide intuitive, user-centric <br />
                 experiences that boost engagement and satisfaction by understanding the <br />
                 nuances of user behavior and learning business context.</p>
             </div>
           </div>
         </div>
       </div>
   
   
   
       <div className="th5head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>We support different industries <br />with mobile application development
         </h1>
       </div>
       <div className="next-box3">
         <div className="first-table-part1">
           <div className="justify-table-first">
             <div className="first-row">
               <div className="row-photo">  
                 <img src={imageitser}  />
               </div>
               <div className="row-des">
                 <h3 className="row-head">    Software and IT Services</h3>
                 <p className="row-para"> Utilizing Android SDK to develop a bespoke search engine to explore <br />
                   content inside the Android operating system. Participating in the development of an <br />
                   Android launcher that makes it possible for smartphone users to customize their devices.</p>
               </div>
             </div>
             <div className="first-row">
               <div className="row-photo">  
                 <img src={imagecyber} alt />
               </div>
               <div className="row-des">
                 <h3 className="row-head">Cybersecurity</h3>
                 <p className="row-para"> Enhancing security thanks to custom-made SSO implementation. Providing <br />
                   the capability to instantly notify the company of a cyber event and managing tools to <br />
                   protect against cyber-attacks like deep scanning or phishing.</p>
               </div>
             </div>
           </div>
           <div className="justify-table-first2">
             <div className="first-row1">
               <div className="row-photo1">  
                 <img src={imagetelecom} alt />
               </div>
               <div className="row-des1">
                 <h3 className="row-head1">Telecom</h3>
                 <p className="row-para1">Developing tailor-made mobile carrier application to streamline the <br />
                   deployment of new features. Designing apps with user experience and usability in mind to <br />
                   deliver the best possible B2C experience.
                 </p>
               </div>
             </div>
             <div className="first-row1">
               <div className="row-photo1">  
                 <img src={imagehealth} alt />
               </div>
               <div className="row-des1">
                 <h3 className="row-head1">Biotech &amp; healthcare</h3>
                 <p className="row-para1"> Taking advantage of mobile device cameras to develop a secure scanning app <br />
                   for documents related to pharmaceutical clinical trials. Developing software dedicated to <br />
                   drug discovery processes.</p>
               </div>
             </div>
           </div>
           <div className="justify-table-first3">
             <div className="first-row">
               <div className="row-photo">  
                 <img src={imagefinanc} alt />
               </div>
               <div className="row-des">
                 <h3 className="row-head">Financial Services</h3>
                 <p className="row-para"> Integrating open API solutions that are cost-effective and enable greater <br />
                   functionality of the banking solutions. banks product capabilities to create fully functional <br />
                   mobile apps based on pre-built SDKs to reduce time to market time.</p>
               </div>
             </div>
             <div className="first-row">
               <div className="row-photo">  
                 <img src={imagetravel} alt />
               </div>
               <div className="row-des">
                 <h3 className="row-head">Travel and leisure</h3>
                 <p className="row-para">Implementing external services and platforms, including in-app payments, to enhance <br />
                   the mobile app user experience. Conducting a digital transformation of existing solutions <br />
                   to utilize up-to-date mobile technologies.</p>
               </div>
             </div>
           </div>
         </div>
   
   
         <div className="Slider">
           <h1 style={{ marginLeft: 250 }}>Who we've helped</h1>
           <div className="logos">
             <div className="logos-slide">
               <img src={image1} alt="Logo 1" />
               <img src={image2} alt="Logo 2" />
               <img src={image3} alt="Logo 3" />
               <img src={image4} alt="Logo 4" />
               <img src={image5} alt="Logo 5" />
               <img src={image6} alt="Logo 6" />
             </div>
             <div className="logos-slide">
               <img src={image1} alt="Logo 1" />
               <img src={image2} alt="Logo 2" />
               <img src={image3} alt="Logo 3" />
               <img src={image4} alt="Logo 4" />
               <img src={image5} alt="Logo 5" />
               <img src={image6} alt="Logo 6" />
             </div>
           </div>
         </div>
   
   
         <div className="case">
           <div className="th5head">
               <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>
                     Case studies
               </h1>
           </div>
           <div>
               <button className="class-studies">More case studies</button>
           </div>
         </div>
         <div className="first-case">
           <div>
             <img className="first-case-photo" src={image7} alt />
           </div>
           <div>
             <h1 className="first-case-head">Delivering innovative <br />
               cybersecurity mobile app <br />
               for an InsurTech leader</h1>
             <p className="first-case-para">The Software Mind team helped develop a cyber incident <br />
               response app with advanced cybersecurity tools that protected <br />
               users from threats and complied with a highly regulated market, along <br />
               with a white label solution capable of generating branded apps.</p>
           </div>
           <button className="first-case-button">learn more</button>
         </div>
         
   
   
   
         
       </div> 
       <div className="th5head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>Why develop your mobile app <br />
           with Software Mind?
         </h1>
       </div>
       <div className="first-table-part1">
         <div className="justify-table-first">
           <div className="first-row">
             <div className="row-photo22">  
               <div className="points">
                 <div className="point-center">
                 </div>
               </div>
             </div>
             <div className="row-des">
               <h3 className="row-head">Support from the design phase to the <br />final product</h3>
               <p className="row-para"> By taking ownership of a project, using an agile mindset and participating <br />
                 in every critical stage of mobile development, we deliver next-level mobile apps and <br />
                 industry-changing solutions.</p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo22">  
               <div className="points">
                 <div className="point-center">
                 </div>
               </div>
             </div>
             <div className="row-des">
               <h3 className="row-head">Customized mobile app development</h3>
               <p className="row-para"> Every challenge or issue is dealt with by us separately. With our ability to <br />
                 create customized solutions that meet both budget and functionality, we are able to address <br />
                 changing technological landscapes.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first2">
           <div className="first-row1">
             <div className="row-photo221">  
               <div className="points">
                 <div className="point-center">
                 </div>
               </div>
             </div>
             <div className="row-des1 mt-5">
               <h3 className="row-head1">Skilled and experienced specialists</h3>
               <p className="row-para1">Our specialized developers have the experience to handle tasks efficiently and <br />
                 autonomously, saving clients’ time and costs associated with recruiting, onboarding <br />
                 and training individual team members.</p>
             </div>
           </div>
           <div className="first-row1">
             <div className="row-photo221">  
               <div className="points">
                 <div className="point-center">
                 </div>
               </div>
             </div>
             <div className="row-des1">
               <h3 className="row-head1">Culture fit and effective communication</h3>
               <p className="row-para1"> Thanks to transparent communication, cross-functional experience and the right <br />
                 culture fit, Software Mind’s teams smoothly blend into organizations and enhance delivery.</p>
             </div>
           </div>
         </div>
       </div>
       <div className="th6head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>
         <strong>Mobile app development trends we can implement</strong>
         </h1>
       </div>
       <div className="end-table-part1">
         <div className="justify-table-first">
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagepayment} />
             </div>
             <div className="row-des">
               <h3 className="row-head"> Payment gateways</h3>
               <p className="row-para"> Provide diverse payment platforms and enable business monetization <br />
                 strategies with payment gateways like PayPal, Stripe, Apple Pay and Google Pay.</p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo">  
               <img src={imageintegration} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">
                 Internet of Things (IoT) integration</h3>
               <p className="row-para"> Enable users to remotely manage and monitor IoT devices like thermostats,<br />
                 smart home appliances, wearables and industrial equipment.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first2">
           <div className="first-row1">
             <div className="row-photo1">  
               <img src={imagepush} alt />
             </div>
             <div className="row-des1">
               <h3 className="row-head1">Push notifications</h3>
               <p className="row-para1">Engage users, increase their retention and drive their actions <br />
                 within an app by keeping them up to date 24/7.
               </p>
             </div>
           </div>
           <div className="first-row1">
             <div className="row-photo1">  
               <img src={imagesign} alt />
             </div>
             <div className="row-des1">
               <h3 className="row-head1">
                 Single Sign-On (SSO)</h3>
               <p className="row-para1">Simplify user authentication and access management by allowing <br />
                 users to log in once and gain access to multiple services or applications – <br />
                 without the need to re-enter their credentials.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first3">
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagereality} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">
                 Mixed reality experiences</h3>
               <p className="row-para"> Offer immersive experiences that blend the physical and digital <br />
                 worlds with applications that overlay digital information, 3D objects and interactive <br />
                 elements onto the user's real-world view.
               </p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo">  
               <img src={imageplat} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">
                 Analytics platforms</h3>
               <p className="row-para">Aid businesses by refining their marketing strategies, allowing them to target <br />
                 specific user segments and measure the effectiveness of their campaigns.</p>
             </div>
           </div>
         </div>
         <div className="justify-table-first4">
           <div className="first-row">
             <div className="row-photo">  
               <img src={imageenterinte} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">
                 Enterprise integration</h3>
               <p className="row-para"> Allow employees to access critical enterprise data, such as <br />
                 customer information, inventory, or financial data, from their mobile devices,<br />
                 regardless of location.</p>
             </div>
           </div>
           <div className="first-row">
             <div className="row-photo">  
               <img src={imagewebser} alt />
             </div>
             <div className="row-des">
               <h3 className="row-head">
                 APIs and web services</h3>
               <p className="row-para">
                 APIs and web services Promote code reusability, scalability and flexibility, <br />
                 so it’s easier to adapt and expand mobile applications.</p>
             </div>
           </div>
         </div>
       </div>
       <div className="th6head">
         <h1 style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>
         <strong>Technology Stack</strong>
         </h1>
       </div>
       <div className="buttons">
         <button className="techno-stack"> iOS Apps</button>
         <button className="techno-stack">Android Apps</button>
         <button className="techno-stack">Cross-platform Apps</button>
       </div>
     </div></div>
     
   
   
           <div className='main-gen mb-5'>
             <div style={{display:'flex'}}>
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_text'>
                   Generative AI development services
                 </div>
               
                 <div className='texttt'>
                   Use generative AI models to stay ahead of your competition.
                 </div>
               </div>
     
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_text'>
                   Cloud consulting & services
                 </div>
               
                 <div className='texttt'>
                   Use generative AI models to stay ahead of your competition.
                 </div>
               </div>
     
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_text'>
                 Data science services
                 </div>
               
                 <div className='texttt'>
                 Operationalize data to drive efficiency, insights and decision-making. 
                 </div>
               </div>
             </div>
     
             
     
     
             <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Engineering and consultancy that deliver value</h2>
     
     
     
             <div style={{display:'flex'}}>
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_textt'>
                 Financial services
                 </div>
               
                 <div className='texttt'>
                 Engineer customized solutions that increase personalization and user conversion across channels. 
                 </div>
               </div>
     
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_text'>
                 Telecom
                 </div>
               
                 <div className='texttt'>
                 Work with experienced engineering teams to create evolutive solutions for your customers. 
                 </div>
               </div>
     
               <div className='gen'> 
                 <img src={card1} alt="" height='300px' />
                 <div className='gen_text'>
                 Sports betting
                 </div>
               
                 <div className='texttt'>
                 Develop online betting software that prioritizes rewarding customer experience. 
                 </div>
               </div>
             </div>
           </div>
     
   
   
   
   
   
           <Footer/>
       </>
  )
}
