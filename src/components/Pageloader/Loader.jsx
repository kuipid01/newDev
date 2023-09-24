/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import "./loader.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
const Loader = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [dimension, setDimension] = useState({width:0,height:0});
  const textArray = ["welcome", "kuipid", "messi", "peter obi"];
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setTextIndex((prev) => (prev === textArray.length - 1 ? 0 : prev + 1));
      },
      textIndex === 0 ? 100 : 500
    );

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
useEffect(() => {
  setDimension({width:window.innerWidth, height:window.innerHeight})
}, [])
  const textVariant = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
    },
  };
  const slideUp = {
    initial: {
      y: "0%",
    },

    exit: {
      y: "-100%",
      transition: { duration: .8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2}  ${dimension.height * 300} 0 ${dimension.height} L0 0 `; // Flat initial path
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2}   ${dimension.height } 0 ${dimension.height} L0 0 `; // Flat initial path


  
  const curve = {
    initial: {
      d: initialPath,
    },


    exit: {
      d: targetPath,

      transition: { duration: .8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  //   console.log(textIndex);
  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        exit="exit"
        className="loader"
      >
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          className="text"
          // key={textArray[textIndex]}
        >
          {textArray[textIndex]}
        </motion.div>
      </motion.div>
      {/* <svg className="svgLoader">
        <motion.path
        //   variants={curve}
        //   initial="initial"
        //   animate="enter"
        //   exit="exit"
        //    fill="blue"
  stroke="blue"
  stroke-width="2"
          d={targetPath}
        ></motion.path>
      </svg> */}
     <motion.svg className='svgLoader' >
  <motion.path variants={curve} initial='initial' exit='exit' d={initialPath} fill='blue' />
</motion.svg>

    </>
  );
};

export default Loader;
