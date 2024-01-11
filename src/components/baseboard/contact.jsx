import React from 'react'
import './style/contact.css'
import {AiOutlineWhatsApp, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {useState} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import '../global/styles.css'


export default function Contact() {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [content, SetContent] = useState(null);

    const handleSendEmail = (e) => {
        e.preventDefault();
        const emailTemplate = {
            from_name: name,
            message: content,
            email: email,
        }

        if (!name || !content || !email) {
            Swal.fire({
                icon: 'error',
                title: 'input values not found 400',
                text: 'Fill in all the fields to send  email'
            })
            return false
        }

        emailjs.send('service_xlg6e6d', 'template_vclltuh', emailTemplate, 'm80UOfP-5A9p59CXg')
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'your email sending was a success',
                    confirmButtonText: 'OK'
                });
            }, (error) => {
                console.log(error)
                return false
            })
    }


    return (
        <>
            <div className='container'>
                <div id='contacts' className='Contact'>
                    <h1 className='title'>contact</h1>
                    <form className='email-form' onSubmit={handleSendEmail}>
                        <p>Name</p>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                        <p>Email</p>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        <p>Content</p>
                        <textarea name="" id="" cols="30" rows="10" onChange={(e) => SetContent(e.target.value)}/>
                        <p></p>
                        <button type="submit">send</button>
                    </form>

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