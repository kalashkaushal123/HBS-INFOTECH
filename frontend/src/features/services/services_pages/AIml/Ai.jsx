import React from 'react'

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


import manufactured from './images/manufactured.svg'
import manufacture from './images/manufacture.svg'
import processing from './images/food processing.svg'








import './ai.css';




export default function Ai() {
  return (
    <div>
      <div>
        <img className="photo" src={display} />
        <div className="main-photo">
          <img className="firstphoto" src={ai_display} />
          <h1 className="main-heading">Artificial Intelligence and Machine Learning Services</h1>
          <p className="next-line">Automate workflows and increase operational efficiency through tailored AI development services.</p>
          <button className="contact" style={{marginLeft:'47.6%'}}> Contact us</button>
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
              
              <h2 style={{fontWeight:"bold", fontSize:'40px'}}>Our Artificial Intelligence and Machine Learning Services</h2>
        
              <div className='testing'>
                <div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={eye} height="60px" />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Computer vision</h5>
                      <p>Leverage advanced algorithms to enable machines to interpret and make decisions based on existing visual data. Empower applications – from security systems to automated quality inspection in manufacturing - with image and video analysis, object detection, facial recognition, and image segmentation.</p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={tick} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>MLOps</h5>
                      <p>Streamline the deployment, monitoring, and management of machine learning models. Integrate DevOps practices with ML to ensure seamless model lifecycle management, from development and testing to deployment and scaling.</p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={lock} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>AI governance</h5>
                      <p>Ensure ethical, transparent, and compliant AI practices by providing frameworks and tools for managing AI risks, assuring data privacy, and maintaining accountability in AI operations. Learn how to navigate complex regulatory requirements and build trust in your AI systems.</p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={face_recognition} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Facial recognition</h5>
                      <p>Improve security devices, save time and maximize resources by replacing traditional keys or passwords and automating identification processes. Enhance patient identification and simplify administrative processes. Enable personalized services and experiences in various leisure sectors.</p>
                    </div>
                  </div>
        
                </div>
                <div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={upscale} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Predictive maintenance</h5>
                      <p>Use ML and AI to stop equipment failures before they occur. Minimize downtime, reduce maintenance costs and extend the lifespan of critical assets in your organization, while ensuring optimal operational efficiency by analyzing historical and real-time data.</p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={cloud} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Cloud-based AI&ML</h5>
                      <p>Maximize your cloud infrastructure with our cloud-based AI/ML services. Implement cost-effective, secure, and efficient AI and ML operations tailored to your business needs thanks to scalable and flexible AI solutions that leverage cloud platforms for data storage, processing, and model deployment. </p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={text} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Text translation</h5>
                      <p>Overcome language barriers with our text translation services. Utilize state-of-the-art natural language processing (NLP) models that offer accurate and contextually appropriate translations across multiple languages. Support global communication, content localization, and multilingual content creation. </p>
                    </div>
                  </div>
        
                  <div className='testing_block'>
                    <div className='testing_image'>
                      <img src={analysis} height="60px"  />
                    </div>
                    <div className='testing_text'>
                      <h5 style={{fontWeight:'600'}}>Sentiment analysis</h5>
                      <p>Gain insights into customer opinions and market trends. By analyzing text data from social media, reviews, and other sources, you can understand public sentiment, track brand reputation, and make informed decisions based on customer feedback and market sentiment. </p>
                    </div>
                  </div>
        
                </div>
              </div>
              </div>


              <div className='whole-div'>  
            <h2>AI & ML solutions that provide value</h2>
      
            <div className='para'>
        <div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Increased productivity</h5>
              <p>Automating routine tasks using our AI/ML services means your employees can focus on more strategic and creative activities. By handling repetitive processes, AI & ML boosts overall productivity, leading to faster turnaround times and enhanced efficiency in business operations.</p>
            </div>
          </div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
              <div className='com-text'>
                <h5 style={{fontWeight:'600'}}>Enhanced decision-making</h5>
                <p>Identify patterns and trends that are not visible to the human eye and make informed strategic choices with our advisors. Applying AI development services leads to a data-driven approach, reduces risks and improves outcomes across various functions.</p>
            </div>
          </div>
        </div>

        <div style={{marginLeft:'80px'}}>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Lower operational costs</h5>
              <p>Across the financial services, telecommunications, sports betting and other industriesImplementing custom AI and ML solutions significantly reduces operational expenses. Automating tasks minimizes the need for extensive human labor, while ML-powered predictive maintenance prevents costly equipment failures and reduces downtime.</p>
            </div>
          </div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Personalized customer experiences</h5>
              <p>Along with analyzing existing data, AI can provide customized content, anticipate needs, and enhance user experience, by leveraging data analytics and machine learning to tailor interactions to individual preferences. Take advantage of our custom solutions, including chatbots, sentiment analysis, content generation, and search functions that engage and drive sales.</p>
            </div>
          </div>
          </div>

        </div>

        </div>



        <div className="Slider" style={{height: '450px'}}>
          <br /><br /><br /><br />
        <h1 style={{ marginLeft: '250px'}}>Who we've helped:-</h1>
        <div className="logos" style={{marginTop:'45px'}}>
        <div className="logos-slide">
            <img src={image1} alt="Logo 1" />
            <img src={image2} alt="Logo 2" />
            <img src={image3} alt="Logo 3" />
            <img src={image4} alt="Logo 4" />
            <img src={image5}alt="Logo 5" />
            <img src={image6} alt="Logo 6" />
          </div>
          <div className="logos-slide">
            <img src={image1} alt="Logo 1" />
            <img src={image2} alt="Logo 2" />
            <img src={image3} alt="Logo 3" />
            <img src={image4} alt="Logo 4" />
            <img src={image5}alt="Logo 5" />
            <img src={image6} alt="Logo 6" />
          </div>
        </div>
    </div>
<br /><br />



    





  



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
            <h3 className="row-head">Consulting phase </h3>
            <p className="row-para"> <b>Objective:</b> Understand a client's needs and determine the potential of AI/ML technology in meeting those needs. <br />
<b>Initial client meeting:</b> Ascertain specific use-cases according to our AI/ML Services. <br />   
<b>Evaluation:</b> Analyze current content and data infrastructure. Determine potential areas where AI/ML can add value for a client.  </p>
          </div>
        </div>
        <div className="first-number">
          <div className="row-number">  
            <p className="sc-505250e6-1">2</p>
          </div>
          <div className="row-des">
            <h3 className="row-head">Identifying Scope</h3>
            <p className="row-para"> <b>Objective:</b> Assess the suitability of AI/ML technology according to client's specific problems. <br />
                                    <b>Data & content assessment:</b> Understand the kind of data/content a client deals with and its volume. <br />
                                    <b>Problem Definition:</b> Define what a client wants to achieve through AI/ML Technology. Approach Selection: Decide how to use the chosen solution.</p>
          </div>
        </div>
        <div className="first-number">
          <div className="row-number">  
            <p className="sc-505250e6-1">3</p>
          </div>
          <div className="row-des">
            <h3 className="row-head">MVP (Minimum Viable Product)</h3>
            <p className="row-para"> <b>Objective:</b> Implement a basic version of the AI/ML solution to validate its efficacy. <br />
                                    <b>Setup:</b> Integrate the solution into a client's environment, possibly using cloud platforms or APIs. <br />
                                    <b>Prototype Development:</b> Create a simple implementation based on the defined use-case. <br />
                                    <b>Initial Testing:</b> Test the solution outputs, accuracy, and relevance. <br />
                                    <b>Feedback Collection:</b> Understand how end-users or stakeholders perceive its performance.

</p>
          </div>
        </div>
      </div>
      <div className="justify-table-number2">
        <div className="first-number">
          <div className="row-number">  
            <p className="sc-505250e6-1">4</p>
          </div>
          <div className="row-des">
            <h3 className="row-head">End-to-end Development</h3>
            <p className="row-para"><b>Objective:</b> Fully develop the AI/ML solution, incorporating MVP feedback. <br /> 
                                    <b>Fine-tuning (if permitted by the model):</b> Train the models on specific datasets to better suit a client's needs. <br />
                                    <b>Integration:</b> Ensure that the solution works seamlessly within a client's existing digital infrastructure. <br />
                                    </p>
          </div>
        </div>
        <div className="first-number">
          <div className="row-number">  
            <p className="sc-505250e6-1">5</p>
          </div>
          <div className="row-des">
            <h3 className="row-head"> Scaling</h3>
            <p className="row-para"><b>Infrastructure Enhancement:</b> Ensure that the infrastructure can handle more queries and data as usage grows. <br />
                                    <b>Parallel Processing:</b> Utilize techniques to handle multiple simultaneous requests. <br />
                                    <b>Deployment Strategies:</b> Decide on cloud vs on-premises deployments based on scale requirements.</p>
          </div>
        </div>
        <div className="first-number">
          <div className="row-number">  
            <p className="sc-505250e6-1">6</p>
          </div>
          <div className="row-des">
            <h3 className="row-head">Maintenance</h3>
            <p className="row-para"> <b>Objective:</b> Offer ongoing support and improvements for the AI/ML solution. <br />
                                    <b>Continuous Monitoring:</b> Track the solution performance and outputs. <br />
                                    <b>Regular Updates:</b> Implement updates or adjustments based on a specific client needs. <br />
                                    <b>User Feedback Loop:</b> Continuously gather feedback to identify areas for improvement.</p>
          </div>
        </div>
      </div>
    </div>




 
    <div className='whole-div' style={{marginTop:'100px' ,width:'100%', height:'500px' ,backgroundColor:'#F8F8F8'}}>  
            <h2>Companies choose us as their AI & ML development partner</h2>
      
            <div className='para'>
        <div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>A proven track record</h5>
              <p>With several successful projects completed, Software Mind is an ideally suited AI & ML development company with validated expertise across various industries and markets.</p>
            </div>
          </div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
              <div className='com-text'>
                <h5 style={{fontWeight:'600'}}>Cost-effective engineering</h5>
                <p>Develop an AI & ML project and maximize your return on investment (ROI) without compromising on quality and delivery timeline.</p>
            </div>
          </div>
        </div>

        <div style={{marginLeft:'80px'}}>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Leading AI & ML specialists</h5>
              <p>A cross-functional team of certified AI & ML experts provide guidance through all stages of your project, from concept to implementation and beyond.</p>
            </div>
          </div>

          <div className='com'>
            <div className='com_icon'><img src={checkbox} style={{width:'30px',height:'30px', marginTop:'10px',marginLeft:'10px'}} /></div>
            <div className='com-text'>
              <h5 style={{fontWeight:'600'}}>Time zone compatibility</h5>
              <p>With offices and engineers around the world, Software Mind provides 24/7 support for projects. We can take care of your AI & ML needs, so you can focus on your core business.</p>
            </div>
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


        <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Engineering and consultancy that deliver value</h2>



        <div style={{display:'flex'}}>
          <div className='gen'> 
            <img src={card1} alt="" height='300px' />
            <div className='gen_text'>
              Generative AI development services
            </div>
          
            <div className='TEXT' >
              Use generative AI models to stay  ahead of your competition.
            </div>
          </div>

          <div className='gen'> 
            <img src={card2} alt="" height='300px' />
            <div className='gen_text'>
              Cloud consulting & services
            </div>
          
            <div className='TEXT' >
            Accelerate your cloud migration strategy and develop cloud-native apps.
            </div>
          </div>

          <div className='gen'> 
            <img src={card3} alt="" height='300px' />
            <div className='gen_text'>
            Data science services
            </div>
          
            <div className='TEXT' >
            Operationalize data to drive efficiency, insights and decision-making. 
            </div>
          </div>
        </div>

        


        <h2 style={{marginTop:'100px', marginBottom:'60px'}}>Niche expertise that supports industries</h2>



        <div style={{display:'flex'}}>
          <div className='gen'> 
            <img src={card6} alt="" height='300px' />
            <div className='gen_text'>
            Telecom
            </div>
          
            <div className='TEXT'>
            Transform your telecommunication services with customized solutions for modern and legacy systems. 
            </div>
          </div>

          <div className='gen'> 
            <img src={card5} alt="" height='300px' />
            <div className='gen_text'>
            Biotech & Healthcare
            </div>
          
            <div className='TEXT' >
            Discover how to maximize the output of your R&D and grow your business with AI-tailored solutions. 
            </div>
          </div>

          <div className='gen'> 
            <img src={card4} alt="" height='300px' />
            <div className='gen_text'>
            Manufacturing
            </div>
          
            <div className='TEXT'>
            Enhance your manufacturing operations by turning to experts with proven expertise with Industry 4.0 tech.   
            </div>
          </div>
        </div>




      </section>





  

      
  </div>
  
 )
};
