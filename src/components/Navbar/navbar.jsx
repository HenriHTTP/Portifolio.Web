import React, {useState, useEffect} from 'react';
import './styles/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-scroll';
import {FaUserAlt} from 'react-icons/fa'
import {BsHeadphones, BsLaptopFill} from 'react-icons/bs'
import {AiFillHome, AiFillProject} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaGithub} from "react-icons/fa";

export default function Navbar() {

    const [MenuClass, SetMenuClass] = useState('navbar');
    const [MenuState, SetManuState] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleScroll = () => {
        window.scrollY >= 1 ? SetMenuClass('fixed') : SetMenuClass('navbar');
    }
    const handleMenu = () => {
        SetManuState(!MenuState);

        const icons = document.getElementById('icons');

        icons.style.display = MenuState ? 'flex' : 'none';
    }
    return (
        <>
            <div className='Content' id='home'>
                <div id="nav" className={MenuClass}>
                    <div className='logo'>
                        <h1>&lt;he/&gt;  </h1>
                    </div>
                    <div className='Links'>
                        <ul>
                            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50}
                                      duration={500}>Home</Link></li>
                            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50}
                                      duration={500}>About</Link></li>
                            <li><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50}
                                      duration={500}>Skills</Link></li>
                            <li><Link activeClass="active" to="project" spy={true} smooth={true} offset={50}
                                      duration={500}>Projects</Link></li>
                            <li><Link activeClass="active" to="contacts" spy={true} smooth={true} offset={50}
                                      duration={500}>Contact</Link></li>
                        </ul>
                        <div id="icons" className="icons-nav">
                            <p><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}><AiFillHome/>
                            </Link></p>
                            <p><Link activeClass="active" to="about" spy={true} smooth={true} offset={50}
                                     duration={500}><FaUserAlt/></Link></p>
                            <p><Link activeClass="active" to="tec" spy={true} smooth={true} offset={50}
                                     duration={500}><BsLaptopFill/></Link></p>
                            <p><Link activeClass="active" to="project" spy={true} smooth={true} offset={50}
                                     duration={500}><AiFillProject/></Link></p>
                            <p><Link activeClass="active" to="contacts" spy={true} smooth={true} offset={50}
                                     duration={500}><BsHeadphones/></Link></p>
                        </div>
                        <button id="open" className="hamburger" onClick={handleMenu}><GiHamburgerMenu/></button>
                    </div>
                </div>
                <div className='register'>
                    <main>
                        <p>Henrique Silva</p>
                        <h2>Software developer</h2>
                        <section>
                            <button className='resume-button'>Resume</button>
                            <button onClick={() => window.open('https://github.com/HenriHTTP')}><FaGithub/></button>
                            <button
                                onClick={() => window.open('https://www.linkedin.com/in/henrique-s-da-silva-3115b1228/')}>
                                <BsLinkedin/></button>
                        </section>

                    </main>

                </div>

            </div>
        </>
    )
}