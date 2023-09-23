/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./navbar.scss";
import Links from "../Links/Links";
import { motion } from "framer-motion";
import { menuSlide } from "../../anim";
import CurveX from "../curvex/CurveX";
const Navbar = () => {
  const Navlinks = [
    {
      name: "Home",
      id: 1,
      link: "/",
    },
    {
      name: "About",
      id: 2,
      link: "/abot",
    },
    {
      name: "Contact",
      id: 2,
      link: "/contact",
    },

    {
      name: "Portfolio",
      id: 2,
      link: "/portfolio",
    },
  ];
  return (
    
   
      <motion.nav
      animate="enter"
      initial="initial"
      exit="exit"
      variants={menuSlide}
      className="sideBar">
        {Navlinks.map((link, index) => (
          <Links key={link.id} link={link} index={index} />
        ))}
              <CurveX/>
      </motion.nav>

  );
};

export default Navbar;
