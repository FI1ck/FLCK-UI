import React from 'react'
import Project_tool from '../components/project_tool'
import Notes_widget from './Notes_widget'
import Reactive_card from './reactive_card'
import '../styling/Project.css'



const Project = (project_data) => {
    const components = {
      Notes_widget,
      Reactive_card
    };

    const Component = components[project_data.component];

  return (
    <section className='project_all'>
        <div className='project_info'>
            <h2 className='project_header'>{project_data.title}</h2>
            <span className='project_desc' >
                {project_data.description}
            </span>

            <div className="used_recoures">
              {project_data["used_tools"].map( (tool) => (
                <Project_tool name = {tool} key = {project_data.id}/>
              )  )}
            </div>

        </div>
        <div className="project_container">
          {Component && <Component />}
        </div>

    </section>
  )
}

export default Project