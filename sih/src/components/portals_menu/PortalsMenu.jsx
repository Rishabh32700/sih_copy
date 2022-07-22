import React, { useContext } from 'react'
import { gData } from '../../App'


import './portalsMenu.css'

const PortalsMenu = () => {
  let myData = useContext(gData)
  return (
    <>
    
        <div className="portals__menu">
            <div className="portals__menu__container">
              <ul>
                
                <li><button onClick={()=>{
                  myData.setState(1)
                }}>VVGNLI</button></li>
                <li><button onClick={()=>{
                  myData.setState(2)
                }}>COMMUNITY</button></li>
                <li><button onClick={()=>{
                  myData.setState(3)
                }}>WEBINARS</button></li>
                <li><button onClick={()=>{
                  myData.setState(4)
                }}>LOGIN / REGISTER</button></li>
              </ul>
                
                
                
                
            </div>
        </div>
    </>
  )
}

export default PortalsMenu