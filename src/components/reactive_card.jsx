import React from 'react'
import { AnimatePresence, easeIn, easeOut, motion } from 'framer-motion'
import '../styling/card.css'

const infoMotion = {
  rest: {
    y: 80,
    opacity: 0,
    filter: "blur(5px)",
    

    transition: {
      type: "spring",
      stiffness: 200, 
      damping:20
    }
  },

  hover: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping:30,
    }
  }
}

const sliderMotion = {
  rest: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    
    transition: {
      type: "spring",
      stiffness: 150, 
      damping:18
    }
  },

  hover: {
    y: -160,
    opacity: 0,
    filter: "blur(0.5px)",

    transition: {
      type: "spring",
      stiffness: 100, 
      damping:20
    }
  }
}

const imgMotion = {
  rest: {
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 200, 
      damping:20
    }
  },

  hover: {
    scale: 1.08,

    transition: {
      type: "spring",
      stiffness: 200,
      damping:20,
    }
  }
}

const reactive_card = () => {
  return (
    <AnimatePresence>
      <motion.div initial = "rest" animate = "rest" exit= "rest" whileHover="hover" className='card'>
        <motion.div className="card_content" variants={imgMotion}></motion.div>
        <motion.div className="card_slider" variants={sliderMotion}></motion.div>
        <motion.div className="card_info" variants={infoMotion}>
          <motion.h2 className='card_header'>Card Header</motion.h2>
          <motion.span className='card_subheader'>Card SubHeader</motion.span>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default reactive_card