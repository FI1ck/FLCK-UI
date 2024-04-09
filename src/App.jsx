import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
    </>
  )
}

export default App
