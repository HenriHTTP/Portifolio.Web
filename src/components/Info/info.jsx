import React from 'react';
import './style/info.css'
import {SiReact,SiExpress,SiMysql} from "react-icons/si";
import{IoLogoNodejs}from "react-icons/io"

export default function info (){
    return(
        <>
        <div id='tec' className='AboutContent'> 
            <div className="frontend">
                <h1>Software</h1>
                <h2>Skills</h2>
               
               
            <div className="card-main">
               
               <div className="card-tec"> 
               <h3><IoLogoNodejs/></h3>
               <p>Node</p> 
               </div>
               
               <div className="card-tec"> 
               <h3><SiExpress/></h3>
               <p>Express</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiMysql/></h3>
               <p>Mysql</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiReact/></h3>
               <p>React</p> 
               </div>
               
            </div>
               
            </div>
        
        
        </div>
        </>
    )
}