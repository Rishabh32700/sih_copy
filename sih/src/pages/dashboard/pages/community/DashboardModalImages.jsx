import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import "./DashboardCommunity.css";
import ImageCard from "./components/ImageCard";
import axios from "axios";
import DashboardMainMenu from "../../main__menu__dashboard/DashboardMainMenu";
const IMAGELIST = [
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink:
      "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
];

const DashboardModalImages = ({ isAdmin }) => {
  var isAdmin = false
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
    console.log(userRoleFromSession.role);
    if(userRoleFromSession.role === 1){
      isAdmin = true
    }else if(userRoleFromSession.role ===2){
      isAdmin = false
    }
    console.log(isAdmin);

  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const res = await axios.get(
      "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getPendingPhotos"
    );
    setPhotos(res.data.pendingPhotosArray);
    console.log(res);
  };

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    const res = await axios.post(
      "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/updatePostStatus",
      {
        ...obj,
      }
    );
  };

  const handleDoneClick = async (id) => {
    console.log("Done");
    const obj = {
      mediaId: id,
      postStatus: "1",
    };
    const res = await axios.post(
      "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/updatePostStatus",
      {
        ...obj,
      }
    );
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="dashboard__community__modal">
      <div className="dashboard__community__modal__container">
        <div className="dashboard__community__modal__list">
          <Grid container spacing={3}>
            {photos.map((post, id) => (
              <ImageCard post={post} key={id} isAdmin={isAdmin} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default DashboardModalImages;
