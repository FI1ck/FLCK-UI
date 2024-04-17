import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Cursor from './components/cursor'

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <Home />
      <Projects />
    </>
  )
}

export default App
