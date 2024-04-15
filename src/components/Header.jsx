import React from 'react'
import { motion, spring } from 'framer-motion';
import '../styling/Header.css';

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <div className="logo"></div>
            <ul className='navbar_inner'>
                <li>
                  <motion.a whileHover={{scale: 1.1}} onTap={{scale: .9}} transition={{type: "spring", stiffness: 200, damping: 20}} href="https://github.com/FI1ck" id='github' target='blank'></motion.a>
                </li>
                <li>
                  <motion.button whileHover={{scale: 1.1}} onTap={{scale: .9}} transition={{type: "spring", stiffness: 200, damping: 20}} id='mode_switch'></motion.button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

