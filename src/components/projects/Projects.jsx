import React from 'react'
import "./Projects.css";
import {Link} from "react-router-dom";
import Fireblog from "../../image/fireblog.PNG"
import Tip from "../../image/tip.PNG"
import Button from '@mui/material/Button';
import Memory from "../../image/memory.PNG"
import Rock from "../../image/rock.PNG"
import roll from "../../image/roll.PNG"
import phone from "../../image/phone.PNG";
import tic from "../../image/tic.PNG";
import cl from "../../image/cl.PNG";
import wh from "../../image/wh.PNG";
import movie from "../../image/movie.PNG";
import shopping from "../../image/shopping.PNG";
import recipe from "../../image/recipe.PNG";
import shop from "../../image/shop.PNG";


const Projects = () => {
  return (
    <div>
        <nav className='navbar'>
            <h1 className='name1'>Ömer Zemheri</h1>
            <div>
                <Link to={"/"} className  ="link1">About</Link>
                <Link to={"/projects"} className = "link1">Projects</Link>
            </div>
                
            
        </nav>

        <h1 className='toptitle'>My Projects</h1>


        <div className='projectsmain'>
            <div className="project">
                <img src={Fireblog} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Fireblog App</h1>
                <div>
                <a href="https://github.com/Zemheri25/React-fireblog-project" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25-react-myfireblog.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={Tip} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Tip Calculator</h1>
                <div>
                <a href="https://github.com/Zemheri25/tip-calculator" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/tip-calculator/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>


            <div className="project">
                <img src={Memory} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Memory Game</h1>
                <div>
                <a href="https://github.com/Zemheri25/my-own-memory-game" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/my-own-memory-game/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>


            <div className="project">
                <img src={Rock} alt="fireblog" className='projectimg'/>
                <h1 className='title'>RSP Game</h1>
                <div>
                <a href="https://github.com/Zemheri25/rock-scissors-paper-game" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/rock-scissors-paper-game/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>


            <div className="project">
                <img src={roll} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Roll Dice Game</h1>
                <div>
                <a href="https://github.com/Zemheri25/roll-dice-game" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/roll-dice-game/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={phone} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Phone List Project</h1>
                <div>
                <a href="https://github.com/Zemheri25/react-phone-list-roject" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://reactphonelistproject.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={tic} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Tic Toc Toe Game</h1>
                <div>
                <a href="https://github.com/Zemheri25/own-tic-toc-toe-game" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/own-tic-toc-toe-game/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={cl} alt="fireblog" className='projectimg'/>
                <h1 className='title'>Bootstrap Project</h1>
                <div>
                <a href="https://github.com/Zemheri25/bootstrap_school_working" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://zemheri25.github.io/bootstrap_school_working/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={wh} alt="fireblog" className='projectimg'/>
                <h1 className='title'>React Weather App</h1>
                <div>
                <a href="https://github.com/Zemheri25/React-axios-weather-api-working" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://dashing-semifreddo-219f74.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            <div className="project">
                <img src={movie} alt="fireblog" className='projectimg'/>
                <h1 className='title'>React Firebase Movie</h1>
                <div>
                <a href="https://github.com/Zemheri25/firebase-movie-app" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://monumental-pegasus-0e5dec.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            
            <div className="project">
                <img src={shopping} alt="fireblog" className='projectimg'/>
                <h1 className='title'>React Redux Shopping</h1>
                <div>
                <a href="https://github.com/Zemheri25/React-Redux-Shopping-Project" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://react-redux-shopping-project.herokuapp.com/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>


            <div className="project">
                <img src={recipe} alt="fireblog" className='projectimg'/>
                <h1 className='title'>React Recipe Project</h1>
                <div>
                <a href="https://github.com/Zemheri25/React-recipe-project" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://vocal-piroshki-28b440.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            
            <div className="project">
                <img src={shop} alt="fireblog" className='projectimg'/>
                <h1 className='title'>React Shopping Project</h1>
                <div>
                <a href="https://github.com/Zemheri25/React-shopping-project" target="_blank" style={{marginRight : "1rem"}}><Button variant="outlined">Github</Button></a>
                <a href="https://glittery-croquembouche-d81f42.netlify.app/" target="_blank"><Button variant="contained">Live Demo</Button></a>
                </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default Projects