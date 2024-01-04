import './style/about.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react';
import '../global/styles.css'

export default function About() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div id='about' className='content'>
                <section className='container-content'>
                    <article>
                        <h1 className="icons blue" data-aos="fade-up-right"><AiOutlineLaptop/></h1>
                    </article>
                </section>
                <section className='container-content' data-aos="fade-up">
                    <article>
                        <h1 className="title">Fullstack developer</h1>
                        <p className="text">Hello, I am Henrique. I work as a FullStack developer in building
                            microservices and creating
                            frontend applications. I also have experience in database modeling. I hold a degree in
                            Systems Analysis and Development and am currently pursuing a degree in Software
                            Engineering.</p>
                        <p className="text">I enjoy working primarily on web development and microservices, focusing on
                            the website
                            aspect.</p>
                        <p className="text">Below is my resume with more detailed information about me.</p>
                        <section className="buttons-section">
                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1iozr7nIA-EimhAwrENOy4n6jFChMIr_l/view')}>
                                <BsDownload/> about me
                            </button>
                        </section>
                    </article>
                </section>
            </div>
        </>
    )
}