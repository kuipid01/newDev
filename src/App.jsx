/* eslint-disable no-unused-vars */

import "./App.scss";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contactus/Contact";

import Home from "./pages/home/Home";
import { ScrollRestoration } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Work from "./pages/work/Work";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./pages/portfolio/Portfolio";




function App() {
  

  const Layout = () => {
    return (
      <div >
      <ScrollRestoration />
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
          element: <About k/>,
        },
        
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
         
        {
          path: "/work/:id",
          element: <Work />,
        },
      ],
    },
   
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
