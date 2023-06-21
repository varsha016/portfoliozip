import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion, useScroll } from "framer-motion"
// import Backgound from './particle/Backgroud';
import chatimg from "./images/chatimg.png"
import employeeImg from "./images/employeeImg.jpg"
import blogIMage from "./images/blog.jpg"

export default function Project() {
    const { scrollYProgress } = useScroll();
    let url = "https://github.com/varsha016/money-manager"
    let blogpro = "https://github.com/varsha016/mern-blog"
    let Ecommerce = "https://github.com/varsha016/railway-mern"
    let chatPro = "https://github.com/varsha016/chat-pro"
    let emloyee_manager = "https://github.com/varsha016/employee-manager-1"
    return <>
        {/* <div style={{ position: 'relative', zIndex: '1' }}>
            <Backgound />
        </div> */}



        <div style={{ backgroundColor: "#383838" }} >

            <div className='flex justify-between text-light pt-3'>
                <h4><i className="bi bi-person-circle">V.G.Harkal</i></h4>
                <div className='flex fs-5'>
                    <span className='mr-4'><Link className='nav-link' to="/about" >About</Link></span>
                    <span className='mr-4'><Link className='nav-link' to="/contact" >Contact</Link></span>
                    <span className='mr-4'><Link className='nav-link' to="/" >Home</Link></span>
                </div>

            </div>


            <Container data-aos="fade-up-right">

                <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl text-center mt-5 transition 
                ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 
                 duration-300 hover:bg-black'>Online-Chat</h3>

                <Row className='mt-5 pt-3 text-center bg-black text-white p-2 shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                    <Col md={6} >

                        <p className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pl-2 mt-4'>
                            Chat applications, also known as messaging applications or instant messaging (IM) platforms, are software programs designed to
                            enable communication and exchange of text, voice, images, and video messages between two or more people in real-time. They are
                            widely used for personal and business communication, both for social interactions and professional collaborations.
                            Some popular examples of chat applications include WhatsApp, Facebook Messenger, WeChat, LINE, Telegram, Slack, Skype, and Zoom. These applications are available for various platforms,
                            such as desktop computers, laptops, smartphones, and tablets, and can be used through internet connectivity.</p>
                        <Button className='outline-dashed bg-black outline-red-500 mt-8'>
                            <a href={chatPro}>open source</a>

                        </Button>
                    </Col>
                    <Col md={6} className='ps-5 mt-1'>

                        <img className='img-fluid transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'
                            width={300} height={200}
                            src={chatimg} alt="" />

                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-up-left">
                <h3 className='bg-clip-text text-transparent 
                bg-gradient-to-r from-pink-500 to-violet-500 text-4xl text-center mt-5 p-2 transition ease-in-out delay-150 
                bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Employee-Manager</h3>

                <Row className='mt-5 pt-3 text-center bg-black text-white p-2 shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>

                    <Col md={6}>

                        <p className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pl-3 mt-4'>
                            Recruitment and selection: Employee management begins with identifying the right candidates for the job. It involves creating job descriptions, posting job ads, screening resumes, and conducting interviews.
                            Onboarding: Once an employee is hired, onboarding is the process of introducing them to the organization and providing them with the tools and training they need to be successful in their role.
                            Performance management: Performance management involves setting goals, providing feedback, and conducting performance evaluations to ensure that employees are meeting expectations and performing at their best.
                            Training and development: Providing ongoing training and development opportunities can help employees enhance their skills and knowledge, leading to increased job satisfaction and better performance.
                            Compensation and benefits: Offering competitive compensation and benefits packages is important for attracting and retaining top talent.</p>
                        <Button className='outline-dashed bg-black outline-red-500 mt-8 mb-2'>
                            <a href={emloyee_manager}>  open source</a>
                        </Button>
                    </Col>
                    <Col md={6} className='ps-5'>

                        <img width={300} height={200} className='img-fluid transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 ' src={employeeImg} alt="" />
                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-up-right">

                <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl text-center mt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 mb-2'>Ecommerce web-site</h3>
                <Row className="mt-5 pt-3 text-center bg-black text-white p-2 shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <Col md={6} >

                        <p className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pl-2 mt-4'>
                            An e-commerce website is an online platform where businesses can sell products and services directly to customers through the internet. E-commerce websites typically feature a virtual storefront that displays product images,
                            descriptions, prices, and other details.
                            Customers can browse the products on the website, add them to their shopping cart, and complete the purchase using a secure online payment system. E-commerce websites also often provide features like customer reviews, product recommendations,
                            and personalized shopping experiences based on customer behavior.
                        </p>
                        <Button className='outline-dashed bg-black outline-red-500 mt-8 mb-2'>
                            <a href={Ecommerce}>opne Source</a>
                        </Button>
                    </Col>
                    <Col md={6} className='ps-5'>
                        <img width={300} height={200} className='img-fluid transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-up-left" >
                <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl text-center mt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>Money-Manager</h3>
                <Row className='mt-5 pt-3 text-center bg-black text-white p-2 shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                    <Col md={6}>

                        <p className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pl-2 mt-4'>
                            Money management is the process of managing one's personal finances, including budgeting, saving, investing, and debt management. Here are some key areas of money management:
                            Budgeting: Creating a budget involves tracking income and expenses to determine how much money is available to spend each month. This helps individuals prioritize their spending and avoid overspending.
                            Saving: Saving money is an important part of money management. It involves setting aside money for short-term and long-term goals, such as emergencies, retirement, or a down payment on a house.
                            Investing: Investing can help individuals grow their wealth over time. It involves putting money into stocks, bonds, mutual funds, or other investment vehicles with
                            the goal of earning a return on investment.Debt management: Managing debt is a crucial part of money management. It involves paying off high-interest debt and avoiding new debt whenever possible.


                        </p>
                        <Button
                            className='outline-dashed bg-black outline-red-500 mt-8 mb-2'>
                            <a href={url}>opne Source</a>
                        </Button>
                    </Col>
                    <Col md={6} className='ps-5'>
                        <img width={300} height={200} className='img-fluid transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakqXERQQn6UDZeXvkmWiy5VjgR3bqbf256Q&usqp=CAU" alt="" />
                    </Col>
                </Row>

            </Container>
            <Container data-aos="fade-up-right">
                <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-4xl text-center mt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>Blog-Site</h3>
                <Row className='mt-5  pt-3 text-center bg-black text-white p-2 shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1   duration-300' >
                    <Col md={6} >

                        <p className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 pl-2 mt-4'>
                            A blog is a website or section of a website that features regularly updated content in the form of articles, posts, or entries. Typically, blog content is written in a conversational tone and covers a specific topic or niche.
                            Blogs can be used for a variety of purposes, including personal expression, information sharing, marketing, and business promotion. They are often used as a way to build an online presence, establish authority in a particular field, and connect with like-minded individuals or potential customers.
                            Here are some common elements of a blog:
                            Posts: Blog posts are the individual articles or entries that make up the blog's content. They are typically organized by date or topic and are displayed in reverse chronological order (i.e., the most recent post appears first).

                        </p>
                        <Button
                            className='outline-dashed bg-black outline-red-500 mt-8 mb-2'>
                            <a href={blogpro}>opne Source</a>
                        </Button>
                    </Col>
                    <Col md={6} className='ps-5 mt-3'>
                        <img width={250} height={250} className='img-fluid transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' src={blogIMage} alt="blagImage" />
                    </Col>
                </Row>
            </Container>


        </div >
    </>
}

