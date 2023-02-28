import './style/projects.css'
import  CEP from './img/CEP.png'

export default function Project(){ 
    return(
        <>
            <div id="project" className="AboutProjects">
                <div className="Titles">
                    <h1 className='Projecth1'> Projetos</h1>
                    <div className="containerCards">
                        
                    <div className="CardProjecs">
                        <h1>Ladding page</h1>
                        <img src="" alt="img" srcset="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Ver mais</button>
                    </div>
                    <div className="CardProjecs">
                        <h1>Buscador de CEP</h1>
                        <img src={CEP} alt="img" srcset="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Ver mais</button>
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