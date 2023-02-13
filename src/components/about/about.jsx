import React from 'react'
import './style/about.css'
import {AiOutlineLaptop} from 'react-icons/ai'


export default function about(){ 
    return( 
        <>
        <div id='about' className='content'> 
        <div className='forimg'> 
            <main>
            <h1><AiOutlineLaptop/></h1>
            <button>Meu Cv</button>
            </main>
       
        </div>
        <div className='AboutMe'> 
        <main>
        <h1>Sobre</h1>
        <p>Olá! Deixe-me me apresentar: Meu nome é Henrique Lima, tenho 19 anos e sou formado em Análise e Desenvolvimento de Sistemas pela a Escola tecnica estadual Jardim Angela.Atualmente, vivo com os meus pais, mas busco a minha independência. Para conseguir isso, busco optunidades na area Front end, área pela qual sempre fui apaixonado.</p>
        </main>
        
        </div>
        </div>
        </>
    )
}