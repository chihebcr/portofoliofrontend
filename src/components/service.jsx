import React from "react";
import '../service.css'
import { motion ,Variant } from "framer-motion";

export default function Service() {
    const fadeef={
        int:{
            y:200
        },
        effect:{
            y:0,
            transition:{
                duration:1.2
            }
        }
    }
    
    return(

        <section id="service" >
            <motion.h1  id="title3" initial={{x:300}} whileInView={{x:0}} transition={{duration:1}}>3/service</motion.h1>
            
            <span></span>
            <div className="container-fluid">
                <div className="row " >
                
                    <motion.div className=" d-inline on4  on sm-col-4" 
                    variants={fadeef}
                    initial="int"
                    whileInView="effect"
                    
                    
                    ><h3> 01.</h3>
                        <span className="d-block">build user interface</span>
                    </motion.div>
                    <motion.div className=" d-inline on on3" variants={fadeef} initial='int' whileInView='effect'><h3> 02.</h3>
                        <span className="d-block">build backend</span>
                    </motion.div>
                    <motion.div className=" d-inline on on1" variants={fadeef} initial='int' whileInView='effect'><h3> 03.</h3>
                            <span className="d-block">make logo or banner </span>
                    </motion.div>
                    <motion.div className=" d-inline on on2 "variants={fadeef} initial='int' whileInView='effect'>
                       <h3>04.</h3> 
                        <span className="d-block" >others</span>
                    </motion.div>

                    

                </div>

            </div>
        </section>
    )
    
}