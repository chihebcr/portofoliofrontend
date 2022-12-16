import React from "react";
import '../home.css';
import img from './wal.webp';
import Typical from 'react-typical';
import { motion } from "framer-motion";



export default function Home() {
    return(
        <section id="home">

            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className="ll">
                <p>Welcome </p>
                
                <span><Typical 
                    steps={['to my portofolio',1000, 'build your website with us. ',1000]}
                    loop={Infinity}
                    wrapper="span"
                /></span>
                <br />

                <br />
                
                <div className="icon1">
                    <a href="mailto:contactchiheb@zohomail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                    
                    
                </div>
                
                
            </motion.div>
            <motion.div 
            initial={{position:0}} >
                <motion.img initial={{opacity:0}} whileInView={{opacity:1 }} transition={{duration:0.5 }} src={img} alt="wallpaper"  className="img1" />
            </motion.div>
            

        </section>
    )
    
}