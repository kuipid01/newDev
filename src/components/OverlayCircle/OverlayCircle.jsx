/* eslint-disable no-unused-vars */
import './circle.scss'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
const OverlayCircle = () => {
const element = useRef(null)
const {scrollYProgress} = useScroll ({
  target:element,
  offset: ["start end", "end end"]
})
const x2 = useTransform(scrollYProgress, [0, 1], [5, 0]); // Translate by 300px

  return (
    <motion.div  style={{ height: x2 }} className='circleOuter'>
        <div className="circle">    </div>
    </motion.div>
  )
}

export default OverlayCircle