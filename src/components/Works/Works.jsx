/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./works.scss";
import Button from "../Button/Button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Works = () => {
  const [screenSize, setScreenSize] = useState("medium");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://devkuipid.onrender.com/project/"
        );
        if (data) {
          console.log(data);
          setProjects(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 768) {
        setScreenSize("mobile");
      } else if (width <= 992) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    }

    // Initial call to set the initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
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

  const branding = projects.filter(
    (item) => item.jobCategory === "Branding/Product Design"
  );
  const webDev = projects.filter(
    (item) => item.jobCategory === "Web Development"
  );
  const ui = projects.filter((item) => item.jobCategory === "UI/UX");
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end start"],
  });
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.9],
    screenSize === "mobile" ? [20, 0] : [40, 0]
  );
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
              key={item.id}>
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
          <div className="mobile">
            {projects?.map((item) => (
              <motion.div
                initial={{ scale: .3, opacity: 0 }}
                animate={{ scale:1, opacity: 1 }}
                exit={{ y: -"100px" }}
                transition={{ duration: 0.6 }}
                // duration={{20}}
                onMouseLeave={() => setHoverWorksIndex(null)}
                onMouseEnter={() => setHoverJobIndex(item._id)}
                key={item.id}
                className="work">
                <img src={item.projectImage} alt="" />

                <p className="projectText">{item?.projectDescription.substring(0,100)}</p>
                
                  <div className="liveSiteLink">
                    <a target="_blank" rel="noreferrer" href={item.projectLink}>
                      <small>Live Link</small>
                    </a>
                    <i></i>
                  </div>
               
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <div className="mobile">
            {selectedProject.length === 0 && <p>No Project in this category</p>}
            {selectedProject.map((item) => (
             
                <motion.div
                initial={{ scale: .3, opacity: 0 }}
                animate={{ scale:1, opacity: 1 }}
                exit={{ y: -"100px" }}
                transition={{ duration: 0.6 }}
                // duration={{20}}
                onMouseLeave={() => setHoverWorksIndex(null)}
                onMouseEnter={() => setHoverJobIndex(item._id)}
                key={item.id}
                className="work">
                <img src={item.projectImage} alt="" />

                <p className="projectText">{item?.projectDescription.substring(0,100)}</p>
                
                  <div className="liveSiteLink">
                    <a target="_blank" rel="noreferrer" href={item.projectLink}>
                      <small>Live Link</small>
                    </a>
                    <i></i>
                  </div>
               
              </motion.div>
          
            ))}
          </div>
        </AnimatePresence>
      )}

      <div className="btn">
        <Link to="/portfolio">
          <Button text="Check all" darkBtn={true} />
        </Link>
      </div>
      {/* <motion.div style={{ height: x2 }} className="circleOuter">
        <div className="circle"> </div>
      </motion.div> */}
    </div>
  );
};

export default Works;
