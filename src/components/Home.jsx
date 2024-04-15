import React from 'react'
import '../styling/Home.css'
import Link_underline_style from './link_underline_style'
import Used_recources from './Used_recources'
import Scroll from './Scroll'

const Home = () => {
  return (
    <div id='home'>
        <div className="content">
            <div className="header">
                <h1 id='main_header'>
                    Small Website <br/>
                    with beautiful UI elements
                </h1>

                <div className="secondary_header">
                  <h2>Website designed and coded by</h2>
                  <img src="/src/assets/images/FLCK glitch.png" alt="" id='glitch_logo'/>
                </div>

                
            </div>

            <Link_underline_style name = "Source code" link = "https://github.com/FI1ck/FLCK-UI"/>

            <Used_recources />

            <Scroll />
        </div>
        
    </div>
  )
}

export default Home