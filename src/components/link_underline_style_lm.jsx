import React from 'react'
import right_arrow from '../assets/Icons/right_arrow_lm.svg';
import '../styling/link_btn_lm.css'

const link_underline_style = (props) => {
  return (
      <a href={props.link} id='link_btn_lm' target='blank'>
        {props.name}
        <img id='right_arrow_lm' src = {right_arrow} alt="" />

        <div className="underline_lm">
          <div className="underline_animation_lm"></div>
        </div>
    </a>

  )
}

export default link_underline_style