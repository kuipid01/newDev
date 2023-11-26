/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./profile.scss";
const Profile = () => {
  return (
    <>
    <h1 id="about" className="text">About Me</h1>
     <div className="imageProfile">
      
      <div className="imageContainer">
        <img src="/hero.jpg" alt="" />
      </div>
      <div className="textContainer">
        <h1>SoftWare Developer</h1>
        <p>
          Hey There! I am Adegoke Stephen , a self taught software developer who
          finds joy in turning concepts into code, When i am not immersed in
          programming , you'll likely catch me watching football .{" "}
          <div className=""></div>
        </p>
      </div>
    </div>
    </>
   
  );
};

export default Profile;
