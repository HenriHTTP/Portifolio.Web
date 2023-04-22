import React from 'react'
import './style/about.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'


export default function about(){ 
    const openCV = () => {

    window.open('https://drive.google.com/file/d/1gAnGzMcCuAIsrNWrM9YRn4v0-wTWCfO0/view')
    }
    return( 
        <>
        <div id='about' className='content'> 
        <div className='forimg'> 
            <main>
            <h1><AiOutlineLaptop/></h1>
            </main>
       
        </div>
        <div className='AboutMe'> 
        <main>
        <h1>Desenvolvedor Front-end</h1>
        <p>Olá!,meu nome é Henrique Lima, tenho 19 anos e tenho formação em Análise e Desenvolvimento de Sistemas e desenvolvo aplicações com react</p>
        <p>logo a baixo tem o meu currículo com informçôes mais detalhadas sobre mim.</p>
            <div className="buttons-contact">
                <button  onClick={openCV}><BsDownload /> Baixar meu cv</button>
            </div>
        </main>

       
        
        </div>
        </div>
        </>
    )
}