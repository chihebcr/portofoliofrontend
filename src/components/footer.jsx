import {react, Component} from 'react';
import logo from './LOGO.webp'
import "../footer.css"
import github from './icons/github.webp'
import upwork from './icons/upwork.webp'
import fiverr from './icons/icon.webp'
function alert1() {
    alert('i ll added later ')
    
}
export default class Footer1 extends Component{
    render(){

        return(
                <div className='footer'>
                    <img src={logo} alt="" srcset="" className='logo2' />
                    <div className='linkdiv'>
                        <a href="#home" className='link5'>Home</a>
                        <a href="project" className='link5'>Projects</a>
                        <a href="#service" className='link5'>Service</a>
                        <a href="#contact" className='link5'>Contact</a>
                    </div>
                    <div className='icondiv'>
                        
                        <a href="https://github.com/chihebcr"><img src={github} alt="github"  id='icoan' /></a>
                        <a href="https://www.fiverr.com/users/chiheb486/"><img src={fiverr} alt="fiverr"  id='icoan'/></a>
                        <a href="#"><img src={upwork} alt="upwork"  id='icoan' onClick={alert1}/></a>
                    </div>
                </div>

        )

    }
}