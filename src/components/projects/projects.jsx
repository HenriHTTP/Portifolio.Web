import './style/projects.css'
import {SiMyanimelist} from 'react-icons/si'
import{BsMap} from 'react-icons/bs'


export default function Project(){ 
    return(
        <>
            <div id="project" className="AboutProjects">
                <div className="Titles">
                    <h1 className='Projecth1'> Projetos</h1>
                    <h3 className='Projecth3'> Pessoais</h3>
                    <div className="containerCards">
                    <div className="CardProjecs" onClick={() => window.open('https://anime-henrihttp.vercel.app/')}>
                        <h1>Buscador de animes</h1>
                        <h2><SiMyanimelist/></h2>
                     
                        <p>Ao acessar, o usuário poderá buscar pelo título do anime e ter acesso a uma série de dados como notas e avaliações de outros usuários, entre outros atributos do anime pesquisado.</p>
                        <button  onClick={() => window.open('https://anime-henrihttp.vercel.app/')}>Ver mais</button>
                    </div>
                    <div className="CardProjecs" onClick={() => window.open('https://search-cep-alpha.vercel.app/')}>
                        <h1>Buscador de CEP</h1>
                        <h2><BsMap/></h2>
                        
                        <p>Ao inserir o CEP na interface, a aplicação faz uma requisição à API e retorna informações de logradouro, bairro, cidade e estado ao usuario</p>
                        <button  onClick={() => window.open('https://search-cep-alpha.vercel.app/')}>ver mais</button>
                    </div>
                    <div  onClick={() => window.open('https://github.com/HenriHTTP?tab=repositories')} className="CardProjecs">
                        <h1>outros projetos</h1>
                        
                      
                        <p>Em desenvolvimento</p>
                       {/* <button disabled><BsCheck2Square/>Ver mais</button>-->*/}
                    </div> 
                    </div>
                    </div>
            </div>
        </>
     
    )
}