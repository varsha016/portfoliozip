import React from 'react'
import { motion } from "framer-motion"
import { Button, Card, Col, Container, Modal, Row, Select } from "react-bootstrap"

import { Link } from 'react-router-dom';

import homepageimg from "./images/homepageimg.jpg"
import './home.css'
// import HomeBg from './particle/config/HomeBg';






export default function Home() {

  const setTimeOutFn = () => {
    setTimeout()
  }



  return (<>
    {/* <div style={{ position: 'relative', zIndex: '1' }}>
      <HomeBg />
    </div> */}

    <div style={{ position: 'relative', zIndex: '2', overflow: "hidden" }} className="bg-Image">


      <Container>
        <div className='flex justify-between text-light mt-3'>

          <i className="bi bi-person-circle " style={{ fontSize: "30px" }}>Portfolio</i>

          <div className='flex'>
            <span className='mr-4'><Link className='nav-link' to="/about" >About</Link></span>
            <span className='mr-4'><Link className='nav-link' to="/project" >projects</Link></span>
            <span className='mr-4'><Link className='nav-link' to="/contact" >Contact</Link></span>
          </div>

        </div>
        <Row>


          <Col sm={6} className='d-flex justify-content-center align-content-center'>



            <motion.img

              animate={{ scale: [0, 1, 0.5, 1] }}
              transition={{ times: [0, 0.1, 0.9, 1] }}
              src={homepageimg}

              alt="img" />


          </Col>

          <Col sm={6} className='mt-5'>
            <div className=' typeTxt'>

              <h1 className='pb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Hello I'm Varsha Harkal</h1>
              <h3 className='text sec'>FRONTEND DEVELOPER.</h3>
            </div>
            <p className='text-justify text-white ' style={{ lineHeight: "200%" }}>I'am a <strong className=' text-green-700'>front-end</strong>
              developer, A front-end developer creates websites and applications using web languages
              such as HTML, CSS, and JavaScript that allow users to access and
              interact with the site or app. When you visit a website, the design
              elements you see were created by a front-end developer.</p>
            <div className='d-flex justify-content-between gap-3'>
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  p-2 text-center   h-20 w-20 rounded-full">  <Link className='nav-link mt-3' to="/about" >About</Link></div>
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  p-2 text-center   h-20 w-20 rounded-full">  <Link className='nav-link mt-3' to="/project" >projects</Link></div>
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  p-2 text-center   h-20 w-20 rounded-full">  <Link className='nav-link mt-3' to="/contact" >Contact</Link></div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  </>
  )
}
