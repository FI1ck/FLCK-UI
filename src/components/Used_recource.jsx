import React from 'react';
import '../styling/Used_recource.css';
import right_arrow from '../assets/Icons/right_arrow.svg';
import { motion } from 'framer-motion';

const Used_recource = ({recource}) => {
  return (
    <motion.div className="recource_container" whileHover={{ scale: 1.1, originX: 0}}>
        <a href={recource.link} className='used_recource' target='blank'>
            <div className="left_part">
                <img src= {recource.icon} alt="" className='recource_icon'/>
                <span className='recource_title'>{recource.title}</span>
            </div>

            <img className='right_arrow' src = {right_arrow} alt="" />
        </a>
    </motion.div>
  )
}

export default Used_recource