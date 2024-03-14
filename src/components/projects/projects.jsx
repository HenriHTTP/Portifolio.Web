import './style/projects.css'
import {FaLongArrowAltRight} from "react-icons/fa";
import '../global/styles.css'
import {IoLogoPython} from "react-icons/io";
import {IoLogoJavascript} from "react-icons/io5";

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
                            <h2 className="title"><IoLogoJavascript/></h2>
                            <p className="text">Project made for learning rest api architecture, this api have services
                                for user
                                registration and login per token </p>
                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/express-mongo-docker-api')}>
                                <FaLongArrowAltRight/>
                            </button>
                        </div>

                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                            <h1 className="subtitle">portfolio.web</h1>
                            <h2 className="title"><IoLogoJavascript/></h2>
                            <p className="text">This portfolio is crafted with React,using a single-page application
                                (SPA) architecture to deliver a seamless and engaging user experience. </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/Portifolio.Web')}>
                                <FaLongArrowAltRight/>
                            </button>
                        </div>

                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/scrapinpy.py')}>
                            <h1 className="subtitle">scrapinpy.py</h1>
                            <h2 className="title"><IoLogoPython/></h2>
                            <p className="text">The Scrapinpy.py is a tool designed to extract specific information,
                                known as regulations or normative, available on the website gov.br </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/scrapinpy.py')}>
                                <FaLongArrowAltRight/>
                            </button>
                        </div>
                        <div data-aos="fade-right" className="Card"
                             onClick={() => window.open('https://github.com/HenriHTTP/for-tomorrow-api')}>
                            <h1 className="subtitle">
                                for-tomorrow-api
                            </h1>
                            <h2 className="title"><IoLogoPython/></h2>
                            <p className="text">Rest api written in Python, designed to provide various useful features
                                for your manager RH. The API utilizes endpoints for create user, To receive background ,
                                and storage archives. </p>

                            <button className="normal-button"
                                    onClick={() => window.open('https://github.com/HenriHTTP/for-tomorrow-api')}>
                                <FaLongArrowAltRight/>
                            </button>
                        </div>

                    </main>
                </article>
            </section>
        </>

    )
}