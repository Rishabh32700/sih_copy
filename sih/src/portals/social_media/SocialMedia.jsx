import React, { useState, useEffect } from "react";
import ImagesPost from "./images__post/ImagesPost";
import "./socialMedia.css";
import VideoPost from "./video__posts/VideoPost";
import Button from "@mui/material/Button";
import axios from "axios";
import config from "../../ApiConfig/Config";



const SocialMedia = () => {
  const [imagesOrVideos, setImagesOrVideos] = useState(<ImagesPost />);
  const [approvedPhotos, setApprovedPhotos] = useState([]);

<<<<<<< HEAD
  const handleFileSelected = (e) => {};
=======

>>>>>>> main

  const [image, setImage] = useState({ preview: "", data: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    console.log(formData.get("file"));

    const res = await axios.post(
      config.server.path + config.api.uploadMedia,
      formData
    );
    console.log("Res1", res);
<<<<<<< HEAD
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("Session user", user);
=======
    var userFromSession = JSON.parse(sessionStorage.getItem("user"))
    console.log(userFromSession.userId);
>>>>>>> main
    const res2 = await axios.post(
      config.server.path +  config.api.handlePost,
      {
<<<<<<< HEAD
        userId: user.userId,
=======
        userId: userFromSession.userId,
>>>>>>> main
        mediaIdArray: res.data.mediaIdArray,
      }
    );
    console.log("Res2", res2);
    console.log("session session",sessionStorage.getItem("user"));
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

<<<<<<< HEAD
  // const getApprovedPhotos = async () => {
  //   const res = await axios.get(
  //     "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getApprovedPhotos"
  //   );
  //   setApprovedPhotos(res.data.approvedPhotosArray)
  //   console.log(res);
  // };
=======
  const getApprovedPhotos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getApprovedPhotos
    );
    setApprovedPhotos(res.data.approvedPhotosArray)
    console.log(res);
  };
>>>>>>> main

  // useEffect(() => {
  //   getApprovedPhotos();
  // }, []);

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
          <div className="social__media__rendering">{imagesOrVideos}</div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
