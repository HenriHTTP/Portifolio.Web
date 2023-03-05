import './style/projects.css'
import  CEP from './img/CEP.png'
import Anime from './img/anime.png'

export default function Project(){ 
    return(
        <>
            <div id="project" className="AboutProjects">
                <div className="Titles">
                    <h1 className='Projecth1'> Projetos</h1>
                    <div className="containerCards">
                        
                    <div className="CardProjecs">
                        <h1>Ladding page</h1>
                        <img src={Anime} alt="img" srcset="" />
                        <p>Ao acessar, o usuário poderá buscar pelo título do anime e ter acesso a uma série de dados como notas e avaliações de outros usuários, entre outros.</p>
                        <button  onClick={() => window.open('https://anime-henrihttp.vercel.app/')}>Ver mais</button>
                    </div>
                    <div className="CardProjecs">
                        <h1>Buscador de CEP</h1>
                        <img src={CEP} alt="img" srcset="" />
                        <p>Ao inserir o CEP na interface, a aplicação faz uma requisição à API e retorna informações de logradouro, bairro, cidade e estado</p>
                        <button  onClick={() => window.open('https://search-cep-alpha.vercel.app/')}>Ver mais</button>
                    </div>
                    <div className="CardProjecs">
                        <h1>Academia</h1>
                        <img src="" alt="img" srcset="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Ver mais</button>
                    </div>
                    </div>
                    </div>
            </div>
        </>
     
    )
}