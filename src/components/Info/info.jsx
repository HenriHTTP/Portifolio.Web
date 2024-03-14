import React, {useEffect} from 'react';
import './style/info.css'
import {SiMysql} from "react-icons/si";
import {IoLogoNodejs,IoLogoJavascript} from "react-icons/io"
import { FaPython } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../global/styles.css'

export default function Info() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div id='tec' className='AboutContent'>
                <div className="frontend">
                    <h1 className="title">Software</h1>
                    <h2 className="subtitle">Skills</h2>
                    <div className="card-main" data-aos="zoom-in">
                        <div className="card-tec">
                            <h3><IoLogoNodejs/></h3>
                            <p>Node</p>
                        </div>
                        <div className="card-tec">
                            <h3><FaPython/></h3>
                            <p>Python</p>
                        </div>
                        <div className="card-tec">
                            <h3><SiMysql/></h3>
                            <p>Mysql</p>
                        </div>
                        <div className="card-tec">
                            <h3><IoLogoJavascript/></h3>
                            <p>javascript</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}