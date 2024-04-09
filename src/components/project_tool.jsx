import React from 'react'
import '/src/styling/Project_tool.css'

const project_tool = (Used_tools) => {
  return (
    <div className='tool'>
        <span className='tool_name'> {Used_tools.name} </span>
    </div>
  )
}

export default project_tool