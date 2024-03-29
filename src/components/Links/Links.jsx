/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./links.scss";
import { slide } from "../../anim";
const Links = ({ link, index ,setMenuOpen}) => {
  return (
    <motion.a
      variants={slide}
      animate="enter"
      custom={index}
      exit="exit"
      initial="initial"
      className="link"
      href={`#${link.name}`}
      onClick={() => setMenuOpen(false)}
    >
      {link.name}
    </motion.a>
  );
};

export default Links;
