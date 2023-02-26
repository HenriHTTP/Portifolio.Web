import React from 'react';
import './styles/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-scroll';
import {FaUserAlt} from 'react-icons/fa'
import {BsHeadphones,BsLaptopFill} from 'react-icons/bs'
import {AiFillHome,AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
export default function navbar(){
  

   window.onscroll = () => { 
    let menu = document.getElementById('nav')
    console.log(window.scrollY)

    if (window.scrollY >= 1) {
        menu.className = 'fixed'
    }else{
        menu.className = 'navbar' 
    }
   
}
    let HandleMenuOn = ( ) => { 
        var icons = document.getElementById('icons')
        var open = document.getElementById('open')
        var close = document.getElementById('close')

        icons.style.display = 'flex'
        close.style.display = 'block'
        open.style.display = 'none'
    }
    let HandleMenuOff = ( ) => { 
        var icons = document.getElementById('icons')
        var open = document.getElementById('open')
        var close = document.getElementById('close')

        icons.style.display = 'none'
        open.style.display = 'block'
        close.style.display = 'none'
        
    }
    return(
        <>
        <div className='Content' id='home'> 
        <div id="nav" className='navbar'>  
        <div className='logo'>
                <h1>&lt;he/&gt;  </h1>
            </div>
            <div className='Links'>
                <ul>
                <li ><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></li>
                <li><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50} duration={500}>Habilidades</Link></li>
                <li>Contato</li>
                </ul>
                 <div id="icons"className="icons-nav">
                    <p><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}><AiFillHome/> </Link></p>
                    <p><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}><FaUserAlt/></Link> </p>
                    <p><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50} duration={500}><BsLaptopFill/></Link> </p>
                    <p><BsHeadphones/> </p>
                 </div>
                 <button id="open" className="hamburger" onClick={HandleMenuOn}><GiHamburgerMenu/></button>
                 <button id="close" className="Esc" onClick={HandleMenuOff}><AiOutlineClose/></button>
            </div>
        </div>
        <div className='register'>
            <main>
            <p>Oi tudo bem?</p>
            <h1>Sou Henrique Silva</h1>
            <button className='linkedin'> <BsLinkedin/> Linkedin</button>
            </main>
            
        </div>
           
        </div>
        </>
    )
}