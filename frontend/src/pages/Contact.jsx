import React, { useState } from 'react'
import axios from "axios"
import { Button, Col, Container, FloatingLabel, Form, Modal, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Contact() {

    const [inp, setInp] = useState({
        fName: "",
        lName: "",
        email: "",
        sub: "",
        text: ""

    })
    const handleSubmit = e => {
        e.preventDefault()


    }
    const handleData = async () => {
        const { data: { result } } = await axios.post('http://localhost:5000/user/add', inp)

        return result



    }


    return <>



        <div className='bg-black text-white p-3'>

            <div className='flex justify-between'>
                <h4 className=''><i className="bi bi-person-circle">V.G.Harkal</i></h4>
                <div className='flex'>
                    <span className='mr-4 fs-4'><Link className='nav-link' to="/about" >About</Link></span>
                    <span className='mr-4 fs-4'><Link className='nav-link' to="/project" >projects</Link></span>
                    <span className='mr-4 fs-4'><Link className='nav-link' to="/" >Home</Link></span>
                </div>

            </div>
            <div className='d-flex justify-content-center' style={{ paddingLeft: "15%" }}>

                <h1 className='text-8xl mt-5'>GET<strong className='text-yellow-700 '>IN TOUCH</strong></h1>

            </div>
            <div className='d-flex justify-content-center mb-48' style={{ paddingLeft: "15%" }}>


                <span className='text-yellow-300'>___</span> I'M ALWAYS TO DISCUSSING PRODUCT DESING WORK OR PARTNERSHIPS.<span className='text-yellow-300'>___</span>
            </div>

            <Container >
                <Row >
                    <Col sm={4} className='d-flex justify-content-center p-2'>
                        <div>
                            <div className=' pl-2' >

                                <p>Phone</p>
                                <p><i className="bi bi-phone bg-gradient-to-r from-pink-500 to-violet-500 m-1 pe-1"></i>9623067667</p>
                            </div>
                            <br />
                            <div className=' pl-2'>

                                <p>Email</p>
                                <p><i className="bi bi-envelope-open bg-gradient-to-r from-pink-500 to-violet-500 m-1 pe-1"></i>varsha16@gmail.com</p>
                            </div>
                            <br />
                            <div className=' pl-2'>

                                <p>Instagram</p>
                                <p><i className="bi bi-instagram bg-gradient-to-r from-pink-500 to-violet-500 m-1 pe-1"></i>varsha54</p>
                            </div>
                            <br />


                        </div>
                    </Col>
                    <Col sm={8}>
                        <p>If you any suggetion, project or event you want say Hello...
                            Please fill out the form below and I will reply you shorty. </p>
                        <div className='d-flex gap-5'>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='text-center'>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            value={inp.fName}
                                            onChange={e => setInp({ ...inp, fName: e.target.value })}
                                            required
                                            type="text"
                                            placeholder="Enter Your  name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter your First name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='text-center'>
                                        <Form.Label >Last name</Form.Label>
                                        <Form.Control
                                            value={inp.lName}
                                            onChange={e => setInp({ ...inp, lName: e.target.value })}
                                            required
                                            type="text"
                                            placeholder="Enter Your Last name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter your Last name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>


                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='text-center'>
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            required
                                            value={inp.email}
                                            onChange={e => setInp({ ...inp, email: e.target.value })}
                                            type="text"
                                            placeholder="Enter Your Email"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter your email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='text-center'>
                                        <Form.Label>Your Subject</Form.Label>
                                        <Form.Control
                                            required
                                            value={inp.sub}
                                            onChange={e => setInp({ ...inp, sub: e.target.value })}
                                            type="text"
                                            placeholder="Enter Your Subject"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter your Subject.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mt-3'>
                                        <Form.Control
                                            as="textarea"
                                            value={inp.text}
                                            onChange={e => setInp({ ...inp, text: e.target.value })}
                                            placeholder="Enter Something"
                                            style={{ height: '100px' }}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter SomeThing.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    <div className='mt-4 text-center'>
                                        <Button onClick={handleData} className="rounded-full  bg-gradient-to-r from-pink-500 to-violet-500 opacity-75 border-none fs-4 h-18 w-25 " type="submit">Send me</Button>

                                    </div>
                                </Row>
                            </Form>


                        </div>



                    </Col>

                </Row>
            </Container>

        </div>

    </>
}
