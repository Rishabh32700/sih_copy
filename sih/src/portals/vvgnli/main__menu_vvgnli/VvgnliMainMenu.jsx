import React, { useContext } from 'react'
import { gData } from '../../../App'

import './vvgnliMainMenu.css'


const VvgnliMainMenu = () => {

    const myGlobalDataForVvgnliMainMenu = useContext(gData)

    return (
        <>
            <div className="vvgnli__main__menu">
                <div className="vvgnli__main__menu__container">
                    <ul>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("home")
                            }}>HOME</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("about_us")
                            }}>About Us</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("research")
                            }}>Research</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("training")
                            }}>Training</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("publication")
                            }}>Publication</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("library")
                            }}>Library</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("people")
                            }}>People</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("online_training")
                            }}>Online Training</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("e_resources")
                            }}>E-Resource</li>
                        <li onClick={() =>{
                                myGlobalDataForVvgnliMainMenu.set_vvgnli_main_menu_state("mou")
                            }}>MOU</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default VvgnliMainMenu