/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./footer.scss";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
const Footer = () => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]); // Translate by 300px

  return (
    
    <div  ref={element} className="footer">
      <div className="top">
        <div className="text">
          <span>
            <img
              src="https://cdn.dribbble.com/users/9684942/screenshots/17172912/media/f25d5f110fe625834453c114c46004fc.jpg?resize=1000x750&vertical=center"
              alt=""
            />{" "}
            <span>Lets work</span>
          </span>
          <p>together</p>
        </div>
        <div className="line">
          <div className="lineinner"></div>
          <motion.div style={{x}} 
              className="aboutMe">
            <Link>Message Me</Link>
          </motion.div>
        </div>
        <div className="details">
          <span> <a href="mailto: kuipid01@gmail.com?subject=Hello%20from%20your%20website"> kuipid01@gmail.com</a>
</span>
          <span><a href="tel:+234915701669">+234-915701669</a>
</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
