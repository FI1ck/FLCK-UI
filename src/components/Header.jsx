import React, { useState } from 'react'
import { motion, spring } from 'framer-motion';
import '../styling/Header.css';

const Header = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    document.documentElement.style.setProperty('--clip-size', isClicked ? '0px' : '200%');
  }
  return (
    <>
      <header>
        <nav className='navbar'>
            <div className="logo"></div>
            <ul className='navbar_inner'>
                <li>
                  <motion.a whileHover={{scale: 1.1}} transition={{type: "spring", stiffness: 200, damping: 20}} href="https://github.com/FI1ck" id='github' target='blank'></motion.a>
                </li>
                <li>
                  <motion.button layout onClick={handleClick} whileHover={{scale: 1.1}} transition={{layout:{type: "spring", stiffness:150, damping:20 } , type: "spring", stiffness: 200, damping: 20}} id='mode_switch'></motion.button>
                </li>
            </ul>
        </nav>
      </header>

      <header id='head_overlay'>
        <nav className='navbar'>
            <div className="logo_overlay"></div>
            <ul className='navbar_inner'>
                <li>
                  <motion.a whileHover={{scale: 1.1}} transition={{type: "spring", stiffness: 200, damping: 20}} href="https://github.com/FI1ck" id='github_overlay' target='blank'></motion.a>
                </li>
                <li>
                  <motion.button layout onClick={handleClick} whileHover={{scale: 1.1}} transition={{layout:{type: "spring", stiffness:150, damping:20 } , type: "spring", stiffness: 200, damping: 20}} id='mode_switch_overlay'></motion.button>
                </li>
            </ul>
        </nav>
      </header>
    </>

  )
}

export default Header

