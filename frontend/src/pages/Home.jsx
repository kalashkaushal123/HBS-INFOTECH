import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../comman/Header';
import Footer from '../comman/Footer';
import About from '../features/about/About';
import Course from '../features/courses/Course';
import Solutions from '../features/new_ solutions/Solutions';
import microsoftpng from '../assets/icons/microsoft.png'
import  down from '../assets/icons/dwn.png'
import coconut from '../assets/icons/coconut.png'
import './Home.css'
export default function Home() {
  const [showWrapper, setShowWrapper] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    
    if (location.pathname === '/about' || location.pathname === '/course' || location.pathname === '/solutions') {
      setShowWrapper(false);
    } else {
      setShowWrapper(true);
    }
  }, [location]);


  // syed Works start
  let oneview=useRef();
	let twoview=useRef();
	let threeview=useRef();


	useEffect(() => {
		console.log(oneview,'o');
		console.log(twoview,'t');
		console.log(threeview,'---ueseffect-----start---------');
		// oneview.current.style.display='block'
		
		one()
	}, []);

	function one() {
			oneview.current.style.display='block'
			setTimeout(() => {
				// oneview.current.style.display='none'
				oneview.current.style.display='none'
				// threeview.current.style.display='none'	
				two()
			}, 6000);
	}

	function two() {
		twoview.current.style.display='block'
		setTimeout(() => {
			// oneview.current.style.display='none'
			twoview.current.style.display='none'
			// threeview.current.style.display='none'	
			three()
		}, 6000);
}

	
	function three() {
		threeview.current.style.display='block'
			setTimeout(() => {
				// oneview.current.style.display='none'
				threeview.current.style.display='none'
				// threeview.current.style.display='none'	
				one()
			}, 6000);
		
	}
 
  // syed Works end

  return (
    <div>
      <Header />

      {/* Outlet for nested routing */}
      <Outlet />

      {showWrapper && (
        <>
          <div className='' 
                style={{backgroundImage:`url(https://www.rarrtech.com/static/media/backgroundimg.16a86810b2614911e6b8.png)`,
                height: '600px'}}>
                    <div ref={oneview} style={{backgroundColor:'transparent',display:"none"}}>
                          <div className="scrolling-container " style={{display:'flex'}}> 	
                            
                            <div className='scrolling-text ms-5'>
                              <img width='170px' height='170px' className=''  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIwSURBVHgB7dqhDQJBFEXRHRyKoGmAdggN0RChAUqgDTRBI6ACbtaNOUd/93LdH+/T4bswxe72HGvuLo+jjSbZLMBfAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCAQAAAAAAAABgpbFcX9+FOc77sebsc9/aaBK/WBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQCQSAQBAJBIBAEAkEgEAQC4QcpRw2tyQSMQgAAAABJRU5ErkJggg=="  alt="Microsoft" />   
                            </div>

                            <div htmlFor='' className="fs-1 sr " > 
                              <label htmlFor='' className="sc ps-2 display-1 text-white" style={{ fontWeight:"bolder"}}>Microsoft Solutions <br/>
                                <p style={{fontSize:"2rem"}} className='text-white'>Dynamics CRM . Azure . Office 365</p>
                              </label>
                            </div>
                          
                          </div>
                    </div>
                

                  <div ref={twoview} style={{backgroundColor:'transparent',display:"none"}}>
                      <div className="scrolling-container " style={{display:'flex'}}> 	
                        <div className='scrolling-text '>
                          <img width='170px' height='170px' src="data:image/png;base64,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"  alt="Microsoft" />   
                        </div>	

                        <div htmlFor='' className="fs-1 sr " > 
                              <label htmlFor='' className="sc ps-2 display-1 text-white" style={{ fontWeight:"bolder"}}>Recruitment <br/>
                                <p style={{fontSize:"2rem"}} className='text-white'>Unleashing Talent Through Tech</p>
                              </label>
                            </div>
                      </div>
                  </div>


                  <div ref={threeview}  style={{backgroundColor:'transparent',display:"none"}}>
                        <div className="scrolling-container " style={{display:'flex'}}> 	
                          <div className='scrolling-text '>
                          <img width='170px' height='170px' className=''  src="https://www.rarrtech.com/static/media/RarrTech123Q.328ac545462ed264c1f9.png"  alt="Microsoft" />   
                          </div>	
                          <div htmlFor='' className="fs-1 sr " > 
                              <label htmlFor='' className="sc ps-2 display-1 text-white" style={{ fontWeight:"bolder"}}>AtsMantra <br/>
                                <p style={{fontSize:"2rem"}} className='text-white'>atsMantra Empowering Recruitment</p>
                              </label>
                            </div>

                        

                        
                        </div>
                  </div>
          </div>
            <About />
        </>
       
      )}
      <Solutions />

      <Footer />
    </div>
  );
}
