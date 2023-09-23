/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const arr = [1, 2, 3];
  return (
    <>
      <div className="aboutpage">
        <div className="title">
          <h1>Who am i?</h1>
          <img src="ceo.png" alt="" />
        </div>
        <p className="desc">
          I am a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          earum aut tempore velit beatae! Delectus, distinctio eius doloremque
          veritatis laboriosam quae, enim maxime necessitatibus nihil
          praesentium in harum? Modi, itaque.
        </p>
        <svg
          width="101"
          height="155"
          viewBox="0 0 101 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.4029 92C87.7207 92 86.1374 92.7949 85.1324 94.144L60.0564 127.808C55.5661 133.836 53.321 136.85 50.2713 136.819C47.2215 136.789 45.037 133.731 40.6681 127.614L16.9878 94.4616C15.8843 92.9168 14.1028 92 12.2045 92V92C7.28009 92 4.53844 97.6923 7.60831 101.543L40.8467 143.232C45.1753 148.661 47.3396 151.375 50.2295 151.375C53.1193 151.375 55.2837 148.661 59.6123 143.232L93.5666 100.645C96.3476 97.1567 93.8639 92 89.4029 92V92Z"
            fill="#333333"
          />
          <path
            d="M44 6.5C44 6.03572 44 5.80358 44.0128 5.60758C44.2098 2.60304 46.603 0.209775 49.6076 0.0128465C49.8036 0 50.0357 0 50.5 0V0C50.9643 0 51.1964 0 51.3924 0.0128465C54.397 0.209775 56.7902 2.60304 56.9872 5.60758C57 5.80358 57 6.03572 57 6.5V110.5C57 110.964 57 111.196 56.9872 111.392C56.7902 114.397 54.397 116.79 51.3924 116.987C51.1964 117 50.9643 117 50.5 117V117C50.0357 117 49.8036 117 49.6076 116.987C46.603 116.79 44.2098 114.397 44.0128 111.392C44 111.196 44 110.964 44 110.5V6.5Z"
            fill="#333333"
          />
        </svg>
        img
        <div className="line">
          <div className="hr"></div>
          <p>What i Can help you With</p>
        </div>
        <div className="tasks">
          {arr.map((a) => (
            <div key={a} className="task">
              <h1>Website Development</h1>
              <p>
                In this example, I&rsquo;ve created a simple HTML page with
                minimalistic styling. You can further customize the
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
