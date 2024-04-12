import React from 'react'
import '../styling/Note.css'
import { useState } from 'react'

const Notes_widget = () => {

  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };


  return (
    <button onClick={toggleOpen} className='note'>
        <div className="top_part">
            <div className="header">
              <h2>Note Name</h2>
              <span>Added: 08 April 2024</span>
            </div>

            <div className='options'>
              <button className={`edit note_btn ${isOpened? '' : 'hidden'}`}></button>
              <button className='delete note_btn'></button>
            </div>
        </div>
        <div className={`deviding ${isOpened? '' : 'hidden'}`}></div>
        <div className={`subheader ${isOpened? '' : 'hidden'}`}>
          <h3>Header 1</h3>
          <span>Lorem ipsum dolor sit amet consectetur. Aliquam dolor massa est a interdum lacus non sed ipsum. Scelerisque tristique faucibus suspendisse leo</span>
        </div>
        <div className={`indicators ${isOpened? '' : 'hidden'}`}>
          <div className="indicator"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
        </div>
    </button>
  )
}

export default Notes_widget