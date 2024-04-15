import React from 'react'
import Project from './Project'
import Project_data from '../project_info.json'
import '../styling/Projects.css'

const Projects = () => {


  return (
    <div className='Projects'>
        {Project_data.map((data) => (
          <Project key={data.id} title = {data.title} description = {data.description} used_tools = {data.used_tools} component = {data.component}/>
        ) )}
    </div>
  )
}

export default Projects