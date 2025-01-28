
import './CourseMain.css'
import CouserLeftbar from './couserleftbar/CouserLeftbar'
import CourseHeader from './courseHeader/CourseHeader'
import { Outlet } from 'react-router-dom'

export default function CourseMain() {
  return (
    <div>
      <CourseHeader></CourseHeader>
      <div className="coursemainheader">
        <div className="coursemainheader-left-side">
          <CouserLeftbar></CouserLeftbar>
        </div>
        <div className="coursemainheader-right-side">
          <div className="coursemainheader-scroll">
            <Outlet></Outlet>
          </div>

        </div>
      </div>
      
    </div>
  )
}
