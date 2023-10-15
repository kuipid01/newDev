/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./works.scss";
import Button from "../Button/Button";
import { motion,AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Works = () => {
  const [screenSize, setScreenSize] = useState('medium');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const {data} = await axios.get('https://devkuipid.onrender.com/project/')
        if (data) {
          console.log(data)
          setProjects(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
fetchProjects()
  }, [])
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 768) {
        setScreenSize('mobile');
      } else if (width <= 992) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    }

    // Initial call to set the initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [recentProject, setRecentProject] = useState(true);
  const [selectedProject, setSelectedProject] = useState([]);
  const [hoverIndex, sethoverIndex] = useState(null);
  const [hoverWorksIndex, setHoverWorksIndex] = useState(null);
  const customEase = [0.4, 0.0, 0.2, 1];
  const hoverEnterHandler = (i) => {
    sethoverIndex(i);
  };
  const hoverLeaveHandler = () => {
    sethoverIndex(null);
  };
  const [workHandlesArr, setWorkHandlesArr] = useState([
    {
      id: 1,
      text: "Recent",
      pageOn: true,
    },
    {
      id: 2,
      text: "Web Design",
      pageOn: false,
    },
    {
      id: 3,
      text: "Ui/Ux",
      pageOn: false,
    },
    {
      id: 4,
      text: "Branding",
      pageOn: false,
    },
  ]);
  const setHoverJobIndex = (id) => {
    setHoverWorksIndex(id);
  };
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Portfolio Website",
  //     description:
  //       "My personal portfolio website showcasing my web development work.",
  //     category: "Web Development",
  //     categoryId: 1,
  //     categoryImage: "https://example.com/category-image-1.jpg",
  //     link: "https://example.com/portfolio",
  //   },
  //   {
  //     id: 2,
  //     title: "E-commerce Website",
  //     description: "An online store for selling various products.",
  //     category: "Web Development",
  //     categoryId: 1,
  //     categoryImage:
  //       "https://images.unsplash.com/photo-1673086636045-9aa873babc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     link: "https://example.com/e-commerce",
  //   },
  //   {
  //     id: 3,
  //     title: "UI/UX Redesign",
  //     description:
  //       "A redesign of a popular app's user interface for better user experience.",
  //     category: "UI/UX",
  //     categoryId: 2,
  //     categoryImage:
  //       "https://images.unsplash.com/photo-1694240347835-99a565575138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     link: "https://example.com/ui-ux-redesign",
  //   },
  //   {
  //     id: 4,
  //     title: "Branding Campaign",
  //     description:
  //       "A branding campaign for a new startup, including logo design and branding materials.",
  //     category: "Branding/Product Design",
  //     categoryId: 3,
  //     categoryImage:
  //       "https://images.unsplash.com/photo-1673086636045-9aa873babc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     link: "https://example.com/branding-campaign",
  //   },
  //   {
  //     id: 5,
  //     title: "Branding Campaign",
  //     description:
  //       "A branding campaign for a new startup, including logo design and branding materials.",
  //     category: "Branding/Product Design",
  //     categoryId: 3,
  //     categoryImage:
  //       "https://images.unsplash.com/photo-1673086636045-9aa873babc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     link: "https://example.com/branding-campaign",
  //   },
  //   // Add more projects here
  // ];

  const branding = projects.filter(
    (item) => item.jobCategory === "Branding/Product Design"
  );
  const webDev = projects.filter((item) => item.jobCategory === "Web Development");
  const ui = projects.filter((item) => item.jobCategory === "UI/UX");
  const element = useRef(null)
