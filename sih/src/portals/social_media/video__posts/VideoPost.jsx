import React from 'react'

import './videoPost.css'

const VideoPost = () => {
  return (
    <>
      <div className="video__posts">
        <h2>VIDEOS</h2>
        <div className="video__posts__container">
          <video controls autoPlay>
            <source src="../assets/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default VideoPost