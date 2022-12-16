import react from 'react'
import { Component } from 'react'
import email from './icons/mail.webp';
import telegram from './icons/telegram.webp';
import telephone from './icons/telephone.webp';
import '../contact.css';
import {motion} from 'framer-motion';
import { Variant } from 'framer-motion';

export default  class Contact1 extends Component{
    
    render(){
        const ee={
            int:{},
            effect:{opacity:0.5 ,
            transition:{duration:0.3}
        }
        }
        const left={
            int:{x:200},
            effect:{x:0,transition:{duration:1.2}}

        }
        const top ={
            int:{y:200},
            effect:{y:0 ,transition:{duration:1.5}}
        }
        return (
            <section id='contact'>
                <motion.h1 variants={left} initial='int' whileInView='effect' className='title4'>4/contact</motion.h1>
                <motion.div variants={top} initial='int' whileInView='effect' className='iconse'>
                    <a href="https://t.me/CrContactbot" className='d-inline'><motion.img src={telegram}   alt="telegram"  variants={ee} whileHover='effect'/></a>
                    <a href="mailto:contactchiheb@zohomail.com"><motion.img src={email} alt="my email"variants={ee} whileHover='effect' /></a>
                    <a href="tel:+213657299187"><motion.img  src={telephone}  alt="phonenumber" variants={ee} whileHover='effect' /></a>
                </motion.div>
            </section>
        )
    }
    
}