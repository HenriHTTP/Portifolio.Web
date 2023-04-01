import React, { useState,useEffect } from 'react';
import './styles/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-scroll';
import {FaUserAlt} from 'react-icons/fa'
import {BsHeadphones,BsLaptopFill} from 'react-icons/bs'
import {AiFillHome,AiOutlineClose,AiFillProject} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Navbar(){

    const [menuclass,setmenuclass]= useState('navbar')
    useEffect(() => {
    // Utilizando useEffect para adicionar o listener de scroll ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    // Utilizando useEffect para remover o listener de scroll ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [])

    // função  para mudar classe de compenente nav
    
    let handleScroll = () => { 
    window.scrollY >= 1 ? setmenuclass('fixed') :setmenuclass('navbar')
    }

    // Função para exibir o menu

    let HandleMenuOn = ( ) => { 
        var icons = document.getElementById('icons')
        var open = document.getElementById('open')
        var close = document.getElementById('close')

        icons.style.display = 'flex'
        close.style.display = 'block'
        open.style.display = 'none'
    }

    //funcão   para  ocultar menu 

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
        <div id="nav" className={menuclass}>  
        <div className='logo'>
                <h1>&lt;he/&gt;  </h1>
            </div>
            <div className='Links'>
                <ul>
                <li ><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></li>
                <li><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50} duration={500}>Habilidades</Link></li>
                <li><Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}>Projetos</Link></li>
                <li>Contato</li>
                </ul>
                 <div id="icons"className="icons-nav">
                    <p><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}><AiFillHome/> </Link></p>
                    <p><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}><FaUserAlt/></Link> </p>
                    <p><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50} duration={500}><BsLaptopFill/></Link> </p>
                    <p><Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}><AiFillProject/></Link> </p>
                    <p><BsHeadphones/> </p>
                 </div>
                 <button id="open" className="hamburger" onClick={HandleMenuOn}><GiHamburgerMenu/></button>
                 <button id="close" className="Esc" onClick={HandleMenuOff}><AiOutlineClose/></button>
            </div>
        </div>
        <div className='register'>
            <main>
            <p>Oi tudo bem?</p>
            <h2>Sou Henrique Silva</h2>
            <button className='linkedin' onClick={() => window.open('https://www.linkedin.com/in/henrique-s-da-silva-3115b1228/')} > <BsLinkedin/> Linkedin</button>
            </main>
            
        </div>
           
        </div>
        </>
    )
}