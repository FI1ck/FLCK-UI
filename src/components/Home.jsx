import React from 'react'
import '../styling/Home.css'
import Link_underline_style from './link_underline_style'

const Home = () => {
  return (
    <>
        <div className="content">
            <div className="header">
                <h1 id='main_header'>
                    Small Website <br/>
                    with beautiful UI elements
                </h1>

                <h2 id='secondary_header'>Website designed and coded by</h2>
            </div>

            <Link_underline_style name = "Source code" link = "https://github.com/FI1ck/FLCK-UI"/>
        </div>
    </>
  )
}

export default Home