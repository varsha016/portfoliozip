import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import Contact from './pages/Contact'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project'
import About from './pages/About';
import AOS from 'aos';
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    
  
    AOS.init({
      offset: 300,
      duration: 400
    });
  }, [])
  
  return (<>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      
      </Routes>

    </BrowserRouter>
   

  </>
  )
}
