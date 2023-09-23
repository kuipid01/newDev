/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import "./works.scss";
import { Link } from "react-router-dom";
const Work = () => {
  const name = [
    "C",
    "o",
    "d",
    "e",
    "d",
    " -",
    "A",
    " -",
    "S",
    "c",
    "h",
    "o",
    "o",
    "l",
    "- ",
    "W",
    "e",
    "b",
    "s",
    "i",
    "t",
    "e",
  ];
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
    // exit:(i) =>  ({
    //     y:'-80px',

    // transition:{duration:0.8,ease:[0.76,0,0.24,1], delay:0.05*i}

    // })
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
    window.scrollTo({ top: 0});
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div ref={workRef} className="workContainer">
      <Link to='/'>
          <BiArrowBack className="backArrow" />
        </Link>
        <motion.div variants={textSlide} animate="enter" className="textAnim">
          {name.map((t) => (
            <motion.span
              variants={letter}
              initial="initial"
              animate="animate"
              key={t}
            >
              {" "}
              {t}
            </motion.span>
          ))}
          {/* {text} */}
        </motion.div>

        {/* <motion.h1  custom={index} className="projectName">Coded A School Website</motion.h1> */}
        <motion.img
          initial={{ width: "30%", height: "300px" }}
          animate={{ width: "100%", height: "400px" }}
          transition={{duration:.4,ease:[0.76,0,0.24,1],delay:.2 }}
          className="projectMainImg"
          src="/hompeageBg.png"
          alt=""
        />

        <div className="liveSiteLink">
          {" "}
          <small>Live Link</small>
          <i></i>{" "}
        </div>
        <p className="projectText">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          aspernatur autem nesciunt, iusto nulla officiis nisi quaerat in
          accusamus pariatur totam provident ipsam molestiae quia architecto,
          velit est porro enim, qui excepturi quam eveniet quod vero numquam!
          Perferendis, molestiae doloremque dolores voluptatum cupiditate
          aspernatur corrupti, ex dolorem autem vel hic, ad eveniet at?
          Consequuntur, molestias hic magnam delectus molestiae corporis placeat
          excepturi aliquid maiores architecto, provident error. Vitae, quae
          tempore temporibus aspernatur dolorum culpa saepe repudiandae
          inventore libero suscipit impedit recusandae optio nostrum hic.
          Architecto beatae voluptatum magni unde. Placeat itaque quasi deleniti
          assumenda vel autem minima sed voluptatem minus!{" "}
        </p>
      </div>
    </AnimatePresence>
  );
};

export default Work;
