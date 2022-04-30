import React from 'react'
import "./Skills.css"
import React1 from "../../image/react.png"
import JavaScript from "../../image/javascript.png"
import HTML from "../../image/html.png"
import CSS from "../../image/css.png"
import Redux from "../../image/redux.png"
import Postman from "../../image/postman.png"
import Jira from "../../image/jira.jpg"
import Django from "../../image/django.png"
import Bootstrap from "../../image/bootstrap.jpg"
import Mui from "../../image/mui.png"
import Linux from "../../image/Linux.png"
import Sass from "../../image/Sass.png"
import PostgreSQL from "../../image/postgresql.png"
import Python from "../../image/python.jpg"



const Skills = () => {
  return (
    <div className='skill1'>
        <div className='border2'></div>
        <h1 style={{textAlign : "center", color : "#F56539", marginTop : "5rem", marginBottom : "5rem"}}>Skills</h1>
        <div className='skillsmain'>
        <div className='skill'>
          <img src={React1} alt="react" className='skillimg'/>
          <h3>React</h3>
        </div>

        <div className='skill'>
          <img src={JavaScript} alt="react" className='skillimg' style={{height : "3rem", width : "3rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Java Script</h3>
        </div>

        
        <div className='skill'>
          <img src={HTML} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>HTML</h3>
        </div>

        <div className='skill'>
          <img src={CSS} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>CSS</h3>
        </div>

        
        <div className='skill'>
          <img src={Redux} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Redux</h3>
        </div>

        <div className='skill'>
          <img src={Postman} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Postman</h3>
        </div>

        <div className='skill'>
          <img src={Jira} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Jira</h3>
        </div>

        <div className='skill'>
          <img src={Django} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Django</h3>
        </div>

        <div className='skill'>
          <img src={Bootstrap} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Bootstrap</h3>
        </div>

        <div className='skill'>
          <img src={Mui} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Mui</h3>
        </div>

        
        <div className='skill'>
          <img src={Linux} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Linux</h3>
        </div>

        <div className='skill'>
          <img src={Sass} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Sass</h3>
        </div>

        <div className='skill'>
          <img src={PostgreSQL} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>PostgreSQL</h3>
        </div>

        <div className='skill'>
          <img src={Python} alt="react" className='skillimg' style={{height : "4rem", width : "4rem"}}/>
          <h3 style={{marginTop : "1rem"}}>Python</h3>
        </div>

        </div>
    </div>
  )
}

export default Skills
