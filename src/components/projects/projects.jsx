import './style/projects.css'
import {AiFillHome} from 'react-icons/ai'
import{BsMap} from 'react-icons/bs'
import{BiNotepad} from 'react-icons/bi'


export default function Project(){ 
    return(
        <>
            <div id="project" className="AboutProjects">
                <div className="Titles">
                    <h1 className='Projecth1'>Personal</h1>
                    <h3 className='Projecth3'>Projects</h3>
                    <div className="containerCards">
                    <div className="CardProjecs" onClick={() => window.open('https://github.com/HenriHTTP/api-todolist')}>
                        <h1>To do List API</h1>
                        <h2><AiFillHome/></h2>
                     
                        <p></p>
                        <button  onClick={() => window.open('https://front-end-produtos.vercel.app/')}>see more</button>
                    </div>
                    <div className="CardProjecs" onClick={() => window.open('https://github.com/HenriHTTP/mvc-express')}>
                        <h1>MVC notes</h1>
                        <h2><BiNotepad/></h2>
                        <p></p>
                        
        
                        <button  onClick={() => window.open('https://github.com/HenriHTTP/mvc-express')}>see more</button>
                    </div>
                    <div  onClick={() => window.open('https://github.com/HenriHTTP?tab=repositories')} className="CardProjecs">
                        
                      
                        <p>see more project</p>
                       {/* <button disabled><BsCheck2Square/>Ver mais</button>-->*/}
                    </div> 
                    </div>
                    </div>
            </div>
        </>
     
    )
}