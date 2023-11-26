import React from "react";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="left">
        <h1>
          I would love to <br /> hear from you
        </h1>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form className="container">
          <div className="inputContainer">
            <div className="name">
              <label htmlFor="firstName"> Fisrt Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="name">
              <label htmlFor="firstName"> Fisrt Name</label>
              <input type="text" name="" id="" />
            </div>
          </div>
 
          <div className="inputContainer">
            <div className="name">
              <label htmlFor="Email">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className="name">
              <label htmlFor="Phone Number">Phone Number</label>
              <input type="number" name="" id="" />
            </div>
     
        </div>
        
        <textarea name="message" id="message" resize='none' cols="30" rows="10"></textarea>
      <button type="submit"></button>
      </form>

    </div>
    </div>
  );
};

export default Contact;
