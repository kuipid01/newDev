import React, { useState } from "react";
import './contact.scss'
const Contact = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const handleSubmit = async () => {

  }
  return (
    <div id="contact" className="contactContainer">
      <div className="left">
        <h1>
          I would love to <br /> hear from you
        </h1>
        <div className="circlecontainer">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        </div>
       
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="container">
          <div className="inputContainer">
            <div className="name">
              <label htmlFor="firstName"> Fisrt Name</label>
              <input  onChange={(e) =>
                  setFirstName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                } placeholder="Enter First Name" type="text" name="" id="" />
            </div>
            <div className="name">
              <label htmlFor="firstName"> Last Name</label>
              <input  onChange={(e) =>
                  setLastName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                } placeholder="Enter Last Name" type="text" name="" id="" />
            </div>
          </div>
 
          <div className="inputContainer">
            <div className="name">
              <label htmlFor="Email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter Mail" type="email" name="" id="" />
            </div>
            <div className="name">
              <label htmlFor="Phone Number">Phone Number</label>
              <input     onChange={(e) => {
                  // Ensure that the entered value is a valid number
                  const enteredValue = e.target.value;
                  const isNumber = /^\d+$/.test(enteredValue);

                  // If it's a valid number or an empty string, update the state
                  if (isNumber || enteredValue === 1000) {
                    setPhoneNumber(enteredValue);
                  }
                }} placeholder="Enter Phone Number" type="tel" name="" id="" />
            </div>
     
        </div>
        
        <textarea placeholder="Enter Message" name="message" id="message" ></textarea>
      <button type="submit"> Send</button>
      </form>

    </div>
    </div>
  );
};

export default Contact;
