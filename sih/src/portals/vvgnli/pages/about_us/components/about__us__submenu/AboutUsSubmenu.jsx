import React, { useContext } from 'react'
import { gData } from '../../../../../../App'

import './aboutUsSubmenu.css'


const AboutUSSubmenu = () => {


  let my__data__from__vvgnli__about_us__submenu = useContext(gData)

  return (
    <>
        <div className="about__us__submenu">
            <div className="about__us__submenu__container">
                <ul>
                    <li onClick={() =>{
                      my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("about_us")
                    }
                    }>About Us</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("director_general")
                    }>Director General</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("vision_and_mission")
                    }>Vision & Mission</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("history")
                    }>History</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("governing_bodies")
                    }>Governing Bodies </li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("infrastructure")
                    }>Infrastructure</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("networking")
                    }>Networking</li>
                    <li onClick={() => 
                    my__data__from__vvgnli__about_us__submenu.set_vvgnli_about_submenu_state("whos_who")
                    }>Who's Who</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default AboutUSSubmenu