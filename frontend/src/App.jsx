
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
import SecoundHeader from './features/secoundHeader/SecoundHeader';
import Room from './features/videocall/Room';
import Ui_Ux from './features/services/services_pages/ui_ux/Ui_Ux';
import Cloud from './features/services/services_pages/colud/Cloud';
import Software from './features/services/services_pages/software/Software';



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
    },
    {
      path:"/SecoundHeader",
      element:<SecoundHeader/>
    },
    {
      path:"/videocall",
      element:<Room></Room>
    },
    {
      path:"/ui",
      element:<Ui_Ux></Ui_Ux>

    },
    {
      path:"/cloud",
      element:<Cloud/>
    },
    {
      path:"/software",
      element:<Software></Software>

    }
    
  ]);

  return (
    <>     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
