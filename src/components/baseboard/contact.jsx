import React from 'react'
import './style/contact.css'
import {AiOutlineWhatsApp,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'

export default function Contact() {
    const whatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=551195804462')
    }
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/henrique-s-da-silva-3115b1228/')
    }
    const git = () => {
        window.open('https://github.com/HenriHTTP')
    }
return (
    <>
    <div className='ContactContainer'>
        
        <div id='contacts'className='Contact'>
        <h1>contact</h1>
      
        
        <div className='ContactContent'>
            <button  onClick={git}><AiFillGithub/> Git</button>
            <button onClick={linkedin}><AiFillLinkedin/> Linkendin</button>
            <button onClick={whatsapp}><AiOutlineWhatsApp/> WhatsApp</button>
        </div>
    </div>
    </div>
    </>
)
}