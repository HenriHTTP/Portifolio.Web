import React from 'react';
import './styles/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-scroll';
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