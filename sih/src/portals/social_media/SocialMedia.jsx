import React, { useState } from "react";
import ImagesPost from "./images__post/ImagesPost";

import "./socialMedia.css";
import VideoPost from "./video__posts/VideoPost";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UploadSocialMediaContent from "./uploadContent/UploadSocialMediaContent";

const SocialMedia = () => {
  const [imagesOrVideos, setImagesOrVideos] = useState(<ImagesPost />);
  return (
    <>
      <div className="socialMedia">
        <div className="socialMedia__container">
          <div className="social__media__buttons">

            <Button
              variant="contained"
              style={{
                width: "10%",
                height: "100%",
                backgroundColor: "white",
                color: "#1976d2",
                fontWeight: "800",
                fontSize: ".8rem",
              }}
              onClick={() => {
                setImagesOrVideos(<ImagesPost />);
              }}
            >
              Images
            </Button>

            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
            </div>

            <Button
              variant="contained"
              style={{
                width: "10%",
                height: "100%",
                backgroundColor: "white",
                color: "#1976d2",
                fontWeight: "800",
                fontSize: ".8rem",
              }}
              onClick={() => {
                setImagesOrVideos(<VideoPost />);
              }}
            >
              Videos
            </Button>
          </div>
          <div className="social__media__rendering">{imagesOrVideos}</div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
