import React from 'react'
import Recources from '../used_recources.json'
import '../styling/Used_recources_lm.css'
import Used_recource from './Used_recource_lm';

console.log(Recources);

const Used_recources = () => {
  return (
    <div className='used_recources_lm'>
      <h2>Used for everything</h2>

      {Recources.map( (recource) => (
        <Used_recource key = {recource.id} recource = {recource}/>
      ))}
    </div>
  )
}

export default Used_recources