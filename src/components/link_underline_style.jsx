import React from 'react'
import right_arrow from '../assets/Icons/right_arrow.svg';
import '../styling/link_btn.css'

const link_underline_style = (props) => {
  return (
    <a href="#" id='link_btn'>
        {props.name}
        <img id='right_arrow' src = {right_arrow} alt="" />
    </a>
  )
}

export default link_underline_style