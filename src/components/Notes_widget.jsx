import React from 'react'
import '../styling/Note.css'
import { useState } from 'react'
import { easeInOut, motion, spring } from "framer-motion"
import { flushSync } from 'react-dom'
import { easeIn } from 'framer-motion/dom'

const Notes_widget = () => {

  const [isOpened, setIsOpened] = useState(false);
  const opacity = isOpened ? 1 : 0;


  return (
    <motion.button layout onClick={ () => setIsOpened(!isOpened)} className='note' /*whileHover={{ scale: 1.1, transition: .2}}*/ transition={{layout: { duration: .1, type: 'spring', stiffness: 100, damping:15} }}>
        <motion.div className="top_part">
            <motion.div className="header">
              <motion.h2 layout h2>Note Name</motion.h2>
              <motion.span layout span>Added: 08 April 2024</motion.span>
            </motion.div>

            <motion.div className='options'>
            <motion.button layout className= {`edit note_btn ${isOpened ? '' : 'hidden'}`}></motion.button>
              <motion.button layout className= "delete note_btn"></motion.button>
            </motion.div>
        </motion.div>
      <motion.div animate = {{opacity: opacity, transition: 1}} className={`deviding ${isOpened? '' : 'hidden'}`}></motion.div>
        <motion.div className={`subheader ${isOpened? '' : 'hidden'}`}>
          <motion.h3 animate = {{opacity: opacity, transition: 1}}>Header 1</motion.h3>
          <motion.span animate = {{opacity: opacity, transition: 1}}>Lorem ipsum dolor sit amet consectetur. Aliquam dolor massa est a interdum lacus non sed ipsum. Scelerisque tristique faucibus suspendisse leo</motion.span>
        </motion.div>
        <motion.div className={`indicators ${isOpened? '' : 'hidden'}`}>
          <div className="indicator"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </motion.div>
    </motion.button>
  )
}

export default Notes_widget