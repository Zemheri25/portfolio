import React from 'react';
import "./Experience.css"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Experience = () => {
  return (
    <div className='experiencemain'>
        <div className='border3'></div>
        <h1 style={{fontSize  :"3rem", color : "#F56539", textAlign : "center"}}>Experience</h1>

        <div className='education2'>
                <div className='cap'>
                    <BusinessCenterIcon style={{fontSize : "3rem"}}/>
                </div>

                <div className='educationinfo1'>
                        <p style={{color : "#F56539", fontWeight : "bolder"}}>2021 - 2022</p>
                        <h3 style={{marginTop : "20px", color : "#EAEAEA"}}>Frontend Developer</h3>
                        <h3 style={{color : "#D7C8C4"}}>Clarusway</h3>
                </div>
            </div>

            <div className='education2'>
                <div className='cap'>
                    <BusinessCenterIcon style={{fontSize : "3rem"}}/>
                </div>

                <div className='educationinfo1'>
                        <p style={{color : "#F56539", fontWeight : "bolder"}}>2021 - 2022</p>
                        <h3 style={{marginTop : "20px", color : "#EAEAEA"}}>Backend Developer</h3>
                        <h3 style={{color : "#D7C8C4"}}>Clarusway</h3>
                </div>
            </div>
    </div>
  )
}

export default Experience