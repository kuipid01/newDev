/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./desc.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
const desc = () => {
  return (
    <>
      <div className="desccontainer">
        <span>
          As a skilled website developer, I meticulously transform ideas into
          captivating online experiences. With expertise in product and branding
          design, I craft visual identities that compells engagements and solutions. My UI/UX design proficiency ensures seamless
          digital interactions, enhancing user satisfaction and cultural
          connections.
        </span>
        <div className="aboutMe">
          <Link>About Me</Link>
        </div>
      </div>
    </>
  );
};

export default desc;
