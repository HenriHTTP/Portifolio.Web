import React from 'react'
import './style/about.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsCheck2Square,BsDownload} from 'react-icons/bs'


export default function about(){ 
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
        <h1>Desenvolvedor Front-end com experiências em React, React-native, e JavaScript.</h1>
        <p>Olá! Deixe-me me apresentar,meu nome é Henrique Lima, tenho 19 anos e sou formado em Análise e Desenvolvimento de Sistemas pela a Escola tecnica estadual Jardim Angela.</p>
        <p>Logo a baixo tem o meu currículo com informçôes mais detalhadas sobre mim. Podemos marcar uma call atráves do meu e-mail que está disponibilizado.</p>
            <div className="buttons-contact">
                <button><BsDownload/> Baixar meu cv</button>
                <button><BsCheck2Square/> Copiar E-mail</button>
            </div>
        </main>

       
        
        </div>
        </div>
        </>
    )
}