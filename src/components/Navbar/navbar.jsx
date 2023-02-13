import React from 'react';
import './styles/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
export default function navbar(){
  

   window.onscroll = () => { 
    let menu = document.getElementById('nav')
    console.log(window.scrollY)

    if (window.scrollY >= 570) {
        menu.className = 'fixed'
    }else{
        menu.className = 'navbar' 
    }
}
   


    return(
        <>
        <div className='Content'> 
        <div id="nav" className='navbar'>  
        <div className='logo'>
                <h1>&lt;he/&gt;  </h1>
            </div>
            <div className='Links'>
                <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Informações</li>
                <li>Contato</li>
                </ul>
            </div>
        </div>
        <div className='register'>
            <main>
            <p>Oi tudo bem?</p>
            <h1>Sou Henrique Silva</h1>
            <button className='linkedin'><BsLinkedin/>Linkedin</button>
            </main>
            
        </div>
           
        </div>
        </>
    )
}