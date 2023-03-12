import './style/projects.css'
import  CEP from './img/CEP.png'
import Anime from './img/anime.png'
import Tilt from 'react-parallax-tilt'
import {SiMyanimelist} from 'react-icons/si'
import{BsMap} from 'react-icons/bs'


export default function Project(){ 
    return(
        <>
            <div id="project" className="AboutProjects">
                <div className="Titles">
                    <h1 className='Projecth1'> Projetos</h1>
                    <div className="containerCards">
                    <Tilt>
                    <div className="CardProjecs" onClick={() => window.open('https://anime-henrihttp.vercel.app/')}>
                        <h1>Buscador de animes</h1>
                        <h2><SiMyanimelist/></h2>
                     
                        <p>Ao acessar, o usuário poderá buscar pelo título do anime e ter acesso a uma série de dados como notas e avaliações de outros usuários, entre outros atributos do anime pesquisado.</p>
                        <button  onClick={() => window.open('https://anime-henrihttp.vercel.app/')}>Ver mais</button>
                    </div>
                    </Tilt>
                    <Tilt>
                    <div className="CardProjecs" onClick={() => window.open('https://search-cep-alpha.vercel.app/')}>
                        <h1>Buscador de CEP</h1>
                        <h2><BsMap/></h2>
                        
                        <p>Ao inserir o CEP na interface, a aplicação faz uma requisição à API e retorna informações de logradouro, bairro, cidade e estado ao usuario</p>
                        <button  onClick={() => window.open('https://search-cep-alpha.vercel.app/')}>Ver mais</button>
                    </div>
                    </Tilt>
                    <Tilt>
                    <div className="CardProjecs">
                        <h1>Academia</h1>
                        
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Ver mais</button>
                    </div>
                    </Tilt>
                    </div>
                    </div>
            </div>
        </>
     
    )
}