import React, { useState, useEffect }  from 'react'

import './videoPost.css'

import Videos from "./videoPostComponent/Videos";

import axios from "axios";

const VideoPost = () => {
  const [ytVideo, setYtVideo] = useState([]);



  useEffect(() => {
    async function fetchVideos() {
      const response = await axios
        .get("https://ytshorts-clone.herokuapp.com/api/video/posts")
        .then((res) => res.data)
        .catch((err) => console.log(err));
      //console.log(response);

      setYtVideo(response);
      return response;
    }
    fetchVideos();
  }, []);


  return (
    <>
      <div className="video__posts">
        <div className="video__posts__container">
        {ytVideo.map((vid) => (
          <Videos
            id={vid._id}
            src={vid.url}
            channel={vid.channel}
            description={vid.description}
            like={vid.likes}
            dislike={vid.dislike}
            share={vid.shares}
            comment={vid.comment}
            
          />
        ))} 
        </div>
      </div>
    </>
  )
}

export default VideoPost