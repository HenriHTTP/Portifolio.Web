import './style/projects.css'
import {BiNotepad} from 'react-icons/bi'
import '../global/styles.css'


export default function Project() {
    return (<>
            <section id="project" className="about-projects">
                <article className="titles">
                    <h1 className='title'>Projects</h1>
                    <h3 className='subtitle'>development</h3>
                    <main className="container">

                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/express-mongo-docker-api')}>
                            <h1 className="subtitle"> express-mongo-docker-api</h1>
                            <h2 className="title"><BiNotepad/></h2>
                            <p className="text">Project made for learning rest api architecture, this api have services
                                for user
                                registration and login per token </p>
                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/express-mongo-docker-api')}>see more
                            </button>
                        </div>

                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                            <h1 className="subtitle">portfolio.web</h1>
                            <h2 className="title"><BiNotepad/></h2>
                            <p className="text">This portfolio is crafted with React,using a single-page application
                                (SPA) architecture to deliver a seamless and engaging user experience. </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                                see more
                            </button>
                        </div>

                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                            <h1 className="subtitle">Ping-pong</h1>
                            <h2 className="title"><BiNotepad/></h2>
                            <p className="text">Ping pong game written in C++ , SDL2 and Glew </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>see more
                            </button>
                        </div>
                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                            <h1 className="subtitle">
                                sqlite-python
                            </h1>
                            <h2 className="title"><BiNotepad/></h2>
                            <p className="text">This portfolio is crafted with React,using a single-page application
                                (SPA) architecture to deliver a seamless and engaging user experience. </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>see more
                            </button>
                        </div>

                    </main>
                </article>
            </section>
        </>

    )
}