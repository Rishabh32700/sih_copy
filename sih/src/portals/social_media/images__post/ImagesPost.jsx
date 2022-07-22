import React from 'react'

import './imagesPost.css'

import img1 from '../../../assets/slider_02.JPG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'


const ImagesPost = () => {
  return (
    <>
      <div className="images__posts">
        <h2>IMAGES</h2>
        <div className="images__posts__container">
          <div className="prev">
            <FontAwesomeIcon icon = {faCaretLeft}></FontAwesomeIcon>
          </div>
          <div className="images">
              <img src={img1} alt="" />
              <div className="like__share__comm">
                <FontAwesomeIcon icon = {faComment}></FontAwesomeIcon>
                <FontAwesomeIcon className='like' icon = {faHeart}></FontAwesomeIcon>
                <FontAwesomeIcon icon = {faShare}></FontAwesomeIcon>
              </div>
          </div>
          <div className="next">
            <FontAwesomeIcon icon = {faCaretRight}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  )
}
export default ImagesPost