
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'
import { motion } from "framer-motion"
// import "./../image/images(2)"




export default function Resume() {




    return <>
        <div className='flex justify-between'>
            <h4 className='text-yellow-500'><i class="bi bi-person-circle">V.S.magar</i></h4>
            <div className='flex'>
                <span className='mr-4'><Link className='nav-link' to="/resume" >About</Link></span>
                <span className='mr-4'><Link className='nav-link' to="/contact" >Contact</Link></span>
                <span className='mr-4'><Link className='nav-link' to="/project" >projects</Link></span>
            </div>

        </div>

        {/* /////// */}
        <div className='text-center '>
            <h1 class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">EDUCATION With Course</h1>

        </div>


        <Row className='bg-black'>
            <Col md={6} >
                <div className='text-center mt-2  pl-48 pt-16'>
                    <p style={{ width: "140px", height: "140px" }} className="rounded-full  bg-yellow-400 hover:text-black hover:bg-white pt-5">march 2016</p>
                </div>


            </Col>
            <Col md={6} >
                <Card style={{ width: '28rem' }} className='mt-2  '>
                    <Card.Body className='bg-blue-100'>
                        <Card.Title>*Degree*</Card.Title>
                        <h6>Bachelor of Arts</h6>
                        <strong> Sant Gadge Baba University  Amravati.</strong>
                        <hr />

                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. </p>

                    </Card.Body>
                </Card>

            </Col>
        </Row>

        <Row className='bg-black'>
            <Col md={6} >
                <div className='text-center mt-2 pl-48 pt-16'>
                    <p
                        style={{ width: "140px", height: "140px" }} className="rounded-full   bg-yellow-400 hover:text-black hover:bg-white pt-5">february 2011</p>
                </div>


            </Col>
            <Col md={6} >
                <Card style={{ width: '28rem' }} className='mt-2 mb-2'>
                    <Card.Body className='rounded-tl-lg bg-blue-100 '>
                        <Card.Title>*Junior Collage*</Card.Title>
                        <div  >

                            <h6>Bachelor of Arts</h6>
                            <strong>Sant Gadge Baba University  Amravati.</strong>
                            <p>Distric of Akola</p>
                            <hr />
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum. </p>
                        </div>

                    </Card.Body>
                </Card>

            </Col>
        </Row>
        <div className='text-center mt-3'>
            <h1 className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">Programming-SKILLS</h1>

        </div>
        {/* fourth row */}
        <Row>


            <Col sm={6} >

                <div className='d-flex justify-content-between mt-4 '>
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                <div id="number" className='text-2xl'>👍</div>

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>

                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>


                    {/* second progessbar */}
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                <div id="number" className='text-2xl'>👍</div>

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>

                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>
                    {/* third progessbar */}
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                <div id="number" className='text-2xl'>👍</div>

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>
                            <defs>
                                {/* <linearGradient id='GradientColor'>
                                    <stop offset="0%" stopColor='#e91e63' />
                                    <stop offset="100%" stopColor='#673ab7' />
                                </linearGradient> */}
                            </defs>
                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>
                </div>
                <div className='d-flex justify-content-between ps-3 mt-3  '>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }} className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>HTML</motion.h3>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }} className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>JAVA-SCRIPT</motion.h3>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }} className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>REACT-JS</motion.h3>
                </div>
                <hr />
                <div className='d-flex justify-content-between mt-4 '>
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                {/* <div id="number" className='text-2xl'>65%</div> */}

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>
                            <defs>
                                <linearGradient id='GradientColor'>
                                    <stop offset="0%" stopColor='#e91e63' />
                                    <stop offset="100%" stopColor='#673ab7' />
                                </linearGradient>
                            </defs>
                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>


                    {/* second progessbar */}
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                {/* <div id="number" className='text-2xl'>70%</div> */}

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>
                            <defs>
                                <linearGradient id='GradientColor'>
                                    <stop offset="0%" stopColor='#e91e63' />
                                    <stop offset="100%" stopColor='#673ab7' />
                                </linearGradient>
                            </defs>
                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>
                    {/* third progessbar */}
                    <div className='circle-wrap'>
                        <div className='outer'>
                            <div className='inner'>
                                {/* <div id="number" className='text-2xl'>75%</div> */}

                            </div>
                        </div>
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1'
                            width='160px' height='160px'>
                            <defs>
                                <linearGradient id='GradientColor'>
                                    <stop offset="0%" stopColor='#e91e63' />
                                    <stop offset="100%" stopColor='#673ab7' />
                                </linearGradient>
                            </defs>
                            <circle cx='80' cy="80" r="70" stroke-strokeLinecap='round' />
                        </svg>

                    </div>
                </div>
                {/* //////// */}
                {/* <hr /> */}
                <div

                    className='d-flex justify-content-between ps-3 mt-3 pb-1 '>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}

                        className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>Material-UI</motion.h3>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}

                        className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>React-Bootstrap</motion.h3>
                    <motion.h3 whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        // drag="x"
                        // dragConstraints={{ left: -100, right: 100 }} 
                        className='text-pink-700 text-center hover:bg-violet-500 hover:text-white p-1'>Framer-Motion</motion.h3>
                </div>
                <hr className='skill' />


            </Col>
            <Col sm={6}>
                <img src="./../image/images(2).jpg" alt="" />
            </Col>


        </Row>










    </>
}

