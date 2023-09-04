import './style/about.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';

export default function About(){ 
    useEffect(() => {
        Aos.init();
      }, []);
    const openCV = () => {

    window.open('https://drive.google.com/file/d/1iozr7nIA-EimhAwrENOy4n6jFChMIr_l/view')
    }
    return( 
        <>
        <div id='about' className='content'> 
        <div className='forimg'> 
            <main>
            <h1 data-aos="fade-up-right"><AiOutlineLaptop/></h1>
            </main>
       
        </div>
        <div className='AboutMe' data-aos="fade-up"> 
        <main>
        <h1>Fullstack devoloper</h1>
        <p>Hello!, my name is Henrique Lima, I'm 19 years old and I have a background in Systems Analysis and Development and I develop applications with react and express</p>
        <p>Below is my resume with more detailed information about me.</p>
            <div className="buttons-contact">
                <button  onClick={openCV}><BsDownload /> about me</button>
            </div>
        </main>

       
        
        </div>
        </div>
        </>
    )
}