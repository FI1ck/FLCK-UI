import React from 'react'
import right_arrow from '../assets/Icons/right_arrow.svg';
import '../styling/link_btn.css'

const link_underline_style = (props) => {
  return (
      <a href={props.link} id='link_btn' target='blank'>
        {props.name}
        <img id='right_arrow' src = {right_arrow} alt="" />

        <div className="underline">
          <div className="underline_animation"></div>
        </div>
    </a>

  )
}

export default link_underline_style