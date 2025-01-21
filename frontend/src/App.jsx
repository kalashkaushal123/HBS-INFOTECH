
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
import Ai from './features/services/services_pages/AIml/Ai';
import DataEngineer from './features/services/services_pages/Data_engineer/DataEngineer';
import DigitalTransfrommation from './features/services/services_pages/Digital_transformation/DigitalTransfrommation';
import Mobile from './features/services/services_pages/mobile/Mobile';
import Devops from './features/services/services_pages/Devops.jsx/Devops';
import Automation from './features/services/services_pages/Automation/Automation';
import DevelopmentTeams from './features/services/services_pages/DevelopmentTeams/DevelopmentTeams';
import EmbeddedSoftware from './features/services/services_pages/EmbeddedSoftware/EmbeddedSoftware';
import IdentityandAccess from './features/services/services_pages/IdentityandAccess/IdentityandAccess';
import SoftwareAuditing from './features/services/services_pages/SoftwareAuditing/SoftwareAuditing';
import SecurityAudit from './features/services/SecurityAudit/SecurityAudit';
import NearshoringServices from './features/services/services_pages/NearshoringServices/NearshoringServices';



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

    },
    {
      path:"/ai",
      element:<Ai></Ai>
    },
    {
      path:"/dataengineering",
      element:<DataEngineer></DataEngineer>
    },
    {
      path:"/digitaltransformation",
      element:<DigitalTransfrommation></DigitalTransfrommation>
    },
    {
      path:"/mobile",
      element:<Mobile></Mobile>
    },
    {
      path:"/devops",
      element:<Devops></Devops>
    },
    {
      path:"/automation",
      element:<Automation></Automation>
    },
    {
      path:"/devlopment_team",
      element:<DevelopmentTeams></DevelopmentTeams>
    },
    {
      path:"/embeddedsoftware",
      element:<EmbeddedSoftware></EmbeddedSoftware>

    },
    {
      path:"/IdentityandAccess",
      element:<IdentityandAccess></IdentityandAccess>
    },
    {
      path:"/softwareauditing",
      element:<SoftwareAuditing></SoftwareAuditing>
      
    },
    {
      path:"/securityaudit",
      element:<SecurityAudit></SecurityAudit>
    },
    {
      path:"/nearshoringservices",
      element:<NearshoringServices></NearshoringServices>
    }
    
  ]);

  return (
    <>     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
