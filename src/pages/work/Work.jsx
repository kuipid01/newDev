/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./works.scss";

const Work = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(
          `https://devkuipid.onrender.com/project/${id}`
        );
        if (data) {
          setProject(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [id]);

  const [charArray, setCharArray] = useState([]);

  useEffect(() => {
    if (project) {
      setCharArray(splitStringToCharArray(project.projectTitle));
    }
  }, [project]);

  const splitStringToCharArray = (inputString) => {
    return [...inputString];
  };

  const textSlide = {
    enter: {
      y: "0",
      transition: {
        delayChildren: 1,
        staggerChildren: 0.04,
        staggerDirection: -1,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const letter = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
    },
  };

  const workRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {project ? (
        <div ref={workRef} className="workContainer">
          <div onClick={handleClick} className="back">
            <BiArrowBack className="backArrow" />
          </div>
          <motion.div variants={letter} animate="enter" className="textAnim">
            {project?.projectTitle}
          </motion.div>
          <motion.div
            initial={{ width: "30%", height: "300px" }}
            animate={{ width: "100%", height: "400px" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="imgCont"
          >
            <motion.img
              className="projectMainImg"
              src={project.projectImage}
              alt=""
            />
          </motion.div>

          <div className="liveSiteLink">
            <a target="_blank" rel="noreferrer" href={project.projectLink}>
              <small>Live Link</small>
            </a>
            <i></i>
          </div>
          <p className="projectText">{project.projectDescription}</p>
        </div>
      ) : (
        "Loading"
      )}
    </AnimatePresence>
  );
};

export default Work;
