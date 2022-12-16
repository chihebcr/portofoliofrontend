import React from "react";
import logo from './LOGO.webp'
import {motion , Variant}  from 'framer-motion'
export default function Navbar1(){
    const ee={
        int:{},
        effect:{opacity:0.5 ,
        transition:{duration:0.5}
    }
    }
    return(
        <motion.div initial={{y:-100}} whileInView={{y:0}} transition={{duration:1.5}}>
                <nav className="navbar navbar-expand-sm navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt=""  className="navbar-brand logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                <motion.a className="nav-link active" variants={ee} aria-current="page" href="#home" id='lin' whileHover='effect'>Home</motion.a>
                                <motion.a className="nav-link active" variants={ee} aria-current="page" href="#about" id='lin' whileHover='effect'>About</motion.a>
                                <motion.a className="nav-link active" variants={ee} aria-current="page" href="project" id='lin' whileHover='effect'>Projects</motion.a>
                                <motion.a className="nav-link active" variants={ee} aria-current="page" href="#service" id='lin' whileHover='effect'>Service</motion.a>
                                <motion.a className="nav-link active" variants={ee} aria-current="page" href="#contact" id='lin' whileHover='effect'>Contact</motion.a>
                                
                            </div>
                        </div>
                    </div>
                </nav>
        </motion.div>
    )
}