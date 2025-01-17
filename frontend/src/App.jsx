
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './features/about/About';
import Course from './features/courses/Course';
import Solutions from './features/new_ solutions/Solutions';

import AtsMantra from './BridgetheGap/AtsMantra';
import CoconutERP from './BridgetheGap/CoconutERP';
import MicrosoftSolutions from './BridgetheGap/MicrosoftSolutions';
import RecruitmentServices from './BridgetheGap/RecruitmentServices';
import UI_UXDesign from './BridgetheGap/UI_UXDesign';
import ApplicationDevelopment from './BridgetheGap/ApplicationDevelopment';
import Discusswithus from './Discusswithus/Discusswithus';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, 
      children:[
        {
          path:"/about",
          element:<About></About>
        },
        
        {
          path:"/solutions",
          element:<Solutions></Solutions>
        },
        {
          path:"/applicationDevelopment",
          element:<ApplicationDevelopment/>
        },
        {
          path:"/UI_UXDesign",
          element:<UI_UXDesign/>
        },
        {
          path:"/RecruitmentServices",
          element:<RecruitmentServices/>
        },
        {
          path:"/MicrosoftSolutions",
          element:<MicrosoftSolutions/>
        },
        {
          path:"/CoconutERP",
          element:<CoconutERP/>
        },
        {
          path:"/AtsMantra",
          element:<AtsMantra/>
        },
       
      ]
    },
    {
      path:"/course",
      element:<Course></Course>
    },
    {
      path:"/Discusswithus",
      element:<Discusswithus/>
    }
  ]);

  return (
    <>     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
