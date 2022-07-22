import React, { useContext } from 'react'
import { gData } from '../../../App'

import MainContentAboutUs from '../pages/about_us/components/main__content__about__us/MainContentAboutUs'

import './subContentRendering.css'



const SubContentRendering = () => {

    let my__data__from__vvgnli__about_us__submenu = useContext(gData)

    return (
        <>
            <div className="sub__content__rendering">
                <div className="sub__content__rendering__container">
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "about_us" ? <MainContentAboutUs /> : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "director_general" ? "director_general" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "vision_and_mission" ? "vision_and_mission" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "history" ? "history" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "governing_bodies" ? "governing_bodies" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "infrastructure" ? "infrastructure" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "networking" ? "networking" : ''}
                    {my__data__from__vvgnli__about_us__submenu.vvgnli_about_submenu_state === "whos_who" ? "whos_who" : ''}
                </div>
            </div>
        </>
    )
}

export default SubContentRendering