/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./button.scss";
const Button = ({ darkBtn, text }) => {
  console.log(darkBtn);

  return (
    <button className={` ${darkBtn ? "darkBtn" : "normalBtn"}`}>{text}</button>
  );
};

export default Button;
