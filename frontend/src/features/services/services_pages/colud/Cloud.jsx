
import './cloud.css'
import Header from "/src/comman/Header.jsx";
import Footer from "/src/comman/Footer.jsx";
import Slider from "../ui_ux/Slider";
import styles from "../ui_ux/Slider.module.css"; // Import CSS module
import { useEffect, useState } from 'react';
import ReviewSlider from './ReviewSlider';

export default function Cloud() {
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
  
    
  
      const [data, setdata] = useState([
        {
          id:1,
          title:"What is cloud consulting?",
          desc:`Cloud consulting is a specialized service that helps businesses utilize cloud computing technology to achieve their goals. Cloud consultants provide expert guidance and support throughout the cloud adoption process, from assessment and planning to implementation or migration to ongoing maintenance. They analyze a company's unique needs and recommend suitable cloud solutions, such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS). Cloud consultants help migrate data to the cloud, optimize cloud environments, and ensure data security. Cloud consultancy enables businesses to maximize the benefits of cloud computing, provide valuable insights and drive business growth.`,
        },{
          id:2,
          title:"How to develop a cloud migration strategy and start a cloud journey?",
          desc:`We use human-centered design principles. Our mission is to empower users to achieve their goals easily. We believe in the power of "white patterns" of interaction design, which build trust, foster emotional connections and drive ROI for stakeholders.`,
        },
        {
          id:3,
          title:"What is a realistic cost and timeline for a cloud migration?",
          desc:`The cost of a cloud migration can range from a few thousand dollars for a small organization with a limited number of workloads to several hundred thousand dollars for a larger organization that requires a more complex migration. The timeline for a cloud migration also depends on an organization's size. A cloud migration can take as little as three months for small organizations with limited workloads and a straightforward migration plan.
However, for larger organizations with a more complex migration plan, the timeline for a cloud migration could be up to four years. To estimate the cost and timeline for a cloud migration, organizations should assess their current IT environment and identify which workloads and services can be moved to the cloud.`,
        },{
          id:4,
          title:"Why do you need a landing zone?",
          desc:`When it comes to using the public cloud, a landing zone is like a well-built foundation for your own house – you need a solid base to continue to build on, and in the case of the cloud, this can mean building solutions, applications or even entire development environments.

A landing zone is a pre-configured and secure environment that helps you deploy and manage your cloud services in a consistent and efficient way. The benefits of having a landing zone in a public cloud include security and compliance, consistency and standardization, better governance, scalability and flexibility.`,
        },
        {
          id:5,
          title:"Why is it worth implementing the cloud native standard?",
          desc:"The cloud native standard is highly recommended for solutions that are crucial for your business and need to independently release and scale services within an app, use different technologies (depending on a service) and have a highly standardized model for app delivery and management. Implementing a cloud native approach across an organization requires preparing an environment, training teams, designing, deploying and maintaining solutions. Depending on your situation, you can move only some systems (usually legacy) to intermediary models, like cloud tolerant, cloud ready and cloud optimized.",
        }
      ]);

// slider start
      const images = [
        "/src/features/services/services_pages/ui_ux/img/slider_image_6.webp",
        "/src/features/services/services_pages/ui_ux/img/slider_image_5.webp",
        "/src/features/services/services_pages/ui_ux/img/slider_image_3.webp",
        "/src/features/services/services_pages/ui_ux/img/slider_image_2.webp",
        "/src/features/services/services_pages/ui_ux/img/slider_image_1.webp",
        "/src/features/services/services_pages/ui_ux/img/slider_image_4.webp",
      ];

       const [currentIndex, setCurrentIndex] = useState(0);
        let autoSlideInterval;
      
        const showSlide = (index) => {
          if (index >= images.length) {
            setCurrentIndex(0);
          } else if (index < 0) {
            setCurrentIndex(images.length - 1);
          } else {
            setCurrentIndex(index);
          }
        };
      
        const nextSlide = () => showSlide(currentIndex + 1);
        const prevSlide = () => showSlide(currentIndex - 1);
      
        useEffect(() => {
          autoSlideInterval = setInterval(nextSlide, 4000);
          return () => clearInterval(autoSlideInterval);
        }, [currentIndex]);

const [CiccleData, setCiccleData] = useState([
  {
    title:"Planning your cloud migration journey",
    desc:"Move your business to the cloud through tailor-made strategies that manage all organizational, security and legal issues.",
    svg:"/src/features/services/services_pages/colud/OverCloud/icon-creating-your-own-cloud-team-through-training-courses-orange.svg"
  },
  {
    title:"Building cloud-native applications",
    desc:"Develop applications designed for the cloud. A cloud-native approach increases scalability, productivity and security.",
    svg:"/src/features/services/services_pages/colud/OverCloud/icons-_Building-cloud-native-applications.svg"
  },
  {
    title:"Optimizing costs and cloud architectures",
    desc:"Audit your existing cloud environment and optimize cloud consumption costs while improving your current architecture’s quality.",
    svg:"/src/features/services/services_pages/colud/OverCloud/icons-_Customizing-multicloud-environments.svg"
  },
  {
    title:"Customizing multicloud environments",
    desc:"Design a customized multicloud, hybrid cloud or multi-hybrid cloud environment that addresses your company’s needs.",
    svg:"/src/features/services/services_pages/colud/OverCloud/icons-_Increasing-profits-with-AI-Machine-Learning.svg"
  },
  {
    title:"Increasing profits with AI and machine learning",
    desc:"Use the power of AI and machine learning to collect data and transform it into a valuable source of business intelligence",
    svg:"/src/features/services/services_pages/colud/OverCloud/icons-_Optimizing-costs-and-cloud-architectures.svg"
  },
  {
    title:"Extending development capacity with cloud engineering",
    desc:"Expand and maintain your cloud infrastructure with the support of cross-functional, highly skilled cloud talent.",
    svg:"/src/features/services/services_pages/colud/OverCloud/icons-_Planning-your-cloud-migration-journey.svg"
  },
]);
// slider end
  return (
   <>
     <Header></Header>

<div className="fluid" style={{backgroundColor:"white"}}>
      <div className="backgroundimg w-100" >
        <div className="trnbox" style={{width:"100%",height:"600px"}}>
        <center className="m-auto mt-5 ">
          <img width={'100px'} className="rcicel" src="https://softwaremind.com/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon-white-Cloud-ConsultingServices.svg&w=1920&q=75" alt="" />
          <div className="firNyj"> <h1 className="fRjBVq sm-header2">Cloud Consulting & Services</h1></div>
          <div className="dwCooV cCEOnh sm-body20 m-auto">
          Implement effective cloud migration strategies, optimize existing environments and develop cloud-native solutions to drive your digital transformation and create new revenue streams.&nbsp;
          </div>  
        <br /><br /><br />
        <button className="btn btn-dark rounded-5">Contact Us</button>
        </center>
        {/* <div className="backgroundimg" style={{width:"100%",height:"600px"}}></div> */}
        </div>
        </div>
</div>

<div className="container-fluid  p-5">
          <div align="" className="row">
            <div className="col-md-4  mb-5">
              <h1 className="m-auto"><strong>Scale your business with cloud solutions</strong></h1>
            </div>
            
            <div className="col-md-8 pe-5">
                  <h5>
                  By specializing in cloud-native app development, multicloud solutions and in-depth cloud training, our cross-functional teams implement solutions that increase agility, enhance productivity and create new revenue streams. Companies trust our experienced experts to foster innovation and execute safe cloud migrations that optimize costs, boost business and enhance security.
                  </h5>
            </div>
          </div>
</div>



{/* Circle Card start */}
<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cgNtKC" style={{   marginLeft: 0,   marginRight: 0,   display: "flex",   flexGrow: 0,   flexShrink: 0,   alignItems: "normal",   justifyContent: "flex-start",   flexFlow: "wrap" }}>
      <div style={{   boxSizing: "border-box",   minHeight: 1,   position: "relative",   paddingLeft: 0,   paddingRight: 0,   width: "100%",   flex: "0 0 100%",   maxWidth: "100%",   marginLeft: "0%",   right: "auto",   left: "auto" }}> 
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Our cloud computing services&nbsp;
          </span>
        </h2>
      </div>
    </div>
    <div className="sc-615e0823-0 eJtoQy" >
   <div className="row">
   {CiccleData.map((item,index)=>
      <div style={{  boxSizing: "border-box",    maxWidth: "45.8333%",   }}>
            <div className="sc-2298f5c4-1 FaOew">
              <div className="sc-2298f5c4-0 kLdYRp">
                <div className="sc-43d1ba49-0 jfrdRI">
                  <img alt="" loading="lazy" width={0} height={0} decoding="async" data-nimg={1} className="sc-aa251c34-0 koLWri" sizes="100vw" 
                  src={item.svg} style={{ color: "transparent" }}/>
                </div>
              </div>
              <div>
                <div className="sc-2298f5c4-2 TqUkL">
                  <h3 className="sc-c25bae65-0 bjbLu sm-header6">
                   {item.title}
                  </h3>
                </div>
                <p className="sc-ca4a3661-6 sc-2298f5c4-3 greJTC hDAghs sm-body15">
                  {item.desc}
                </p>
              </div>
            </div>

          </div>
    )}
   </div>
       
</div>
   
  </div>
</section>
{/* Circle Card end */}






<section className="sc-9e3861ef-1 dVcJZQ">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            How we provide cloud consulting and services
          </span>
        </h2>
      </div>
      <div
        className="sc-884c5c01-2 dVelyY"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "58.3333%",
          flex: "0 0 58.3333%",
          maxWidth: "58.3333%",
          marginLeft: "8.33333%",
          right: "auto",
          left: "auto"
        }}
      >
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              Project scope is always adjusted to your needs – our experts are
              ready to support you in a Fix Scope (implementing specific
              products or services) or Time &amp; Materials model (based on
              technological and business goals).
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="sc-56756f14-0 ipjkYF">
      <div className="sc-abd47ecb-0 btqRXf">
        <div
          className="sc-a3d127f9-0 jyEXtk"
          style={{
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            alignItems: "normal",
            justifyContent: "flex-start",
            flexFlow: "wrap"
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "33.3333%",
              flex: "0 0 33.3333%",
              maxWidth: "33.3333%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-1 czndRY">
              <div className="sc-f2faa475-0 eXxnPd">
                <div className="sc-f2faa475-2 gPzrRy">
                  <p className="sc-f2faa475-1 kUXmag">Stage 1</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "8.33333%",
              flex: "0 0 8.33333%",
              maxWidth: "8.33333%",
              marginLeft: "8.33333%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-3d9eb81-0 gYaQLb">
              <div className="sc-3d9eb81-1 dzOqW">
                <div className="sc-3d9eb81-2 QPQZD" />
              </div>
              <div className="sc-3d9eb81-5 bUSEKX">
                <div className="sc-3d9eb81-4 dZGPek" />
                <div className="sc-3d9eb81-3 dDEGtp" />
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "100%",
              flex: "1 0 0px",
              maxWidth: "100%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-2 uUxwF">
              <p className="sc-a3d127f9-5 cJQCbO">Concept creation</p>
              <div className="sc-a3d127f9-3 hoMDGQ">
                <div className="sc-a3d127f9-4 hoOoqn">
                  <p>
                    We approach every project individually and tailor our
                    strategies to your goals. Each cooperation starts with a
                    workshop that helps us understand your business and identify
                    the optimal solutions. Effective consultation enables us to
                    not only implement cloud environments but ultimately to
                    empower businesses with emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-abd47ecb-0 btqRXf">
        <div
          className="sc-a3d127f9-0 jyEXtk"
          style={{
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            alignItems: "normal",
            justifyContent: "flex-start",
            flexFlow: "wrap"
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "33.3333%",
              flex: "0 0 33.3333%",
              maxWidth: "33.3333%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-1 czndRY">
              <div className="sc-f2faa475-0 eajUka">
                <div className="sc-f2faa475-2 gPzrRy">
                  <p className="sc-f2faa475-1 kUXmag">Stage 2</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "8.33333%",
              flex: "0 0 8.33333%",
              maxWidth: "8.33333%",
              marginLeft: "8.33333%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-3d9eb81-0 gYaQLb">
              <div className="sc-3d9eb81-1 dzOqW">
                <div className="sc-3d9eb81-2 gCULZQ" />
              </div>
              <div className="sc-3d9eb81-5 bUSEKX">
                <div className="sc-3d9eb81-4 dZGPek" />
                <div className="sc-3d9eb81-3 dDEGtp" />
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "100%",
              flex: "1 0 0px",
              maxWidth: "100%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-2 uUxwF">
              <p className="sc-a3d127f9-5 cJQCbO">Implementation</p>
              <div className="sc-a3d127f9-3 hoMDGQ">
                <div className="sc-a3d127f9-4 hoOoqn">
                  <p>
                    We implement projects in autonomous teams and keep you
                    regularly updated on a project’s progress. The cloud
                    environments we design are fully compliant with applicable
                    regulations (e.g., for financial services) and optimized for
                    performance, safety and cost-effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-abd47ecb-0 btqRXf">
        <div
          className="sc-a3d127f9-0 jyEXtk"
          style={{
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            alignItems: "normal",
            justifyContent: "flex-start",
            flexFlow: "wrap"
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "33.3333%",
              flex: "0 0 33.3333%",
              maxWidth: "33.3333%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-1 czndRY">
              <div className="sc-f2faa475-0 eXxnPd">
                <div className="sc-f2faa475-2 gPzrRy">
                  <p className="sc-f2faa475-1 kUXmag">Stage 3</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "8.33333%",
              flex: "0 0 8.33333%",
              maxWidth: "8.33333%",
              marginLeft: "8.33333%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-3d9eb81-0 gYaQLb">
              <div className="sc-3d9eb81-1 dzOqW">
                <div className="sc-3d9eb81-2 gwKXSu" />
              </div>
              <div className="sc-3d9eb81-5 bUSEKX">
                <div className="sc-3d9eb81-4 dZGPek" />
                <div className="sc-3d9eb81-3 dDEGtp" />
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "100%",
              flex: "1 0 0px",
              maxWidth: "100%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-2 uUxwF">
              <p className="sc-a3d127f9-5 cJQCbO">Knowledge transfer</p>
              <div className="sc-a3d127f9-3 hoMDGQ">
                <div className="sc-a3d127f9-4 hoOoqn">
                  <p>
                    After providing you with a tailor-made solution, we share
                    with you everything you need to know to manage it on your
                    own. To do this, we run a knowledge transfer workshop for
                    your technical and business stakeholders to explain how the
                    solution works and how it needs to be maintained for best
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sc-abd47ecb-0 btqRXf">
        <div
          className="sc-a3d127f9-0 PiXQH"
          style={{
            marginLeft: 0,
            marginRight: 0,
            display: "flex",
            flexGrow: 0,
            flexShrink: 0,
            alignItems: "normal",
            justifyContent: "flex-start",
            flexFlow: "wrap"
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "33.3333%",
              flex: "0 0 33.3333%",
              maxWidth: "33.3333%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-1 czndRY">
              <div className="sc-f2faa475-0 eXxnPd">
                <div className="sc-f2faa475-2 gPzrRy">
                  <p className="sc-f2faa475-1 kUXmag">Stage 4</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "8.33333%",
              flex: "0 0 8.33333%",
              maxWidth: "8.33333%",
              marginLeft: "8.33333%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-3d9eb81-0 gYaQLb">
              <div className="sc-3d9eb81-1 dzOqW">
                <div className="sc-3d9eb81-2 gwKXSu" />
              </div>
              <div className="sc-3d9eb81-5 gzNVj">
                <div className="sc-3d9eb81-4 dZGPek" />
                <div className="sc-3d9eb81-3 dDEGtp" />
              </div>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              minHeight: 1,
              position: "relative",
              paddingLeft: 0,
              paddingRight: 0,
              width: "100%",
              flex: "1 0 0px",
              maxWidth: "100%",
              marginLeft: "0%",
              right: "auto",
              left: "auto"
            }}
          >
            <div className="sc-a3d127f9-2 uUxwF">
              <p className="sc-a3d127f9-5 cJQCbO">Further support</p>
              <div className="sc-a3d127f9-3 jzneTp">
                <div className="sc-a3d127f9-4 hoOoqn">
                  <p>
                    After the knowledge transfer is complete, we offer
                    additional support to help you maintain and expand the
                    solution, depending on your needs.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Cloud engineering:</strong>
                    <br />
                    If you don’t have a team with cloud expertise, our dedicated
                    cloud specialists can seamlessly join your team and take
                    care of your cloud environment.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Cloud training: </strong>
                    <br />
                    If your engineering team needs to upskill, our certified
                    cloud experts can train your specialists to develop their
                    skills for specific roles or in specific cloud technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cgNtKC" >
      <div>
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3  ">
          <span className="sc-9e3861ef-2 OfxfR">Who we’ve helped</span>
        </h2>
      </div>
    </div>
  </div>
  <marquee hspace='50%' style={{marginLeft:"0rem",marginRight:"0rem"}}>
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Procountor-old-finago.svg"  /> &ensp;&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Beteast.svg"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-CoreLogic-1.svg"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-GemOne.svg"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-Snow.webp"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-t-mobile.webp"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-TravelCounsellors.svg"  />&ensp;&ensp;&ensp;&ensp;
      <img style={{width:'140px'}} src="/src/features/services/services_pages/ui_ux/marqueSVG/logo-v2-yourgolftravel.webp"  />&ensp;&ensp;&ensp;
    </marquee>

</section>


<section className="sc-9e3861ef-1 gRDIGO">
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cgNtKC" >
    <div >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Cloud leaders we partner with
          </span>
        </h2>
      </div>
    </div>
  </div>
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-d5c12071-2 iJcnBL">
      <div className="sc-13587182-0 etOhfl keen-slider__slide">
        <img
          alt="logo"
          loading="lazy"
          width={200}
          // height={}
          decoding="async"
          data-nimg={1}
          className="sc-c2a86cf8-0 dhSaRV"
          sizes="100vw"
          src='https://images.ctfassets.net/76f8cs5bg9si/o7ktPJiflT8FzC2Bww8re/fa78823c24c2e5e77a4a67c9eb3ffeaf/Microsoft-Solutions-Partner.png?w=600&h=162&q=90&fm=png'
          style={{ color: "transparent" }}
        />
      </div>
      <div className="sc-13587182-0 etOhfl keen-slider__slide">
        <img
          alt="logo"
          loading="lazy"
          width={181}
          // height={48}
          decoding="async"
          data-nimg={1}
          className="sc-c2a86cf8-0 dhSaRV"
          sizes="100vw"
          src='https://cdn.prod.website-files.com/637e4cd92c6f22c15a5225fd/654bda7f55747d2628e81451_%5BNOV-2023%5D-Google-Cloud-Partner_website_badge.png'
          style={{ color: "transparent" }}
        />
      </div>
      <div className="sc-13587182-0 etOhfl keen-slider__slide">
        <img
          alt="logo"
          loading="lazy"
          width={201}
          // height={200}
          decoding="async"
          data-nimg={1}
          className="sc-c2a86cf8-0 dhSaRV"
          sizes="100vw"
          src='https://niupay.com.pg/file/2023/12/aws_select_tier_services.png'
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  </div>
</section>



  


<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cgNtKC" style={{   marginLeft: 0,   marginRight: 0,   display: "flex",   flexGrow: 0,   flexShrink: 0,   alignItems: "normal",   justifyContent: "flex-start",   flexFlow: "wrap" }}>
     <div>
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
            <span className="sc-9e3861ef-2 OfxfR">Case studies</span>
        </h2>
      </div>
      <div className="sc-884c5c01-2 bKDqTK" style={{   boxSizing: "border-box",   minHeight: 1,   position: "relative",   paddingLeft: 0,   paddingRight: 0,   width: "58.3333%",   flex: "0 0 58.3333%",   maxWidth: "58.3333%",   marginLeft: "8.33333%",   right: "auto",   left: "auto" }}>
        <div className="sc-884c5c01-1 bNcQlT">
          <a className="sc-ff402c-0 bfjtca" href="https://softwaremind.com/case-studies/"> 
          More case studies <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 fMCXEQ" > <path   stroke="currentColor"   strokeLinecap="round"   strokeLinejoin="round"   d="m1 1 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>



    
    <div className=''>
      <div className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress sc-c2d00bbd-0 mjUts swiper-backface-hidden">
    <div className={styles.background} >
         
         <div className={styles.sliderContainer } 
              onMouseEnter={() => clearInterval(autoSlideInterval)}
              onMouseLeave={() => (autoSlideInterval = setInterval(nextSlide, 4000))}>
           <div className={styles.slider}
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

             {images.map((img, index) => (
               <div className={styles.slide+' '} key={index}>
                 <div className="row m-auto">
                    <div className="col-md-6 me-0 ms-0 ps-0">
                        <img  className=' p-0 w-70 h-100'  src={img} alt={`Slide ${index + 1}`} />
                    </div>
                    
                    <div className="col-md-6 me-0 ms-0 ps-0 bg-info fWwBvC ps-4 ">
                            <p className="sc-ca4a3661-1 sc-9423156a-0 fLnyHd bQdEMT sm-overline2">
                              Financial services
                            </p>
                            <div className="sc-5689a098-6 gIMQFW">
                              <p className="sc-c25bae65-0 bjbLu sc-5689a098-7 kVLPrQ ">
                               <strong> Migrating a bank's workload to the cloud</strong>
                              </p>
                            </div>
                            <p className="sc-ca4a3661-6 sc-5689a098-0 greJTC jNszLb sm-body15">
                              Software Mind designed a cloud migration strategy,
                              implemented a landing zone and conducted training to
                              prepare the client’s team for further cloud development.
                              As a result, the client could deliver new functionalities
                              faster and run more efficient tests.
                            </p>
                            <div className="sc-5689a098-5 ">
                            <br />
                              <button className="sc-ff402c-0 gNUMPs">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 djQrSY"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"/>                        </svg>
                              </button>
                            </div>
                          
                    </div>
                 </div>
                
               </div>
             ))}
           </div>
           <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
           <button className={styles.next} onClick={nextSlide}>&#10095;</button>
         </div>
         <div className={styles.dotsContainer}>
           {images.map((img, index) => (
             <img
               key={index}
               className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
               src={img}
               alt={`Dot ${index + 1}`}
               onClick={() => showSlide(index)}
             />
           ))}
         </div>
       </div>
          
      </div>

      {/* <div className="sc-e5857bb0-6 jtfAOX">
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 sc-e5857bb0-3 gMZOUI gcmlmg"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"          />        </svg>
        <div className="sc-e5857bb0-1 eDblyF">01</div>
        <div className="sc-e5857bb0-1 eDblyF">02</div>
        <div className="sc-e5857bb0-1 ekjquk">03</div>
        <div className="sc-e5857bb0-1 eDblyF">04</div>
        <div className="sc-e5857bb0-1 eDblyF">
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={20} height={20} fill="currentColor" viewBox="0 0 32.055 32.055" className="sc-e5857bb0-4 sc-e5857bb0-5 cxLPJr iGMLnX"><path d="M3.968 12.061A3.965 3.965 0 0 0 0 16.027a3.965 3.965 0 0 0 3.968 3.967 3.966 3.966 0 1 0 0-7.933zm12.265 0a3.967 3.967 0 0 0-3.968 3.965c0 2.192 1.778 3.967 3.968 3.967s3.97-1.772 3.97-3.967a3.97 3.97 0 0 0-3.97-3.965zm11.857 0a3.967 3.967 0 1 0-.005 7.933 3.967 3.967 0 0 0 .005-7.933z" /></svg>
        </div>
        <div className="sc-e5857bb0-1 eDblyF">06</div>
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={14} fill="none" viewBox="0 0 8 14" className="sc-ff402c-1 sc-e5857bb0-3 djQrSY bHlddQ"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1 1 6 6-6 6"          />        </svg>
      </div> */}
    </div>
  </div>
  
</section>




<section className="sc-9e3861ef-1 iNOspo " >
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cgNtKC"
      style={{marginLeft: 0,marginRight: 0,display: "flex",flexGrow: 0,flexShrink: 0,alignItems: "normal",justifyContent: "flex-start",flexFlow: "wrap"}}>
        <div style={{   boxSizing: "border-box",   minHeight: 1,   position: "relative",   paddingLeft: 0,   paddingRight: 0,   width: "50%",   flex: "0 0 50%",   maxWidth: "50%",   marginLeft: "0%",   right: "auto",   left: "auto" }}>
          <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
            <span className="sc-9e3861ef-2 OfxfR">Client reviews</span>
          </h2>
        </div>
    </div>

      
      <ReviewSlider/>
  </div>
</section>




<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Create your own cloud team through cloud training
          </span>
        </h2>
      </div>
      <div
        className="sc-884c5c01-2 dVelyY"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "58.3333%",
          flex: "0 0 58.3333%",
          maxWidth: "58.3333%",
          marginLeft: "8.33333%",
          right: "auto",
          left: "auto"
        }}
      >
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              Empower your team to work independently in various cloud computing
              areas and with diverse technologies through a live training
              program tailored to your requirements and led by active
              consultants that have trained thousands of professionals. Learn
              how to use leading cloud technologies based on real-life case
              studies and increase your business efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="sc-574dfbcc-0 ewIJhX"
      style={{
        marginLeft: "-12px",
        marginRight: "-12px",
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        className="sc-574dfbcc-1 iMXMbE"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 12,
          paddingRight: 12,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <div href="" target="_blank" className="sc-9f7db817-6 ezWwzr">
          <div className="sc-9f7db817-1 bjzWGW">
            <img
              alt=""
              loading="lazy"
              width={0}
              height={0}
              decoding="async"
              data-nimg={1}
              className="sc-9f7db817-0 kmkByO"
              sizes="100vw"
              src='/src/features/services/services_pages/colud/img/card2.webp'
              style={{ color: "transparent" }}
            />
          </div>
          <p className="sc-9f7db817-2 kZoaHe">
            Become an expert and learn how to leverage{" "}
            <strong>Kubernetes</strong>
          </p>
          <p className="sc-ca4a3661-6 sc-9f7db817-3 greJTC GNjMa sm-body15" />
          <p className="sc-ca4a3661-6 sc-9f7db817-4 greJTC isyNxG sm-body15" />
        </div>
      </div>
      <div
        className="sc-574dfbcc-1 iMXMbE"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 12,
          paddingRight: 12,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <div href="" target="_blank" className="sc-9f7db817-6 ezWwzr">
          <div className="sc-9f7db817-1 bjzWGW">
            <img
              alt=""
              loading="lazy"
              width={0}
              height={0}
              decoding="async"
              data-nimg={1}
              className="sc-9f7db817-0 kmkByO"
              sizes="100vw"
              src='/src/features/services/services_pages/colud/img/card1.webp'
              style={{ color: "transparent" }}
            />
          </div>
          <p className="sc-9f7db817-2 kZoaHe">
            Gain knowledge and develop practical skills in{" "}
            <strong>Terraform</strong>
          </p>
          <p className="sc-ca4a3661-6 sc-9f7db817-3 greJTC GNjMa sm-body15" />
          <p className="sc-ca4a3661-6 sc-9f7db817-4 greJTC isyNxG sm-body15" />
        </div>
      </div>
      <div
        className="sc-574dfbcc-1 iMXMbE"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 12,
          paddingRight: 12,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <div href="" target="_blank" className="sc-9f7db817-6 ezWwzr">
          <div className="sc-9f7db817-1 bjzWGW">
            <img
              alt=""
              loading="lazy"
              width={0}
              height={0}
              decoding="async"
              data-nimg={1}
              className="sc-9f7db817-0 kmkByO"
              sizes="100vw"
              src='/src/features/services/services_pages/colud/img/card3.webp'
              style={{ color: "transparent" }}
            />
          </div>
          <p className="sc-9f7db817-2 kZoaHe">
            Specialize in <strong>Google Cloud Platform</strong>,{" "}
            <strong>AWS</strong> and <strong>Microsoft Azure</strong>
          </p>
          <p className="sc-ca4a3661-6 sc-9f7db817-3 greJTC GNjMa sm-body15" />
          <p className="sc-ca4a3661-6 sc-9f7db817-4 greJTC isyNxG sm-body15" />
        </div>
      </div>
    </div>
  </div>
</section>




<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iacRPG sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Cloud consulting and services that deliver measurable value
          </span>
        </h2>
      </div>
    </div>
  </div>
  <div className="sc-953bb80d-1 gtTrKM">
    <div className="sc-953bb80d-0 ePPvGo">
      <div className="swiper swiper-initialized swiper-horizontal sc-6017b93c-0 dCKlXJ swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{
            transitionDuration: "0ms",
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div
            className="swiper-slide swiper-slide-active basic-slide"
            style={{ marginRight: 20 }}
          >
            <div className="sc-89975bea-1 ieCIuw">
              <h3 className="sc-c25bae65-0 htUqiQ sm-header4">
                Top tier multicloud specialists
              </h3>
              <p className="sc-ca4a3661-9 sc-89975bea-0 kyBtyV FlhFb sm-body17">
                Partner with dedicated senior cloud consulting specialists,
                architects and engineers with vast knowledge and certificates
                that attest to their skills and a track record of successful
                implementations.
              </p>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next basic-slide"
            style={{ marginRight: 20 }}
          >
            <div className="sc-89975bea-1 gOueXp">
              <h3 className="sc-c25bae65-0 htUqiQ sm-header4">
                Cloud expertise tailored to business goals
              </h3>
              <p className="sc-ca4a3661-9 sc-89975bea-0 kyBtyV FlhFb sm-body17">
                Receive personalized support and customized cloud solutions, no
                matter the size of a project.
              </p>
            </div>
          </div>
          <div className="swiper-slide basic-slide" style={{ marginRight: 20 }}>
            <div className="sc-89975bea-1 cupuSf">
              <h3 className="sc-c25bae65-0 htUqiQ sm-header4">
                Knowledge transfers done right
              </h3>
              <p className="sc-ca4a3661-9 sc-89975bea-0 kyBtyV FlhFb sm-body17">
                Ensure your team can work independently and develop your project
                unassisted after our work has finished, through a comprehensive
                knowledge transfer managed by our cloud consulting services
                team.
              </p>
            </div>
          </div>
          <div className="swiper-slide basic-slide" style={{ marginRight: 20 }}>
            <div className="sc-89975bea-1 ieCIuw">
              <h3 className="sc-c25bae65-0 htUqiQ sm-header4">
                Cloud-driven business impact
              </h3>
              <p className="sc-ca4a3661-9 sc-89975bea-0 kyBtyV FlhFb sm-body17">
                Leverage cloud technologies to solve business challenges, with
                our help. We improve, optimize and implement innovative cloud
                solutions to support your company's growth.
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <span className="swiper-pagination-bullet" />
        </div>
        <button
          className="sc-2a3e549a-0 bOyqzc sc-a33e4197-1 iuzwbY slider-button-prev swiper-button-disabled"
          disabled=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={14}
            fill="none"
            viewBox="0 0 8 14"
            className="sc-2a3e549a-1 bkqSOX"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
        <button className="sc-2a3e549a-0 bOyqzc sc-a33e4197-1 iGJZcY slider-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={14}
            fill="none"
            viewBox="0 0 8 14"
            className="sc-2a3e549a-1 jUqLeG"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>




<section className="sc-9e3861ef-1 iNOspo">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Our cloud consulting services
          </span>
        </h2>
      </div>
      <div
        className="sc-884c5c01-2 dVelyY"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "58.3333%",
          flex: "0 0 58.3333%",
          maxWidth: "58.3333%",
          marginLeft: "8.33333%",
          right: "auto",
          left: "auto"
        }}
      >
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              <span
                className="TextRun SCXW163577217 BCX2"
                lang="EN-US"
                xmlLang="EN-US"
                data-contrast="none"
              >
                <span className="NormalTextRun CommentStart SCXW163577217 BCX2">
                  Our cross-functional teams work with best-of-breed tools to
                  develop customized solutions that deliver rewarding
                  experiences and{" "}
                </span>
                <span className="NormalTextRun SCXW163577217 BCX2">
                  comply with
                </span>
                <span className="NormalTextRun SCXW163577217 BCX2">
                  {" "}
                  market regulations
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="sc-55bbdf4-1 joIpTh">
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r1:"
            aria-controls="react-collapsed-panel-:r1:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">
              Workload Migration
            </h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r1:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              height: 0,
              overflow: "hidden",
              display: "none"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">Road to Cloud</li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Strategy &amp; Cloud Migration
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Hybrid &amp; Multicloud Architecture
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Multicloud Strategy Implementation
              </li>
              <li className="sc-55bbdf4-3 kKoLCw"> Cloud Adoption Framework</li>
              <li className="sc-55bbdf4-3 kKoLCw">CI/CD Process Automation</li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Infrastructure as Code (IaC)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r2:"
            aria-controls="react-collapsed-panel-:r2:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">
              Cloud Optimization
            </h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r2:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              display: "none",
              height: 0,
              overflow: "hidden"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">
                Cloud Cost Audit &amp; Optimization{" "}
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">Landing Zone Audit </li>
              <li className="sc-55bbdf4-3 kKoLCw">Cloud Security Audit</li>
              <li className="sc-55bbdf4-3 kKoLCw">Hybrid Solutions</li>
              <li className="sc-55bbdf4-3 kKoLCw">NoOps Automation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r3:"
            aria-controls="react-collapsed-panel-:r3:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">Data</h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r3:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              display: "none",
              height: 0,
              overflow: "hidden"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">Data Engineering</li>
              <li className="sc-55bbdf4-3 kKoLCw">Machine Learning </li>
              <li className="sc-55bbdf4-3 kKoLCw">MLOps</li>
              <li className="sc-55bbdf4-3 kKoLCw">Power BI</li>
              <li className="sc-55bbdf4-3 kKoLCw">AI R&amp;D Projects</li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Low Code Projects (Power Apps)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r4:"
            aria-controls="react-collapsed-panel-:r4:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">
              Kubernetes &amp; Containers
            </h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r4:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              display: "none",
              height: 0,
              overflow: "hidden"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">
                CI/CD for Kubernetes Apps{" "}
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Enterprise Kubernetes Architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r5:"
            aria-controls="react-collapsed-panel-:r5:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">IoT</h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r5:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              display: "none",
              height: 0,
              overflow: "hidden"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">
                Data Modeling in Digital Things
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Designing IoT &amp; IIoT Solutions
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">
                Device Lifecycle Management
              </li>
              <li className="sc-55bbdf4-3 kKoLCw">Data Engineering for IoT</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sc-55bbdf4-0 cHhfLB">
        <div className="sc-55bbdf4-2 kvWSGR">
          <div
            id="react-collapsed-toggle-:r6:"
            aria-controls="react-collapsed-panel-:r6:"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            className="sc-6a769146-0 kiyHrI"
          >
            <h3 className="sc-c25bae65-0 bjbLu sm-header6">Cloud Reselling</h3>
            <div className="sc-6a769146-1 epSVZR">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={14}
                fill="none"
                viewBox="0 0 22 14"
                className="sc-81ec6d4d-0 hvisiS"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                />
              </svg>
            </div>
          </div>
          <div
            id="react-collapsed-panel-:r6:"
            aria-hidden="true"
            role="region"
            className="sc-6a769146-2 aetMr"
            style={{
              boxSizing: "border-box",
              display: "none",
              height: 0,
              overflow: "hidden"
            }}
          >
            <ul>
              <li className="sc-55bbdf4-3 kKoLCw">Microsoft Azure</li>
              <li className="sc-55bbdf4-3 kKoLCw">AWS</li>
              <li className="sc-55bbdf4-3 kKoLCw">O365</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="sc-9e3861ef-1 dVcJZQ">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cgNtKC"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "41.6667%",
          flex: "0 0 41.6667%",
          maxWidth: "41.6667%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">Cloud computing insights</span>
        </h2>
      </div>
      <div
        className="sc-884c5c01-2 dVelyY"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "50%",
          flex: "0 0 50%",
          maxWidth: "50%",
          marginLeft: "8.33333%",
          right: "auto",
          left: "auto"
        }}
      >
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              Get expert advice and best practices on cloud solutions and
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sc-953bb80d-1 gtTrKM">
    <div className="sc-953bb80d-0 ePPvGo">
      <div className="swiper swiper-initialized swiper-horizontal sc-a33e4197-0 jASKrq swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <div
            className="swiper-slide basic-slide swiper-slide-active"
            style={{ marginRight: 20 }}
          >
            <a
              className="sc-4fc5d34f-5 khqIMH"
              href="https://softwaremind.com/blog/data-governance-in-the-cloud-why-you-need-more-than-just-data-management/"
            >
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img
                  alt="Data Governance in the Cloud: Why You Need More Than Just Data Management"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-4fc5d34f-3 dIJiAh"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fblog-hero-image-header-31-Oct-768x320.webp&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                  <div className="sc-1865605d-3 bNZlex">
                    <img
                      alt="Klaudia Czarnecka"
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="sc-1865605d-0 hZOqNx"
                      sizes="100vw"
                      srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=3840&q=75 3840w"
                      src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F10%2Fauthor-Klaudia-Czarnecka-150x150.webp&w=3840&q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="sc-1865605d-2 kSEuet">
                      <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">
                        Klaudia Czarnecka
                      </p>
                      <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">
                        2024/10/31
                      </p>
                    </div>
                  </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Data Governance in the Cloud: Why You Need More Than Just Data
                  Management
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      fill="none"
                      viewBox="0 0 8 14"
                      className="sc-ff402c-1 djQrSY"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 1 6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div
            className="swiper-slide basic-slide swiper-slide-next"
            style={{ marginRight: 20 }}
          >
            <a
              className="sc-4fc5d34f-5 diNtOS"
              href="https://softwaremind.com/resources/choosing-the-best-cloud-provider-for-your-ai-goals/"
            >
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img
                  alt="Choosing the Best Cloud Provider for Your AI Goals"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-4fc5d34f-3 dIJiAh"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2024%2F03%2Fcontent-image-ebook-cloud.webp&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                  <div className="sc-6edd5d2e-1 lfnexi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx={23}
                        cy={23}
                        r={22}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                      <path
                        fill="#fff"
                        d="M15.467 29.303c1.164 0 2.296.139 3.396.418 1.1.278 2.19.708 3.27 1.29V17.66a10.79 10.79 0 0 0-3.182-1.496 12.582 12.582 0 0 0-3.484-.498c-.8 0-1.523.048-2.168.143a10.71 10.71 0 0 0-2.068.543c-.205.068-.35.166-.436.295a.746.746 0 0 0-.128.423v12.278c0 .239.085.414.256.525.171.111.36.124.564.039a8.954 8.954 0 0 1 1.8-.462c.645-.099 1.372-.148 2.18-.148ZM23.8 31.01a14.495 14.495 0 0 1 3.237-1.29 13.383 13.383 0 0 1 3.363-.417c.8 0 1.525.05 2.174.148.65.1 1.252.253 1.806.462a.574.574 0 0 0 .564-.039c.17-.11.256-.286.256-.525v-12.22a.688.688 0 0 0-.128-.411c-.086-.12-.231-.222-.436-.308a10.638 10.638 0 0 0-2.068-.583 13.348 13.348 0 0 0-2.168-.16c-1.164 0-2.314.166-3.451.498a10.87 10.87 0 0 0-3.149 1.497V31.01Zm-.867 2.4a12.878 12.878 0 0 0-3.525-1.81c-1.267-.42-2.58-.63-3.941-.63-.783 0-1.543.074-2.279.224a9.164 9.164 0 0 0-2.121.709c-.5.193-.969.135-1.408-.175-.44-.31-.659-.737-.659-1.282v-13.82c0-.33.087-.636.26-.918.174-.282.417-.479.73-.59.871-.39 1.764-.674 2.677-.851a14.611 14.611 0 0 1 2.8-.267c1.35 0 2.657.194 3.921.58 1.265.388 2.446.93 3.545 1.625 1.1-.696 2.281-1.237 3.545-1.624A13.316 13.316 0 0 1 30.4 14c.954 0 1.887.089 2.8.267.913.177 1.805.461 2.677.851.313.111.556.308.73.59.173.282.26.588.26.918v13.82c0 .545-.237.964-.71 1.257-.474.292-.977.341-1.51.148a9.112 9.112 0 0 0-2.058-.67c-.71-.141-1.44-.212-2.189-.212-1.36 0-2.674.21-3.941.631a12.88 12.88 0 0 0-3.526 1.81Z"
                      />
                    </svg>
                    <div className="sc-6edd5d2e-0 iLzrdD">
                      <p className="sc-ca4a3661-0 sc-6edd5d2e-2 laTSeM ehMKbK sm-overline">
                        Ebook
                      </p>
                    </div>
                  </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Choosing the Best Cloud Provider for Your AI Goals
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      fill="none"
                      viewBox="0 0 8 14"
                      className="sc-ff402c-1 djQrSY"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 1 6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide basic-slide" style={{ marginRight: 20 }}>
            <a
              className="sc-4fc5d34f-5 fHcyk"
              href="https://softwaremind.com/blog/how-ai-and-cloud-computing-have-transformed-business-operations/"
            >
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img
                  alt="How AI and Cloud Computing Have Transformed Business Operations"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-4fc5d34f-3 dIJiAh"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F10%2FGrafika-How-AI-and-Cloud-Computing-Have-Transformed-Business-Operations-768x320.jpg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                  <div className="sc-1865605d-3 bNZlex">
                    <img
                      alt="Michał Jaworski"
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="sc-1865605d-0 hZOqNx"
                      sizes="100vw"
                      srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=3840&q=75 3840w"
                      src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F08%2Fspeaker-m-jaworski-150x150.webp&w=3840&q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="sc-1865605d-2 kSEuet">
                      <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">
                        Michał Jaworski
                      </p>
                      <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">
                        2023/10/26
                      </p>
                    </div>
                  </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  How AI and Cloud Computing Have Transformed Business
                  Operations
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      fill="none"
                      viewBox="0 0 8 14"
                      className="sc-ff402c-1 djQrSY"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 1 6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide basic-slide" style={{ marginRight: 20 }}>
            <a
              className="sc-4fc5d34f-5 khqIMH"
              href="https://softwaremind.com/resources/essential-guide-to-cloud-migrations-and-optimizations/"
            >
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img
                  alt="Your Essential Guide to Cloud Migrations and Optimizations"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-4fc5d34f-3 dIJiAh"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2FYour-Essential-Guide-to-Cloud-Migrations-and-Optimizations-888x500-1-768x432.webp&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                  <div className="sc-6edd5d2e-1 lfnexi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={48}
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx={23}
                        cy={23}
                        r={22}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                      <path
                        fill="#fff"
                        d="M17.5 29.7c-1.155 0-2.083-.45-2.783-1.35-.7-.9-1.061-2.094-1.084-3.583v-.3l-.766-1.267c-.511-.822-.956-1.878-1.334-3.167-.377-1.289-.566-2.522-.566-3.7 0-1.933.45-3.533 1.35-4.8.9-1.266 2.017-1.9 3.35-1.9 1.333 0 2.45.65 3.35 1.95.9 1.3 1.35 2.884 1.35 4.75a11.53 11.53 0 0 1-.517 3.367 27.929 27.929 0 0 1-1.05 2.933l.6 1c.289.467.522.973.7 1.517.178.545.267 1.017.267 1.417 0 .91-.267 1.66-.8 2.25-.534.589-1.222.883-2.067.883ZM14.834 23l2.1-.6c.355-.8.716-1.828 1.083-3.083.367-1.256.55-2.25.55-2.984 0-1.333-.267-2.483-.8-3.45-.534-.966-1.233-1.45-2.1-1.45-.778 0-1.456.434-2.034 1.3-.577.867-.866 2.067-.866 3.6 0 1.267.194 2.5.583 3.7.389 1.2.883 2.19 1.484 2.967Zm2.666 4.9a.897.897 0 0 0 .784-.417c.188-.277.283-.583.283-.916 0-.29-.084-.65-.25-1.084a6.875 6.875 0 0 0-.75-1.383l-2.1.6c.066 1.022.3 1.811.7 2.367.4.555.844.833 1.333.833Zm11 8.467c-.844 0-1.533-.295-2.067-.884-.533-.588-.8-1.338-.8-2.25 0-.422.095-.9.284-1.433a7.767 7.767 0 0 1 .716-1.5l.567-1c-.333-.778-.678-1.739-1.033-2.883A11.463 11.463 0 0 1 25.633 23c0-1.867.45-3.45 1.35-4.75.9-1.3 2.017-1.95 3.35-1.95 1.334 0 2.45.633 3.35 1.9.9 1.267 1.35 2.867 1.35 4.8 0 1.178-.177 2.4-.533 3.667-.355 1.266-.8 2.333-1.333 3.2l-.8 1.266v.334c0 1.422-.361 2.594-1.083 3.516-.723.923-1.65 1.384-2.784 1.384Zm2.534-6.5c.844-1.356 1.422-2.506 1.733-3.45.31-.945.466-2.084.466-3.417 0-1.533-.288-2.733-.866-3.6-.578-.867-1.256-1.3-2.033-1.3-.845 0-1.54.483-2.084 1.45s-.817 2.117-.817 3.45c0 .733.19 1.728.567 2.983.378 1.256.733 2.284 1.067 3.084l1.966.8Zm-2.534 4.7c.445 0 .878-.273 1.3-.817.422-.544.667-1.272.733-2.183l-2.066-.834c-.178.378-.395.79-.65 1.234-.256.444-.384.866-.384 1.266s.112.723.334.967c.222.244.466.367.733.367Z"
                      />
                    </svg>
                    <div className="sc-6edd5d2e-0 iLzrdD">
                      <p className="sc-ca4a3661-0 sc-6edd5d2e-2 laTSeM ehMKbK sm-overline">
                        Guide
                      </p>
                    </div>
                  </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Your Essential Guide to Cloud Migrations and Optimizations
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      fill="none"
                      viewBox="0 0 8 14"
                      className="sc-ff402c-1 djQrSY"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 1 6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide basic-slide" style={{ marginRight: 20 }}>
            <a
              className="sc-4fc5d34f-5 diNtOS"
              href="https://softwaremind.com/blog/maximize-cloud-investments-and-optimize-cloud-costs-strategies-and-best-practices/"
            >
              <div className="sc-4fc5d34f-2 iBTRIq">
                <img
                  alt="Maximize Cloud Investments and Optimize Cloud Costs – Strategies and Best Practices"
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-4fc5d34f-3 dIJiAh"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fblog-featured-image-Maximize-Cloud-Investments-and-Optimize-Cloud-Costs-%E2%80%93-Strategies-and-Best-Practices-768x320.webp&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="sc-4fc5d34f-4 bcbQTa">
                <div className="sc-144bd507-0 bUMhHQ">
                  <div className="sc-1865605d-3 bNZlex">
                    <img
                      alt="Domi Rydel"
                      loading="lazy"
                      width={0}
                      height={0}
                      decoding="async"
                      data-nimg={1}
                      className="sc-1865605d-0 hZOqNx"
                      sizes="100vw"
                      srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=3840&q=75 3840w"
                      src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F07%2Fdominika-rydel3-150x150.webp&w=3840&q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="sc-1865605d-2 kSEuet">
                      <p className="sc-ca4a3661-0 sc-1865605d-4 laTSeM cSKAKg sm-overline">
                        Domi Rydel
                      </p>
                      <p className="sc-ca4a3661-13 sc-1865605d-5 kDQSjW bdCFfJ sm-hint">
                        2023/07/20
                      </p>
                    </div>
                  </div>
                </div>
                <p className="sc-c25bae65-0 htUqiQ sc-4fc5d34f-7 koBQVO sm-header4">
                  Maximize Cloud Investments and Optimize Cloud Costs –
                  Strategies and Best Practices
                </p>
                <div className="sc-4fc5d34f-6 eehoUh">
                  <button className="sc-ff402c-0 kaBMTH">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={8}
                      height={14}
                      fill="none"
                      viewBox="0 0 8 14"
                      className="sc-ff402c-1 djQrSY"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 1 6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <span className="swiper-pagination-bullet" />
          <span className="swiper-pagination-bullet" />
        </div>
        <button
          className="sc-2a3e549a-0 bOyqzc sc-a33e4197-1 iuzwbY slider-button-prev swiper-button-disabled"
          disabled=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={14}
            fill="none"
            viewBox="0 0 8 14"
            className="sc-2a3e549a-1 bkqSOX"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
        <button className="sc-2a3e549a-0 bOyqzc sc-a33e4197-1 iGJZcY slider-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={14}
            fill="none"
            viewBox="0 0 8 14"
            className="sc-2a3e549a-1 jUqLeG"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m1 1 6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>




<div class="sc-d8bf387e-0 iBaBEA"><section class="sc-63cd0f-2 hkitw"><div class="sc-63cd0f-1 bTIAYg"><div class="sc-63cd0f-3 bfNsic"><div class="sc-63cd0f-6 eQKwsQ"><h2 class="sc-c25bae65-0 bjbLu sc-63cd0f-5 hJuCsQ sm-header3">Migrate to cloud smoothly and safely</h2><div class="sc-63cd0f-4 kiMTlc"><div class="sc-8be7c32f-5 gguYMo"><a class="sc-8be7c32f-0 sc-8be7c32f-1 fBnrFY knIAgO" href="https://softwaremind.com/contact/">Contact us</a></div></div></div></div><div class="sc-63cd0f-0 fHyvHq"><div class="sc-9e617051-1 dyBVuC"><div class="sc-9e617051-0 eYoFsx"><p class="sc-9e617051-2 iKTZrz sm-header3">1500</p><p class="sc-9e617051-2 iKTZrz sm-header4">+  talented experts</p></div><div class="sc-9e617051-0 eYoFsx"><p class="sc-9e617051-2 iKTZrz sm-header3">25</p><p class="sc-9e617051-2 iKTZrz sm-header4">+ years of innovation</p></div><div class="sc-9e617051-0 eYoFsx"><p class="sc-9e617051-2 iKTZrz sm-header3">250</p><p class="sc-9e617051-2 iKTZrz sm-header4">+ clients who trust us</p></div></div></div></div></section></div>





<section align='justify' className="sc-9e3861ef-1 dVcJZQ">
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-9e3861ef-4 cUVos row" > 
    <div className="col-md-4">
       <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
            <span className="sc-9e3861ef-2 OfxfR">UI &amp; UX design FAQs</span>
      </h2>
    </div> 
    <div   className="col-md-6 sc-884c5c01-2 dTzmhu"   >
      <div className="sc-b263a12c-0 irxYKK">
      
      {data.map((item,index)=>
            <div key={index} className=" gvDaqZ" >
                    <div className="hoverable showhim sc-f9ea8f54-1 eEvJRF d-flex p-1">
                        <h6 className="  ">
                            {item.title}
                        </h6>

                        <div className="showme ps-2 grSScn">
                            <svg className=" text-danger " xmlns="http://www.w3.org/2000/svg" width="22" height="14" fill="none" viewBox="0 0 22 14" ><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"></path></svg>
                      </div>
                    </div>
                    <div  id="cont" aria-hidden="true" role="region" className="show-on-hover">
                        <p className="sc-ca4a3661-6 sc-f9ea8f54-3 greJTC drWCXn sm-body15">
                          {item.desc}&nbsp;
                        </p>
                    </div>
              </div>
          )}
      </div>
    </div>
    </div>
  </div>
</section>




<section className="sc-9e3861ef-1 dVcJZQ">
  <div className="sc-953bb80d-0 ePPvGo">
    <div
      className="sc-9e3861ef-4 cUVos"
      style={{
        marginLeft: 0,
        marginRight: 0,
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        alignItems: "normal",
        justifyContent: "flex-start",
        flexFlow: "wrap"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "33.3333%",
          flex: "0 0 33.3333%",
          maxWidth: "33.3333%",
          marginLeft: "0%",
          right: "auto",
          left: "auto"
        }}
      >
        <h2 className="sc-c25bae65-0 bjbLu sc-9e3861ef-3 iJLRot sm-header3">
          <span className="sc-9e3861ef-2 OfxfR">
            Looking for other software services? 
          </span>
        </h2>
      </div>
      <div
        className="sc-884c5c01-2 dVelyY"
        style={{
          boxSizing: "border-box",
          minHeight: 1,
          position: "relative",
          paddingLeft: 0,
          paddingRight: 0,
          width: "58.3333%",
          flex: "0 0 58.3333%",
          maxWidth: "58.3333%",
          marginLeft: "8.33333%",
          right: "auto",
          left: "auto"
        }}
      >
        <div className="sm-section-excerpt">
          <div className="section-right__excerpt">
            <p>
              For over two decades we’ve been helping companies across markets
              and sectors develop disruptive solutions. Proven ways of working,
              domain knowledge and an open culture that prioritizes ownership
              mean we contribute from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sc-953bb80d-0 ePPvGo">
    <div className="sc-7927336c-0 hrlUit">
      <h3 className="sc-c25bae65-0 bjbLu sm-header4">
        Engineering and consultancy that deliver value
      </h3>
      <div
        className="sc-7927336c-2 kOWiwy"
        style={{
          marginLeft: 0,
          marginRight: 0,
          display: "flex",
          flexGrow: 0,
          flexShrink: 0,
          alignItems: "normal",
          justifyContent: "flex-start",
          flexFlow: "wrap"
        }}
      >
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F09%2Fmain-pages-featured-image-Generative-AI-Development-Services2-768x430.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/generative-ai-development-services/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-Data-science-orange.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div
                  className="sc-27806405-0 cDaeWI"
                  style={{ transform: "unset" }}
                >
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Generative AI development services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Use generative AI models to increase efficiency and stay ahead
                of competition.
              </p>
            </div>
          </div>
        </div>
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Cloud-Workforce-Service-768x410.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/cloud-workforce-service/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon-cloud-workforce-service-orange.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div
                  className="sc-27806405-0 cDaeWI"
                  style={{ transform: "unset" }}
                >
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Cloud engineering services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Team up with experts who optimize cloud costs and help you drive
                business growth.
              </p>
            </div>
          </div>
        </div>
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Fmain-pages-featured-image-Digital-Transformation-Services-768x410.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/digital-transformation-services/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficon_Digital-transformation-orange-09.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="sc-27806405-0 cDaeWI">
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Digital transformation services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Boost business development, optimize investment and bring
                innovative ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sc-7927336c-0 hrlUit">
      <h3 className="sc-c25bae65-0 bjbLu sm-header4">
        Engineering expertise that supports industries
      </h3>
      <div
        className="sc-7927336c-2 kOWiwy"
        style={{
          marginLeft: 0,
          marginRight: 0,
          display: "flex",
          flexGrow: 0,
          flexShrink: 0,
          alignItems: "normal",
          justifyContent: "flex-start",
          flexFlow: "wrap"
        }}
      >
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Financial-Services-768x410.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/financial-software-development/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Financial-services-orange.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div
                  className="sc-27806405-0 cDaeWI"
                  style={{ transform: "unset" }}
                >
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Financial services
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Engineer customized solutions that increase personalization and
                user conversion across channels.
              </p>
            </div>
          </div>
        </div>
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Telecom-768x410.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/telecom-software-development/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F05%2Ficon_Telecom-orange.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="sc-27806405-0 cDaeWI">
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Telecom 
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Work with experienced engineering teams to create evolutive
                solutions for your customers. 
              </p>
            </div>
          </div>
        </div>
        <div
          className="sc-7927336c-1 ftbyDi"
          style={{
            boxSizing: "border-box",
            minHeight: 1,
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            width: "33.3333%",
            flex: "0 0 33.3333%",
            maxWidth: "33.3333%",
            marginLeft: "0%",
            right: "auto",
            left: "auto"
          }}
        >
          <div className="sc-27806405-6 jGEIQa">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="sc-27806405-5 gnDFbz"
              sizes="100vw"
              srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=640&q=100 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=750&q=100 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=828&q=100 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=1080&q=100 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=1200&q=100 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=1920&q=100 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=2048&q=100 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=3840&q=100 3840w"
              src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Fmain-pages-featured-image-Sports-Betting-768x410.webp&w=3840&q=100"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent"
              }}
            />
            <a
              className="sc-43d1ba49-0 kobdgU"
              href="https://softwaremind.com/services/software-for-sport-betting-industry/"
            >
              <div className="sc-27806405-3 ZEDbb">
                <img
                  alt=""
                  loading="lazy"
                  width={0}
                  height={0}
                  decoding="async"
                  data-nimg={1}
                  className="sc-27806405-4 jzkMcX"
                  sizes="100vw"
                  srcSet="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=3840&q=75 3840w"
                  src="/_next/image/?url=https%3A%2F%2Fprod-cms.softwaremind.com%2Fapp%2Fuploads%2F2023%2F06%2Ficons-_Sports-Betting-orange.svg&w=3840&q=75"
                  style={{ color: "transparent" }}
                />
                <div className="sc-27806405-0 cDaeWI">
                  <p className="sc-ca4a3661-9 sc-27806405-2 kyBtyV eltRhB sm-body17">
                    Sports betting
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={14}
                    fill="none"
                    viewBox="0 0 22 14"
                    className="sc-27806405-1 gKVDRY"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.91 7H1.002M14.274 1l6.636 6-6.636 6"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <div className="sc-27806405-8 hEhKDF">
              <p className="sc-ca4a3661-9 sc-27806405-7 kyBtyV klutVo sm-body17">
                Develop online betting software that prioritizes rewarding
                customer experience. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




     <Footer/>
   </>
  )
}
