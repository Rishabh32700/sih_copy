import React from 'react'

import VvgnliMainContent from './main__content__vvgnli/VvgnliMainContent'
import VvgnliMainMenu from './main__menu_vvgnli/VvgnliMainMenu'

import './vvgnli.css'

const Vvgnli = () => {
  return (
    <>
      <div className="vvgnli">
        <div className="vvgnli__container">
          <VvgnliMainMenu />
          <VvgnliMainContent />
        </div>
      </div>
    </>
  )
}

export default Vvgnli