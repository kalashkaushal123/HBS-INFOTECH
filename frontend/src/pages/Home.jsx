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
        className="main m-0 p-0"
        style={{
          height: "50rem",
          width: "100%",
          backgroundColor: "#062a6c",
        }}
      >

        
      </div>
      <About/>
      <Course/>
      <Solutions/>

      <Footer />
    </div>
  );
}
