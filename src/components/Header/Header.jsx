/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./header.scss";
import Navbar from "../Navbar/Navbar";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../Button/Button";
import { ScrollTrigger } from "gsap/all";
import { AnimatePresence } from "framer-motion";
import CurveX from "../curvex/CurveX";

const Header = () => {
  const slider = useRef(null);
  const firstText = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          // Update the direction variable
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div id="home" className="main">
      <div className="bgOverlayHeader"></div>
      <AnimatePresence mode="wait">{menuOpen && <Navbar setMenuOpen={setMenuOpen} />}</AnimatePresence>

      <img src="/hompeageBg.png" />
      <div className="logo">
        <img src="/logoPng.png" alt="" />
        <p>Kuipid</p>
      </div>
      <div className="sliderContainer">
        <div className="slider" ref={slider}>
          <p ref={firstText}>Adegoke Stephen Busayo -</p>
          <p ref={secondText}>Adegoke Stephen Busayo -</p>
        </div>
      </div>
      <div className="icons">
        <img src="/insta1.png" alt="" />  
        <a href="https://twitter.com/JustKuipid">
          {" "}
          <img src="/twitter.png" alt="" />{" "}
        </a>

        <img src="/dribble.png" alt="" />
      </div>
      <div className="btns">
        <a href="tel:+234915701669">
          <Button darkBtn={true} text={"Contact Me"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/uc?export=download&id=https://docs.google.com/document/d/1-NHdzlI1bHeW9wppO-TmtaRwenjIm8kO/edit?usp=drivesdk&ouid=109650102868349904891&rtpof=true&sd=true">
          {" "}
          <Button darkBtn={false} text={"Portfolio"} />
        </a>
      </div>
      <div onClick={() => setMenuOpen(!menuOpen)} className="burgerMen">
        <div className={` ${menuOpen ? "menOpen" : "burger"}`}></div>
      </div>
    </div>
  );
};

export default Header;
