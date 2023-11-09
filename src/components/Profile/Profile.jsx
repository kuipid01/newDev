/* eslint-disable no-unused-vars */
import React from 'react'
import './profile.scss'
const Profile = () => {
  return (
    <div className='imageProfile' >
        <div className='imageContainer'>
        <img src="/hero.jpg" alt="" />
        </div>
       <div className='textContainer'>
        <h1>SoftWare Developer</h1>
        <p>
            Started taking coding  seriously at about the end 2022 and proud to say i have developed more than 10 projects (pet)
            and have  knowledge on Python(Django) , Javascript(React,Next) and use CSS, SCSS ,TAILWINDCSS among others <div className=""></div>  
        </p>
       </div>
    </div>
  )
}

export default Profile