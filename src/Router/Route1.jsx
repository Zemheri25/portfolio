import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../components/About/About'
import Projects from '../components/projects/Projects'



const Route1 = () => {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<About />}/>
            <Route path = "/projects" element = {<Projects />}/>
        </Routes>
    </Router>
  )
}

export default Route1