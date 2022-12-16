import React from "react";
import '../about.css'
import { motion, useScroll ,Variant} from "framer-motion"
export default function About() {
    const left={
        int:{
            x:-10
        },
        effect:{
            x:5,
            transiton:{
                duration:1.2
            }
        }
    }
    const top={
        int:{
            x:100
        },
        effect:{
           x:0,
           transiton:{
            duration:2
           }
        }
        
    }
    return(
        <motion.section  id="about">
            <motion.div variants={left} initial='int' whileInView='effect'>
                <motion.h1 className="abouttitle"  variants={left} initial='int' whileInView='effect'>2/about</motion.h1>
                <div id="txtdiv" >
                    <motion.div variants={left} initial='int' whileInView='effect'>
                        <span className="d-inline">hi im chiheb programer from algeria</span>
                        <br />
                        <span>with 4 years of experience</span>
                        <br />
                        <span>i can convert your idea to clean code</span>
                    </motion.div>
                </div>
            </motion.div>
            
            <motion.div className="body" variants={top} initial="int" whileInView="effect">
                <h3 className="clm">my skills</h3>
                <div className="skills">
                    
                    <div className="skill" id="html">
                    <span className="title">HTML</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    
                    <div className="skill" id="css">
                    <span className="title">CSS</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    
                    <div className="skill" id="js">
                    <span className="title">JS</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    <div className="skill" id="html">
                    <span className="title">python</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    <div className="skill" id="js">
                    <span className="title">php</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    <div className="skill" id="js">
                    <span className="title">React JS</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                    <div className="skill" id="js">
                    <span className="title">C++</span>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    </div>
                </div>
                </motion.div>
        </motion.section>
    )
    
}