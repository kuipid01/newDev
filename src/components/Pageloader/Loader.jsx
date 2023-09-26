/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import "./loader.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
const Loader = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [width, setwidth] = useState(window.innerWidth);
  // const [loding, setloding] = useState(false);
  const [pageLoaing, setpageLoaing] = useState(true);
  const [height, setHeight] = useState();
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
    const hanleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", hanleResize);
    return () => {
      window.removeEventListener("resize", hanleResize);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setpageLoaing(false);
      // document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
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
  const initialPath = `M0,0  Q${width / 2},${width / 3.5} ${width}, 0 Z `;
  const targetPath = `M-${width * 3},0  Q${width * 0},0 ${width * 3}, 0 Z`;

  const slieUp = {
    initial: {
      y: "0%",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      y: "-100%",
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const LoaerVariant = {
    enter: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: targetPath,
      y: "-20%",
      transition: { duration: 2.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  //   console.log(textIndex);
  return (
    <>
      <motion.div
        variants={slieUp}
        initial="initial"
        animate="enter"
        exit="exit"
        key={1}
        className={`loading`}
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
        <svg width="100%" height="100vh">
              <motion.path
                variants={LoaerVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                fill="#886D72"
              />
            </svg>
      </motion.div>
   

    </>
  );
};

export default Loader;
