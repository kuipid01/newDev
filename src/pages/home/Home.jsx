/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Works from "../../components/Works/Works";
import OverlayCircle from "../../components/OverlayCircle/overlayCircle";

const Home = () => {



  return (
    <div className="homecontainer">
<Header/>
<Works/>
{/* <OverlayCircle/> */}
    </div>
  );
};

export default Home;
