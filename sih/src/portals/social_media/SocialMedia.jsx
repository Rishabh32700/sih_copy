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
            <Stack
              spacing={2}
              direction="row"
              style={{ height: "100%", width: "10%" }}
            >
              <Button
                variant="contained"
                style={{
                  width: "100%",
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
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              style={{ height: "100%", width: "15%" }}
            >
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  color: "#1976d2",
                  fontWeight: "800",
                  fontSize: ".8rem",
                }}
                onClick={() => {
                  setImagesOrVideos(<UploadSocialMediaContent />);
                }}
              >
                Upload Content
              </Button>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              style={{ height: "100%", width: "10%" }}
            >
              <Button
                variant="contained"
                style={{
                  width: "100%",
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
            </Stack>
          </div>
          <div className="social__media__rendering">{imagesOrVideos}</div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
