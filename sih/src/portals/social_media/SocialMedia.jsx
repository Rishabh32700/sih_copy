import React, { useState, useEffect } from "react";
import ImagesPost from "./images__post/ImagesPost";
import "./socialMedia.css";
import VideoPost from "./video__posts/VideoPost";
import Button from "@mui/material/Button";
import axios from "axios";
import config from "../../ApiConfig/Config";
import { Box, LinearProgress, Typography } from "@material-ui/core";

const SocialMedia = () => {
  const [imagesOrVideos, setImagesOrVideos] = useState(<ImagesPost />);

  const [image, setImage] = useState({ preview: "", data: "" });

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    console.log(formData.get("file"));
    setLoading(true);
    setProgress(0);
    const res = await axios.post(
      config.server.path + config.api.uploadMedia,
      formData,
      {
        onUploadProgress: (data) => {
          setProgress(Math.round((100 * data.loaded) / data.total));
        },
      }
    );
    console.log("Res1", res);
    setLoading(false);
    setProgress(0);
    var userFromSession = JSON.parse(sessionStorage.getItem("user"));
    console.log(userFromSession.userId);

    const res2 = await axios.post(config.server.path + config.api.handlePost, {
      userId: userFromSession.userId,
      mediaIdArray: res.data.mediaIdArray,
    });
    console.log("Res2", res2);
    console.log("session session", sessionStorage.getItem("user"));
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };
  console.log(progress);
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
            <div className="App">
              {/* {image.preview && (
                <img src={image.preview} width="100" height="100" />
              )} */}
              <hr></hr>
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                ></input>
                <button type="submit">Upload</button>
              </form>
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
          {loading ? (
            <div style={{ width: "80%", margin: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    style={{ backgroundColor: "white" }}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    style={{ color: "white" }}
                  >{`${Math.round(progress)}%`}</Typography>
                </Box>
              </Box>
            </div>
          ) : (
            <></>
          )}
          <div className="social__media__rendering">{imagesOrVideos}</div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
// style={{ backgroundColor: "white" }}
