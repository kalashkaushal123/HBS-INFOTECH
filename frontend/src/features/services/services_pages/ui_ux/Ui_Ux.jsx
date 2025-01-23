import "./ui.css"
import Leipzig_Chargers from "../ui_ux/img/Leipzig_Chargers.mp4";
import { useEffect, useState } from "react";
export default function Ui_Ux() {

  useEffect(() => {
    // carousel();
   
  }, []);
  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);    
  }

  const [scroll, setscroll] = useState(false);

  function display() {
    let desc=document.getElementById("desc")
    if (scroll==false) {
      desc.style.display='block';
      setscroll(true)
    }
    
    else if (scroll==true){
      desc.style.display='none';
      setscroll(false)
    }
       
        console.log(desc,'------------');
  }

  const [state, setstate] = useState([
    {id:1,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Web-developers-orange.svg",
      title:'User-centered design',
      arrow:'Empathy and understanding are at the core of creating effective solutions. By actively listening to users’ needs, generating innovative ideas, crafting prototypes and testing our solutions, we build products that make a difference.'
    },
    {id:2,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Generative_AI_Development_Services_orange1.svg",
      title:'Usability testing',
      arrow:'By leveraging insights, our UX and UI design teams refine designs and transform the user experience into something extraordinary.'
    },
    {id:3,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_Maximized-efficiency-orange.svg",
      title:'User research',
      arrow:'By gaining insights into user behaviors, motivations, and pain points, you can validate design assumptions and make informed decisions that lead to innovative solutions and exceptional user experiences.'
    },
    {id:4,
      svg:"/src/features/services/services_pages/ui_ux/img/icon_UX-UI-designers-orange.svg",
      title:'Interaction design',
      arrow:'Unleash your creativity and design user interactions that are both intuitive and captivating. Create navigation systems, buttons and forms that will leave a lasting impression on your users.'
    },
    {id:5,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-automation-testing-services-manual-testing-orange.svg",
      title:'Information architecture (IA)',
      arrow:'Unlock the power of intuitive and user-friendly organization, as you structure your content, features and functionalities to boost accessibility and make it easy for users to find the content they’re looking for.'
    },
    {id:6,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-data-science-forecast-business-and-development-risks-orange.svg",
      title:'Agile and Lean UX methodologies',
      arrow:'By prioritizing collaboration, flexibility and quick feedback loops, we ensure that UX design evolves in perfect harmony with development efforts, creating a seamless and inspiring user experience.'
    },
    {id:7,
      svg:"/src/features/services/services_pages/ui_ux/img/icon-ux-ui-design-orange.svg",
      title:'Wireframing and prototyping',
      arrow:'Testing designs early, gathering user feedback and validating usability and functionality are key to creating exceptional products.'
    },
    {id:8,
      svg:"/src/features/services/services_pages/ui_ux/img/icons-_Cloud-Consulting-Services-orange.svg",
      title:'Accessibility design',
      arrow:"At Software Mind, we believe that everyone deserves to feel empowered and included. That's why we offer accessibility audits, assistive technology testing and user testing with people with disabilities. Our goal is to promote compliance and inclusivity that makes products and services accessible to everyone."
    }]);
  return (
    <>
<div  style={{backgroundColor:"rgb(248, 248, 248)"}}>
    
 <div className="fluid" style={{backgroundColor:"white"}}>
      <div className="backgroundimg w-100" >
        <div className="trnbox" style={{width:"100%",height:"600px"}}>
        <center className="m-auto mt-5 ">
          <img width={'100px'} className="rcicel" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Ficon-white-ux-ui-design-services.svg&w=1920&q=75" alt="" />

          <div className="firNyj"> <h1 className="fRjBVq sm-header2">UX & UI Design Services</h1></div>


          <div className="dwCooV cCEOnh sm-body20 m-auto">
              Turn user expectations and your business goals into intuitive, memorable designs by working with user experience (UX) and user interface (UI) experts who put passion into products.&nbsp;
          </div>
        
        <br /><br /><br />
        <button className="btn btn-dark rounded-5">Contact Us</button>

        </center>


  

        
        {/* <div className="backgroundimg" style={{width:"100%",height:"600px"}}></div> */}
        </div>

        
      </div>

        <div className="container-fluid m-5 p-5">
          <div align="" className="row">
            <div className="col-md-4  ">
              <h1 className="m-auto">Enhance your product with a top UI & UX design team</h1>
            </div>
            <div className="col-md-8 pe-5">
                  <h5>We’re a team of UI & UX design experts with a track record of delivering exceptional experiences to our clients. Through continuous improvement and development, we’ve refined our design process so that we can quickly understand your business, learn your goals and wow your clients.</h5>
            </div>
          </div>
        </div>
      </div>


     

      <div align='justify' className="d-flex" style={{marginLeft:"11rem",backgroundColor:"rgb(248, 248, 248)"}}>
              <div className=" ">
                    <div className="kuKEcI">
                        <div className="cplcEN">
                            <img  width={'70px'} loading="lazy" decoding="async" data-nimg="1" className="sc-29fb4b30-2 hWXZBl" style={{color:'transparent'}}  
                            src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Dedicated-Development-Teams-orange.svg&w=1920&q=75" />

                            <h3 className="sc-c25bae65-0 bjbLu sc-29fb4b30-0 dBoilV sm-header1">88%</h3>
                            <p className="sc-ca4a3661-9 kyBtyV sm-body17">of internet users are less likely to return to a website after poor user experience.</p>

                        </div>
                        <p className="sc-29fb4b30-3 QIRgt">Source: “The Trillion Dollar UX Problem” Report 2020</p>
                    </div>
              </div>

              <div className="" style={{position:'relative',left:"0.5rem"}}>
                  <video autoPlay={true} muted  className="sc-29fb4b30-7 jmYzgU w-75">
                      <source src={Leipzig_Chargers} type="video/mp4" />
                  </video>
              </div>
      
      </div>

    


    
     <section style={{backgroundColor:"white"}}>
      <br/><br/>
      <div align='center' >
        <div align="" className="OurUIandUXservices " >
          <div className="OurUIandUXservices2">
              <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
              <span className="sc-9e3861ef-2 OfxfR">
              Our UI and UX services
              </span>
              </h2>
          </div>
          <br />
        </div>
        <br /><br />

        <div className="sc-2518156b-1 dqJbue w-75">
        
            <div className="sc-2518156b-3 iJXJrQ p-1" >
              <div className="sc-2518156b-4 lcsmOI" >
                <img alt="" loading="lazy"  className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-1-our-UI-and-UX-services-1-768x399.webp&w=1920&q=75" />
                <div className="sc-2518156b-2 gpVdNd ">
                  <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5 ">Data visualization</h3>
                  <p className="sc-ca4a3661-6 greJTC sm-body15">Present complex data in a visually compelling and understandable format. Work with a design team that transforms raw data into visual representations, such as charts, graphs, infographics and interactive dashboards.</p>
                </div>
              </div>
            </div>



            <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
              <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-2-UI-UX-consulting-768x388.png&w=1920&q=75" />
              <div className="sc-2518156b-2 gpVdNd"><h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">
                UI &amp; UX consulting</h3><p className="sc-ca4a3661-6 greJTC sm-body15">
                  Design and build positive user experiences that are innovative, functional and intuitive. We build interfaces that users truly enjoy using.&nbsp;</p>
              </div></div>
            </div>

            <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
              <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-3-Web-app-design-768x388.png&w=1920&q=75" />
              <div className="sc-2518156b-2 gpVdNd">
                <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Web app design</h3>
                <p className="sc-ca4a3661-6 greJTC sm-body15">
                  Create a remarkable first impression and convert visitors into customers. We craft designs that engage users by putting their needs at the center of our efforts. From ideation to execution, our design process ensures every product meets expectations and makes an impression on the target audience.</p>
              </div></div>
              </div>

                  <div className="sc-2518156b-3 iJXJrQ">
                      <div className="sc-2518156b-4 lcsmOI">

                    <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-4-Mobile-app-design-768x401.png&w=1920&q=75" />
                    <div className="sc-2518156b-2 gpVdNd"><h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5" >Mobile app design</h3><p className="sc-ca4a3661-6 greJTC sm-body15">Implement a native app design process that brings joy to users, developers and project managers alike.  Our process results in mobile solutions that deliver a fantastic user experience and easy-to-use interfaces, so your products can attract more new customers and boost engagement from existing users.
                    </p></div></div>
                  </div>

                <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
                  <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-5-Cross-platform-experience-768x388.png&w=1920&q=75" />
                  <div className="sc-2518156b-2 gpVdNd"><h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">

                    Cross-platform experience </h3>
                    <p className="sc-ca4a3661-6 greJTC sm-body15">Develop solutions that reach your target audience wherever they are. We design an experience that users can understand and smoothly interact with on any device: smartphones, laptops, tablets and smart TVs.</p>
                  </div>
                  </div>
                </div>


                <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
                  <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-6-Discovery-workshops-768x388.png&w=1920&q=75" />
                  <div className="sc-2518156b-2 gpVdNd">
                    <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Discovery workshops</h3>
                    <p className="sc-ca4a3661-6 greJTC sm-body15">Identify the key elements you need for successful product development and business growth through customized discovery workshops. Our experts can assist you in defining your product’s vision, business needs, user personas, requirements, and project scope to build a solid foundation for your solution’s success.&nbsp;</p>
                  </div></div>
                </div>


                  <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
                    <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-7-Design-sprint-768x398.webp&w=1920&q=75" />

                    <div className="sc-2518156b-2 gpVdNd"><h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Design sprint</h3>
                      <p className="sc-ca4a3661-6 greJTC sm-body15">Reduce the standard number of steps of new product development to get maximum value in a short period and shorten time to market. Instead of waiting to launch a minimal product to verify an idea, you get precise data from a realistic prototype.&nbsp;
                      </p></div></div>
                  </div>
                  
                  <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
                        <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-8-Customer-experience-CX-design--768x388.png&w=1920&q=75" />
                        <div className="sc-2518156b-2 gpVdNd">
                          <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Customer experience (CX) design </h3>
                          <p className="sc-ca4a3661-6 greJTC sm-body15">Build a strong connection between your customers and brand. We make sure your user base feels involved, empowered and valued.&nbsp;
                          </p></div></div>
                  </div>
                
                <div className="sc-2518156b-3 iJXJrQ"><div className="sc-2518156b-4 lcsmOI">
                  <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-9-Design-system-UI-kit-768x388.png&w=1920&q=75" />
                  <div className="sc-2518156b-2 gpVdNd">
                    <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Design system &amp; UI kit</h3>
                    <p className="sc-ca4a3661-6 greJTC sm-body15">
                      Standardize design across your entire organization through design systems that help you design faster, iterate at scale, and produce consistently better assets and interfaces. We create scalable design systems that save you time and money.&nbsp;</p>
                  </div></div>
                </div>


                  <div className="sc-2518156b-3 iJXJrQ">
                    <div className="sc-2518156b-4 lcsmOI">
                      <img alt="" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="sc-2518156b-0 bNepPj" style={{ color: 'transparent' }} sizes="100vw" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fservice-10-Design-audit-768x388.png&w=1920&q=75" />
                      <div className="sc-2518156b-2 gpVdNd">
                        <h3 className="sc-c25bae65-0 bjbLu sc-2518156b-5 efAofw sm-header5">Design audit</h3>
                        <p className="sc-ca4a3661-6 greJTC sm-body15">
                          Get actionable insights about users’ interaction with a product and identify potential improvements. Better UX boosts business KPIs, improves customer satisfaction and increases conversion.&nbsp;</p>
                      </div></div>
                  </div>
          
          </div>
      
      
      </div>
      </section>
      
  


    <section style={{width:"90%",backgroundColor:"rgb(248, 248, 248)"}} className="m-5 ">
    
    <h1 className="">Who we’ve helped</h1>

      <div className="container">
        <marquee behavior="" direction="">
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-GemOne.svg&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-TravelCounsellors.svg&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-yourgolftravel.webp&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-Snow.webp&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-Beteast.svg&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-CoreLogic-1.svg&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-t-mobile.webp&w=1920&q=75" alt="" />
          <img style={{paddingLeft:"8rem"}} src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F12%2Flogo-v2-Procountor-old-finago.svg&w=1920&q=75" alt="" />
        </marquee>
      </div>


    <div>
<hr />
      <div className="row mt-5 " style={{backgroundColor:'white'}}>  
          
            <div align='' className="col-md-5 fs-1 fw-bolder p-5 text-end">
                Four steps to revamp your product's UI & UX        
            </div>
            
            <div align='justify' className="col-md-5 p-5 mt-5 text-start">
                At Software Mind, we follow these essential steps in our design and development process 
                that enable us to offer quality services and ensure our clients receive outstanding solutions.
            </div>
      


            <div align='center' style={{backgroundColor:'white'}}>
              <video autoPlay={true} muted  className="w-50" style={{backgroundColor:'white'}}>
                  <source src={'src/features/services/services_pages/ui_ux/img/leipzig_chargers_macbook_2.mp4'} type="video/mp4" />
              </video>
            </div>


      </div>
    </div>




    {/* ------------------------------------------------------- */}

          <div className="m-5 sc-56b001b4-2 fLYjNO swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
              <ol className="sc-56b001b4-7 kevfpP swiper-wrapper">

                <li className="me-3 sc-56b001b4-6 eKNbte swiper-slide swiper-slide-active" style={{marginRignt: '24px'}}>
                  <div className="sc-56b001b4-3 dGeYTz"><div className="sc-56b001b4-5 fGxxwJ">1</div><div className="sc-56b001b4-4 fguNjW">Step</div>
                  </div><h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Understand</h3>
                  <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Collaborate with stakeholders to establish a shared vision of the problem, define business goals and identify areas of concern in your product.&nbsp;</p>
                </li>


                <li className="me-3 sc-56b001b4-6 eKNbte swiper-slide swiper-slide-next" style={{marginRignt: '24px'}}>
                    <div className="sc-56b001b4-3 dGeYTz"><div className="sc-56b001b4-5 fGxxwJ">2</div><div className="sc-56b001b4-4 fguNjW">Step</div>
                    </div><h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Design</h3>
                    <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Define how to reach your goals, prioritize features and create a product prototype, while verifying technical feasibility with the development team.&nbsp;</p>
                </li>


                    <li className="me-3 sc-56b001b4-6 eKNbte swiper-slide" style={{marginRignt: '24px'}}>
                    <div className="sc-56b001b4-3 dGeYTz"><div className="sc-56b001b4-5 fGxxwJ">3</div>
                    <div className="sc-56b001b4-4 fguNjW">Step</div>
                    </div>
                    <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Test</h3>
                    <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Test your product prototype with your target users to uncover their needs, behaviors and potential obstacles during the development phase.&nbsp;</p>
                    </li>


                <li className="sc-56b001b4-6 eKNbte swiper-slide" style={{marginRignt: '24px'}}>
                    <div className="sc-56b001b4-3 dGeYTz"><div className="sc-56b001b4-5 fGxxwJ">4</div>
                    <div className="sc-56b001b4-4 fguNjW">Step</div>
                    </div>
                    <h3 className="sc-c25bae65-0 htUqiQ sc-56b001b4-1 fXIVlP sm-header5">Iterate</h3>
                      <p className="sc-ca4a3661-6 sc-56b001b4-0 greJTC cFinKL sm-body15">Utilize insights gathered through user testing to enhance usability and create a top-tier experience that your users will genuinely enjoy.&nbsp;</p>
                </li>

                    </ol>
                </div>

    </section>







        <section className="sc-2513f5e2-0 kYudVh"  style={{backgroundImage:'url("/src/features/services/services_pages/ui_ux/img/dribbble_baner.webp")'}}>
          <div className="sc-953bb80d-0 ePPvGo">
            <div className="sc-2513f5e2-4 jrQBPI">
              <h2 className="sc-c25bae65-0 bjbLu sc-2513f5e2-3 dtKckU sm-header3">
                Check out our Dribbble
              </h2>
              <div className="sc-2513f5e2-2 gdJEUE">
                <a
                
                  className="sc-8be7c32f-0 sc-8be7c32f-3 fBnrFY fggBNG"
                  href="#"
                >
                  Go to Dribbble
                </a>
              </div>
            </div>
          </div>
          
        </section>



      


<section style={{backgroundColor:"rgb(248, 248, 248)"}} className="sc-9e3861ef-1 gRDIGO"> 
<div className="sc-953bb80d-0 ePPvGo">
  <div    style={{marginLeft: 0,marginRight: 0,display: "flex",flexGrow: 0,flexShrink: 0,
      alignItems: "normal",justifyContent: "flex-start",flexDirection: "row",flexWrap: "wrap"}}
    className="sc-9e3861ef-4 cgNtKC"  >
    <div      style={{boxSizing: "border-box",minHeight: 1,position: "relative",paddingLeft: 0, paddingRight: 0, width: "58.333333333333336%",        flexBasis: "58.333333333333336%",        flexGrow: 0,
        flexShrink: 0,              marginLeft: "0%",        right: "auto",        left: "auto"
      }}
    >
      <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
        <span className="sc-9e3861ef-2 OfxfR">
          Our user experience design services are a perfect match if you want
          to…
        </span>
      </h2>
    </div>
  </div>
</div>

</section>

    

</div>



<section>

  <div  className="m-auto" style={{width:"70%"}}>

      <div class="row overflow-scroll">
     <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="d-flex scrollanimi scrollspy-example" tabindex="0">
          <div className="col-md-12 ">
            <h4 id="simple-list-item-1"><div className="d-flex" >
              <img src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Generative-AI-Development-Services2-768x430.webp" style={{width:'50%'}} alt="" />
                  <div className="ms-5 m-auto p-5">
                    <h3 class="sc-c25bae65-0 bjbLu sc-2b306d62-4 cnHKze sm-header4">Upgrade your user experience</h3>
                    <p class="sc-ca4a3661-10 dwCooV sm-body20">Improve your product’s user experience with a team of skilled and experienced UX &amp; UI designers.</p>
                  </div>
            </div></h4>
          
          </div>

          <div className="col-md-12 ">
            <h4 id="simple-list-item-2"><div className="d-flex" >
                <img src="/src/features/services/services_pages/ui_ux/img/slider_image_6.webp" style={{width:'50%'}} alt="" />
                <div className="ms-5 m-auto">
                  <h3 class="sc-c25bae65-0 bjbLu sc-2b306d62-4 cnHKze sm-header4">Upgrade your user experience</h3>
                  <p class="sc-ca4a3661-10 dwCooV sm-body20">Improve your product’s user experience with a team of skilled and experienced UX &amp; UI designers.</p>
                </div>
            </div>
            </h4>
          
          </div>
          <div className="col-md-12 ">
            <h4 id="simple-list-item-3"><div className="d-flex">
                <img src="/src/features/services/services_pages/ui_ux/img/slider_image_3.webp" style={{width:'50%'}} alt="" />
                <div className="ms-5 m-auto">
                  <h3 class="sc-c25bae65-0 bjbLu sc-2b306d62-4 cnHKze sm-header4">Upgrade your user experience</h3>
                  <p class="sc-ca4a3661-10 dwCooV sm-body20">Improve your product’s user experience with a team of skilled and experienced UX &amp; UI designers.</p>
                </div>
            </div></h4>
          
          </div>
          <div className="col-md-12 ">
            <h4 id="simple-list-item-4"><div className="d-flex">
                <img src="/src/features/services/services_pages/ui_ux/img/slider_image_2.webp" style={{width:'50%'}} alt="" />
                <div className="ms-5 m-auto">
                  <h3 class="sc-c25bae65-0 bjbLu sc-2b306d62-4 cnHKze sm-header4">Upgrade your user experience</h3>
                  <p class="sc-ca4a3661-10 dwCooV sm-body20">Improve your product’s user experience with a team of skilled and experienced UX &amp; UI designers.</p>
                </div>
            </div></h4>
          
          
          </div>
          <div className="col-md-12 ">
            <h4 id="simple-list-item-5"><div className="d-flex">
                <img src="/src/features/services/services_pages/ui_ux/img/slider_image_5.webp" style={{width:'50%'}} alt="" />
                <div className="ms-5 m-auto">
                  <h3 class="sc-c25bae65-0 bjbLu sc-2b306d62-4 cnHKze sm-header4">Upgrade your user experience</h3>
                  <p class="sc-ca4a3661-10 dwCooV sm-body20">Improve your product’s user experience with a team of skilled and experienced UX &amp; UI designers.</p>
                </div>
            </div></h4>
          </div>
        </div>
      

      
      </div>

      <div className="row">
      <div id="simple-list-example" class="d-flex  gap-2 simple-list-example-scrollspy text-center">
          <a class="p-1 rounded" href="#simple-list-item-1">
          <img src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Generative-AI-Development-Services2-768x430.webp" style={{width:'100%',height:"150px"}} alt="" />
          </a>
          <a class="p-1 rounded" href="#simple-list-item-2">
              <img className="border" src="/src/features/services/services_pages/ui_ux/img/slider_image_6.webp" style={{width:'100%',height:"150px"}} alt="" />
          </a>
          <a class="p-1 rounded" href="#simple-list-item-3">
              <img className="border"  src="/src/features/services/services_pages/ui_ux/img/slider_image_3.webp" style={{width:'100%',height:"150px"}} alt="" />
          </a>
          <a class="p-1 rounded" href="#simple-list-item-4">
              <img className="border"  src="/src/features/services/services_pages/ui_ux/img/slider_image_2.webp" style={{width:'100%',height:"150px"}} alt="" />
          </a>
          <a class="p-1 rounded" href="#simple-list-item-5"> 
          <img src="/src/features/services/services_pages/ui_ux/img/slider_image_5.webp" style={{width:'100%',height:"150px"}} alt="" />
          </a>
        </div>
      </div>


  </div>
</section>



<section align='center'  >
<div  className="container cgNtKC">
  <div > 
      <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
          UI and UX methodologies &amp; frameworks
          </span>
        </h2>
  </div>
</div>

 <div align='center' className="container w-75">
 
        <div align='center' className="row">
          {state.map((item,index)=>
        
              <div key={index}  className=" col-md-5 p-3 bg-white border border-success rounded-3 m-auto ms-3 me-3 mb-3 " style={{position:"relative",top:"0.4rem"}}>
                  <div className="hoverable d-flex">
                      <img style={{width:'15%'}} src={item.svg} alt="" />
                      <h5 className="m-auto">{item.title}</h5>    
                      <div className="pt-3"><svg className="text-danger " xmlns="http://www.w3.org/2000/svg" width="22" height="14" fill="none" viewBox="0 0 22 14" class="hvisiS"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"></path></svg></div>
                  </div>
                  <p  className="show-on-hover" >{item.arrow} </p>
              </div>

          )}      
          </div>
   
    </div>
  
</section>



<section className="sc-9e3861ef-1 gRDIGO">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC">
      <div> <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            UX &amp; UI design insights
          </span>
        </h2>
      </div>

      <div className="sc-884c5c01-2 dVelyY">
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              Get expert advice and best practices on designing user-friendly
              products, managing efficient design processes and creating
              rewarding experiences.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>



  <div className="sc-953bb80d-1 gtTrKM">
    <div className="sc-953bb80d-0 ePPvGo">
      <div className="swiper swiper-initialized swiper-horizontal sc-a33e4197-0 jASKrq swiper-backface-hidden">
        <div className="swiper-wrapper d-flex overflow-scroll" >
        
        <div className="d-flex" >
          <div className="col-md-3 "> <div className="" style={{marginRight: 20 }}>
            <a className="sc-4fc5d34f-5 khqIMH" href="https://softwaremind.com/blog/implementing-a-design-process-that-combines-new-solutions-with-proven-methods/">
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F05%2Fblog-hero-image-header-23-may-768x320.webp&w=1920&q=75"
                  style={{ color: "transparent" }} />
              </div>

              
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                <div class="sc-144bd507-0 bUMhHQ">                
                  <div class="sc-1865605d-3 bNZlex">
                  <img  class="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                  <div class="sc-1865605d-2 kSEuet">
                      <p class="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                      <p class="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                  </div>
                 </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Implementing a Design Process that Combines New Solutions with
                  Proven Methods
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                  </button>
                </div>
              </div>
            </a>
          </div></div>

          <div className="col-md-3"><div className="" style={{ marginRight: 20 }}>
            <a className="sc-4fc5d34f-5 diNtOS" href="https://softwaremind.com/blog/implementing-a-design-process-that-combines-new-solutions-with-proven-methods/">
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F11%2FGrafika-UX-and-UI-Guidelines-for-Building-a-Better-Sports-Betting-Experience1-768x320.webp&w=1920&q=75"
                  style={{ color: "transparent" }} />
              </div>

              
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                <div class="sc-144bd507-0 bUMhHQ">                
                  <div class="sc-1865605d-3 bNZlex">
                  <img  class="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                  <div class="sc-1865605d-2 kSEuet">
                      <p class="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                      <p class="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                  </div>
                 </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Implementing a Design Process that Combines New Solutions with
                  Proven Methods
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                  </button>
                </div>
              </div>
            </a>
          </div></div>

          <div className="col-md-3"><div className="" style={{ marginRight: 20 }}>
            <a className="sc-4fc5d34f-5 fHcyk" href="https://softwaremind.com/blog/implementing-a-design-process-that-combines-new-solutions-with-proven-methods/">
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-less-can-be-more-how-empty-states-create-engaging-user-experiences-and-drive-business-goals-768x320.webp&w=1920&q=75"
                  style={{ color: "transparent" }} />
              </div>

              
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                <div class="sc-144bd507-0 bUMhHQ">                
                  <div class="sc-1865605d-3 bNZlex">
                  <img  class="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                  <div class="sc-1865605d-2 kSEuet">
                      <p class="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                      <p class="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                  </div>
                 </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Implementing a Design Process that Combines New Solutions with
                  Proven Methods
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                  </button>
                </div>
              </div>
            </a>
          </div></div>


          <div className="col-md-3"> <div className="" style={{ marginRight: 20 }}>
            <a className="sc-4fc5d34f-5 khqIMH" href="https://softwaremind.com/blog/implementing-a-design-process-that-combines-new-solutions-with-proven-methods/">
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F08%2Fblog-hero-image-header-22-Aug-768x320.webp&w=1920&q=75"
                  style={{ color: "transparent" }} />
              </div>

              
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                <div class="sc-144bd507-0 bUMhHQ">                
                  <div class="sc-1865605d-3 bNZlex">
                  <img  class="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                  <div class="sc-1865605d-2 kSEuet">
                      <p class="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                      <p class="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                  </div>
                 </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Implementing a Design Process that Combines New Solutions with
                  Proven Methods
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          </div>

          <div className="col-md-3"><div className="" style={{ marginRight: 20 }}>
            <a className="sc-4fc5d34f-5 diNtOS" href="https://softwaremind.com/blog/implementing-a-design-process-that-combines-new-solutions-with-proven-methods/">
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img alt="Implementing a Design Process that Combines New Solutions with Proven Methods" className="sc-4fc5d34f-3 dIJiAh"
                  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-less-can-be-more-how-empty-states-create-engaging-user-experiences-and-drive-business-goals-768x320.webp&w=1920&q=75"
                  style={{ color: "transparent" }} />
              </div>

              
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                <div class="sc-144bd507-0 bUMhHQ">                
                  <div class="sc-1865605d-3 bNZlex">
                  <img  class="sc-1865605d-0 hZOqNx"  src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F07%2FAgata_Polny-1-150x150.webp&w=1920&q=75" />
                  <div class="sc-1865605d-2 kSEuet">
                      <p class="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">Agata Polny</p>
                      <p class="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">2024/07/11</p>
                      </div>
                  </div>
                 </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Implementing a Design Process that Combines New Solutions with
                  Proven Methods
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/></svg>
                  </button>
                </div>
              </div>
            </a>
          </div></div>



        </div>
         

          


          


         
         
        
         
        </div>

        
       
    
      </div>
    </div>
  </div>
</section>





<section className="sc-63cd0f-2 hkitw">
  <div className="sc-63cd0f-1 bTIAYg">
    <div className="sc-63cd0f-3 bfNsic">
      <div className="sc-63cd0f-6 eQKwsQ">
        <h2 className="sc-c25bae65-0 bjbLu sc-63cd0f-5 hJuCsQ sm-header3">
          Design engaging products that set your brand apart
        </h2>
        <div className="sc-63cd0f-4 kiMTlc">
          <div className="sc-8be7c32f-5 gguYMo">
            <a
              className="sc-8be7c32f-0 sc-8be7c32f-1 fBnrFY knIAgO"
              href="https://softwaremind.com/contact/"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="sc-63cd0f-0 fHyvHq">
      <div className="sc-9e617051-1 dyBVuC">
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">1500</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">+ experts </p>
        </div>
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">25</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">
            + years of innovation{" "}
          </p>
        </div>
        <div className="sc-9e617051-0 eYoFsx">
          <p className="sc-9e617051-2 iKTZrz sm-header3">250</p>
          <p className="sc-9e617051-2 iKTZrz sm-header4">
            + clients who trust us
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




<section>

        <div  className="container justify ms-5">
        <div  className=" sc-7927336c-2 mt-5">
          <div className="row">
                <div className="col-md-4 mb-4 "><div style={{ boxSizing: "border-box", minHeight: 1, position: "relative", paddingLeft: 0, paddingRight: 0, flexGrow: 0, flexShrink: 0,  marginLeft: "0%", }}
                  className="sc-7927336c-1 ftbyDi"          >
                  <div className="sc-27806405-6 jGEIQa">
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz" style={{   position: "absolute",   height: "100%",   width: "100%",   left: 0,   top: 0,   right: 0,   bottom: 0,   objectFit: "cover",   color: "transparent" }} sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Generative-AI-Development-Services2-768x430.webp"
                    />
                    <a
                      className="sc-43d1ba49-0 kobdgU"
                      href="https://softwaremind.com/services/generative-ai-development-services/" >
                      <div className="sc-27806405-3 ZEDbb">
                        <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                          
                          src="/src/features/services/services_pages/ui_ux/img/icon_Generative_AI_Development_Services_orange1.svg" />
                        <div className="sc-27806405-0 cDaeWI">
                          <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                            Generative AI development services
                          </p>
                          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none" viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                              <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"/>
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="sc-27806405-8 hEhKDF">
                      <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                          Operationalize data to drive efficiency, insights and decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                </div>

                <div className="col-md-4 mb-4 ">
                <div
                style={{ boxSizing: "border-box", minHeight: 1, position: "relative", paddingLeft: 0, paddingRight: 0, flexGrow: 0, flexShrink: 0, marginLeft: "0%", right: "auto", left: "auto"
                }}
                className="sc-7927336c-1 ftbyDi"          >
                <div className="sc-27806405-6 jGEIQa">
                  <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz" style={{   position: "absolute",   height: "100%",   width: "100%",   left: 0,   top: 0,   right: 0,   bottom: 0,   objectFit: "cover",   color: "transparent"
                    }}
                    sizes="100vw"
                    
                    src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-cloud-consulting-services-768x410.webp"
                  />
                  <a className="sc-43d1ba49-0 kobdgU"              >
                    <div className="sc-27806405-3 ZEDbb">
                      <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                        
                        src="/src/features/services/services_pages/ui_ux/img/icons-_Cloud-Consulting-Services-orange.svg" />
                      <div className="sc-27806405-0 cDaeWI">
                        <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                          Cloud consulting &amp;services
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none" viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="sc-27806405-8 hEhKDF">
                    <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                      Accelerate your cloud migration strategy and develop cloud-native
                      apps.
                    </p>
                  </div>
                </div>
              </div>
                </div>


                <div className="col-md-4 mb-4">
                <div style={{ marginBottom:"1rem", boxSizing: "border-box", minHeight: 1, position: "relative", paddingLeft: 0, paddingRight: 0,  flexGrow: 0, flexShrink: 0, marginLeft: "0%", right: "auto", left: "auto"}}
                className="sc-7927336c-1 ftbyDi"          >
                <div className="sc-27806405-6 jGEIQa">
                  <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="sc-27806405-5 gnDFbz" style={{   position: "absolute",   height: "100%",   width: "100%",   left: 0,   top: 0,   right: 0,   bottom: 0,   objectFit: "cover",   color: "transparent" }} sizes="100vw" src="/src/features/services/services_pages/ui_ux/img/main-pages-featured-image-Automation-Testing-Services-768x410.webp"              />
                  <a
                    className="sc-43d1ba49-0 kobdgU"
                    href="https://softwaremind.com/services/automation-testing-services/"
                  >
                    <div className="sc-27806405-3 ZEDbb">
                      <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-27806405-4 jzkMcX" style={{ color: "transparent" }} sizes="100vw"
                        src="/src/features/services/services_pages/ui_ux/img/icon-automation-testing-services-orange (1).svg"                  />
                      <div className="sc-27806405-0 cDaeWI">
                        <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                          Automation testing
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} fill="none" viewBox="0 0 22 14" className="sc-27806405-1 gKVDRY">
                          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="sc-27806405-8 hEhKDF">
                    <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                      Build tailored testing platforms and boost test coverage for critical
                      app areas.
                    </p>
                  </div>
                </div>
              </div>
                </div>
          </div>


          
          
        </div>

        </div>

</section>

    </>
  )
}
