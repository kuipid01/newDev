/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./links.scss";
import { slide } from "../../anim";
const Links = ({ link, index }) => {
  return (
    <motion.div
      variants={slide}
      animate="enter"
      custom={index}
      exit="exit"
      initial="initial"
      className="link"
    >
      {link.name}
    </motion.div>
  );
};

export default Links;
