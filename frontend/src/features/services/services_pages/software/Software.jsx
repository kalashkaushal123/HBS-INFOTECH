import './software.css'

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

export default function Software() {
  return (
    <>
        {/* <div className='First-Image'>
          <div className='main_div'>
            <img src={main_image} alt="" className='main_image' />
            <div className="gradient"></div>
          </div>
        </div> */}

        <div className='custom-software'>

          <div className='software-flex'>
            <div className='tailored-software'>
              <h2>Tailored software engineering that gives you an edge</h2>
            </div>
            <div className='diverse-software'>
              <p>Diverse skillsets and domain knowledge enable our cross-functional teams to deliver value from day one.</p>
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

            <div className='stages'>
            <div className='stages-number-1'>

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

            <div className='stages-number-2'>

              <div className='stage-1 two'>
                <div className='stage-img'>
                  <p>02</p>
                </div>
                <div className='stage-text'>
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




          {/* marquee */}






          </div>
          

        </div>

        <section className='marquee-1'>
          <h2>Who we've helped</h2>

          <marquee>
            <ul>
              <li> <img src={marquee1} alt='' /> </li>
              <li> <img src={marquee2} alt='' /> </li>
              <li> <img src={marquee3} alt='' /> </li>
              <li> <img src={marquee4} alt='' /> </li>
              <li> <img src={marquee5} alt='' /> </li>
              <li> <img src={marquee6} alt='' /> </li>
              <li> <img src={marquee7} alt='' /> </li>
              <li> <img src={marquee8} alt='' /> </li>
            </ul>
          </marquee>

        </section> 
 
      
    </>
  )
}
