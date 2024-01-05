import React from 'react'
import './style/contact.css'
import {AiOutlineWhatsApp, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export default function Contact() {
    return (
        <>
            <div className='ContactContainer'>
                <div id='contacts' className='Contact'>
                    <h1>contact</h1>
                    <div className='ContactContent'>
                        <button onClick={() => window.open('https://github.com/HenriHTTP')}><AiFillGithub/> Git</button>
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/henrique-s-da-silva-3115b1228/')}>
                            <AiFillLinkedin/> Linkedin
                        </button>
                        <button onClick={() => window.open('https://api.whatsapp.com/send?phone=551195804462')}>
                            <AiOutlineWhatsApp/> WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}