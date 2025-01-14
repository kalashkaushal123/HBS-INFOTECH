
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './features/about/About';
import Course from './features/courses/Course';
import Solutions from './features/new_ solutions/Solutions';

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
          path:"/course",
          element:<Course></Course>
        },
        {
          path:"/solutions",
          element:<Solutions></Solutions>
        }
      ]
    },
  ]);

  return (
    <>
     
      <RouterProvider router={router} />
    </>
  );
}

export default App;
