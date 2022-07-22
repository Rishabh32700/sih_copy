import React from 'react'

import './themeLanguageSwitcher.css'

import {FaSitemap} from 'react-icons/fa'
const ThemeLanguageSwitcher = () => {
  return (
    <>
      <div className="theme__language__switcher">
        <div className="theme__language__switcher__container">
            <div className="languages">
              <span>English</span>
              <span>हिन्दी</span>
            </div>
            <div className="font__sizes increase__font__size">A <sup>+</sup> </div>
            <div className="theme__change">A</div>
            <div className="font__sizes bold__font__size"> A <sup></sup> </div>
            <div className="font__sizes decrease__font__size">A <sup>-</sup> </div>

            <FaSitemap color="white"/>
        </div>
      </div>
    </>
  )
}

export default ThemeLanguageSwitcher