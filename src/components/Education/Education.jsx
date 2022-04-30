import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import "./Education.css"

const Education = () => {
  return (
    <div className='educationmain'>
        <div className='border1'></div>
        <div className='educationinfo'>
        <h1 style={{fontSize : "4rem", color : "#F56539", textAlign : "center"}}>Education </h1>
        </div>

        <div className='educations'>
            <div className='education2'>
                <div className='cap'>
                    <SchoolIcon style={{fontSize : "3rem"}}/>
                </div>

                <div className='educationinfo1'>
                        <p style={{color : "#F56539", fontWeight : "bolder"}}>2014 - 2019</p>
                        <h3 style={{marginTop : "20px", color : "#EAEAEA"}}>Bachelor of Economy</h3>
                        <h3 style={{color : "#D7C8C4"}}>Erciyes University</h3>
                </div>
            </div>

            <div className='education2'>
                <div className='cap'>
                    <SchoolIcon style={{fontSize : "3rem"}}/>
                </div>

                <div className='educationinfo1'>
                        <p style={{color : "#F56539", fontWeight : "bolder"}}>2012 - 2013</p>
                        <h3 style={{marginTop : "20px", color : "#EAEAEA"}}>IELTS English Course</h3>
                        <h3 style={{color : "#D7C8C4"}}>CFBT</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education