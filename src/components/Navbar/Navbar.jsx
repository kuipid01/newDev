/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./navbar.scss";
import Links from "../Links/Links";
import { motion } from "framer-motion";
import { menuSlide } from "../../anim";
import CurveX from "../curvex/CurveX";
const Navbar = ({setMenuOpen}) => {
  const Navlinks = [
    {
      name: "home",
      id: 1,
      link: "/",
    },
    {
      name: "about",
      id: 2,
      link: "/about",
    },
    {
      name: "contact",
      id: 3,
      link: "/contact",
    },

    {
      name: "portfolio",
      id: 4,
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
          <Links setMenuOpen={setMenuOpen} key={link.id} link={link} index={index} />
        ))}
              <CurveX/>
      </motion.nav>

  );
};

export default Navbar;
