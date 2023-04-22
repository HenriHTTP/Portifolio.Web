import React from 'react';
import './style/info.css'
import { SiTypescript,SiCsswizardry,SiJavascript,SiPython,SiHtml5,SiReact} from "react-icons/si";

export default function info (){
    return(
        <>
        <div id='tec' className='AboutContent'> 
            <div className="frontend">
                <h1>Software</h1>
                <h2>Skills</h2>
               
               
            <div className="card-main">
               <div className="card-tec">
               <h3><SiHtml5/></h3>
               <p>HTML</p>
               </div>
               
               <div className="card-tec"> 
               <h3><SiCsswizardry/></h3>
               <p>CSS</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiJavascript/></h3>
               <p>Javascript</p> 
               </div>
               
               <div className="card-tec"> 
               <h3><SiTypescript/></h3>
               <p>Typescript</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiPython/></h3>
               <p>Python</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiReact/></h3>
               <p>React</p> 
               </div>

               <div className="card-tec"> 
               <h3><SiReact/></h3>
               <p>React Native</p> 
               </div>
               
            </div>
               
            </div>
        
        
        </div>
        </>
    )
}