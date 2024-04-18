import React from 'react';
import '../styling/Used_recource_lm.css';
import right_arrow from '../assets/Icons/right_arrow_lm.svg';
import { motion } from 'framer-motion';

const Used_recource = ({recource}) => {
  return (
    <motion.div className="recource_container_lm" whileHover={{ scale: 1.1, originX: 0}}>
        <a href={recource.link} className='used_recource_lm' target='blank'>
            <div className="left_part">
                <img src= {recource.icon_lm} alt="" className='recource_icon_lm'/>
                <span className='recource_title_lm'>{recource.title}</span>
            </div>

            <img className='right_arrow_lm' src = {right_arrow} alt="" />
        </a>
    </motion.div>
  )
}

export default Used_recource