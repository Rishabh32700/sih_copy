import { Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NearMeIcon from "@material-ui/icons/NearMe";
import React, { useRef, useState } from "react";
import "./css/Video.css";
import Ticker from "react-ticker";

function Videos({
  id,
  src,
  description,
  like,
  dislike,
  share,
  comment,
}) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const handleVideoPress = () => {
    // videoRef.
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
      console.log("idk idk idk");
    } else {
      setPlaying((play) => !play);
      videoRef.current.play();
      console.log("hello");
    }
  };

  return (
    <div className="video">
      <video
        id={id}
        className="video__player"
        onClick={()=>{
          handleVideoPress()
        }}
        loop
        ref={videoRef}
        src={src}
        // autoPlay={id}
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>{like}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>{share}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortDetails">


          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