const {scrollYProgress} = useScroll ({
  target:element,
  offset: ["start end", "end start"]
})
  const x2 = useTransform(scrollYProgress, [0, 0.9], screenSize === 'mobile' ? [20, 0] : [40, 0]);
  // console.log(branding)
  const setAsPageOn = (i) => {
    console.log(selectedProject);
    if (i === 1) {
      setRecentProject(true);
    } else {
      setRecentProject(false);
    }
    if (i === 2) {
      setSelectedProject(webDev);
    }
    if (i === 3) {
      setSelectedProject(ui);
    }
    if (i === 4) {
      setSelectedProject(branding);
    }
    setWorkHandlesArr((prevArr) =>
      prevArr.map((item) =>
        item.id === i ? { ...item, pageOn: true } : { ...item, pageOn: false }
      )
    );
  };
  return (
    <div ref={element} className="WorksContainer">
      <p className="headerText">Recent Works</p>
      <ul className="workHandles">
        {workHandlesArr.map((item) =>
          item ? (
            <li
              onClick={() => setAsPageOn(item.id)}
              className={` ${item.pageOn ? "trueBorder" : ""}`}
              key={item.id}
            >
              {item.text}
            </li>
          ) : null
        )}
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>

      {recentProject ? (
        <AnimatePresence mode="wait">
          {
            screenSize!=="mobile" ? 
          
          <div  className='worksContainer'>
            <div className="left">
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -"100px", opacity: 0 }}
                key={0}
                transition={{ duration: 0.6 }}
                onMouseLeave={() => hoverLeaveHandler()}
                onMouseOver={() => hoverEnterHandler(0)}
                className="work"
              >
                <div className={`hover ${hoverIndex === 0 ? "true" : ""}`}>
                  <p>Details-</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1694682845794-5054f706b885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ x: "100px", opacity: 0 }}
                animate={{ x: 0, opaxcity: 1 }}
                exit={{ x: -"100px", }}
                key={1}
                transition={{ duration: 0.6 }}
                onMouseLeave={() => hoverLeaveHandler()}
                onMouseOver={() => hoverEnterHandler(1)}
                className="work"
              >
                <div className={`hover ${hoverIndex === 1 ? "true" : ""}`}>
                  <p>Details-</p>
                </div>
                <img src="work1.png" alt="" />
              </motion.div>
            </div>
            <div className="center">
              <motion.div
                initial={{ y: "-100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100px", }}
                key={2}
                transition={{ duration: 0.5 }}
                onMouseLeave={() => hoverLeaveHandler()}
                onMouseOver={() => hoverEnterHandler(2)}
                className="centerWork"
              >
                <div className={`hover ${hoverIndex === 2 ? "true" : ""}`}>
                  <p>Details-</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1694240347835-99a565575138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100px",}}
                key={2}
                transition={{ duration: 0.5 }}
                onMouseLeave={() => hoverLeaveHandler()}
                onMouseOver={() => hoverEnterHandler(3)}
                className="centerWork"
              >
                <div className={`hover ${hoverIndex === 3 ? "true" : ""}`}>
                  <p>Details-</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1673086636045-9aa873babc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </motion.div>
            </div>
            <div className="right">
              <motion.div
                initial={{ x: "-100px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100px", }}
                key={4}
                transition={{ duration: 0.6 }}
                onMouseLeave={() => hoverLeaveHandler()}
                onMouseOver={() => hoverEnterHandler(4)}
                className="rightWork"
              >
                <div className={`hover ${hoverIndex === 4 ? "true" : ""}`}>
                  <p>Details-</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1694758086814-423e0c0d45b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </motion.div>
            </div>
          </div> : <div className="mobile">
{
  projects?.slice(0,9).map((item )=> (
    <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -"100px", }}
                transition={{ duration: 0.6 }}
                // duration={{20}}
                onMouseLeave={() => setHoverWorksIndex(null)}
                onMouseEnter={() => setHoverJobIndex(item._id)}
                key={item.id}
                className="work"
              >
                <div
                  className={`hover ${
                    hoverWorksIndex === item._id ? "true" : ""
                  }`}
                >
                 <Link to={`/work/${item?._id}`} style={{color:'white'}}> <p>Details-</p></Link>
                </div>
                <img src={item.projectImage} alt="" />
              </motion.div>
  ))
}
          </div>
}
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <div  className="otherWorks">
            {selectedProject.map((item) => (
              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -"100px", }}
                transition={{ duration: 0.6 }}
                // duration={{20}}
                onMouseLeave={() => setHoverWorksIndex(null)}
                onMouseEnter={() => setHoverJobIndex(item._id)}
                key={item._id}
                className="work"
              >
                <div
                  className={`hover ${
                    hoverWorksIndex === item._id ? "true" : ""
                  }`}
                >
                 <Link to={`/work/${item?._id}`} style={{color:'white'}}> <p>Details-</p></Link>
                </div>
                <img src={item.projectImage} alt="" />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}

      <div  className="btn">
        <Link to='/portfolio'>
      
        <Button text="Check all" darkBtn={true} />
        </Link>
      </div>
      <motion.div  style={{ height: x2 }} className='circleOuter'>
        <div className="circle">    </div>
    </motion.div>
    </div>
  );
};

export default Works;
