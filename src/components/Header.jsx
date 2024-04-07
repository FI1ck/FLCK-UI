import React from 'react'
import '../styling/Header.css';

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <div className="logo"></div>
            <ul className='navbar_inner'>
                <li>
                  <a href="#" id='home'>Home</a>
                </li>
                <li id='deviding'></li>
                <li>
                  <a href="#" id='components'>Components</a>
                </li>
                <li>
                  <a href="#" id='github'></a>
                </li>
                <li>
                  <button id='mode_switch'></button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

