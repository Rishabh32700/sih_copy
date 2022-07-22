import React from 'react'
import ImagesPost from './images__post/ImagesPost'

import './socialMedia.css'
import VideoPost from './video__posts/VideoPost'


const SocialMedia = () => {
  return (
    <>
      <div className="socialMedia">
        <div className="socialMedia__container">
          <VideoPost />
          <ImagesPost />
        </div>
      </div>
    </>
  )
}

export default SocialMedia