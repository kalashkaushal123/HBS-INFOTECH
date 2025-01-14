import Header from '../comman/Header';
import Footer from '../comman/Footer';
import { Outlet } from 'react-router-dom';
import About from '../features/about/About';
import Course from '../features/courses/Course';
import Solutions from '../features/new_ solutions/Solutions';

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <div
      >
        <div className='wrapper'>
        <div class="content">
<div className='box'>
                <div className="content-img">
                    <img src="img/icons/microsoft.png"></img>
                </div>
                <h1 className="heading">Microsoft Solutions<span
                        class="head-clr">Dynamics CRM . Azure . Office
                        365</span></h1>
            </div>
            </div>
            </div>
        
      </div>
      <About/>
      <Course/>
      <Solutions/>

      <Footer />
    </div>
  );
}
