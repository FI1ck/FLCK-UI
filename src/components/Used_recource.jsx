import React from 'react';
import '../styling/Used_recource.css';
import right_arrow from '../assets/Icons/right_arrow.svg';

const Used_recource = ({recource}) => {
  return (
    <div >
        <a href="#" className='used_recource'>
            <div className="left_part">
                <img src= {recource.icon} alt="" className='recource_icon'/>
                <span className='recource_title'>{recource.title}</span>
            </div>

            <img className='right_arrow' src = {right_arrow} alt="" />
        </a>
    </div>
  )
}

export default Used_recource