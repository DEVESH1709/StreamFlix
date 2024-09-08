import React from 'react'
import './Nav.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixLogo from '../assets/netflix-logo.png';
import netflixAvatar from '../assets/netflix-avatar.png';
function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
   <div className='nav_contents'>
   <img src={netflixLogo} alt='' className='nav_logo' onClick={() => navigate("/")}></img>
   <img src={netflixAvatar} alt='' className='nav_avatar'    onClick={() => navigate("/profile")} ></img>
   
   
   </div>   
   

    </div>
  )
}

export default Nav
