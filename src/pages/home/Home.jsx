/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Works from "../../components/Works/Works";
import Loader from "../../components/Pageloader/Loader";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "../../components/Profile/Profile";
import Contact from "../../components/Contactus/Contact";

const Home = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
      document.body.style.cursor='default'
window.scrollTo(0,0)
    }, 1400);
  }, []);  

  return (
    <div className="homecontainer">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div>
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      <>
        <Header />
        <Profile/>
        <Works />
        <Contact/>
      </>
      {/* <OverlayCircle/> */}
    </div>
  );
};

export default Home;
