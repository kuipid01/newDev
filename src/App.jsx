/* eslint-disable no-unused-vars */

import "./App.scss";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contactus/Contact";

import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Work from "./pages/work/Work";
import Navbar from "./components/Navbar/Navbar";




function App() {
  

  const Layout = () => {
    return (
      <div >
      
      {/* <Navbar/>   */}
           
            <Outlet />
      
    <Footer/> 
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        
        {
          path: "/contact",
          element: <Contact />,
        },
       
         
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
   
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
