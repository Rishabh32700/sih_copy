import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import ImageCard from "../ImageCard";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import AppWidgetSummary from "../../../AppWidgetSummary";
import config from "../../../../../../../ApiConfig/Config";
import "../uploadedImages.css";
import { useParams } from "react-router-dom";

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

const RegisteredUserUploadedImages = () => {
  const [photos, setPhotos] = useState([]);
  const { userId } = useParams();

  const getUserPhotos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getPhotosForUserId+`?userId=${userId}`
    );
    console.log(res);
    setPhotos(res.data.photosArray);
  };

  useEffect(() => {
    getUserPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__home--heading dashboard__research__heading">
          <h1>{`User ${userId} Images`}</h1>
        </div>
        <div className="uploaded__images__count">
          <div className="dashboard__home__card__list">
            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Total Images Uploaded"
                  total={714000}
                  icon={"ant-design:UserAddOutLined"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Approved Images"
                  total={1352831}
                  color="info"
                  icon={"ant-design:user-filled"}
                />
              </div>
            </div>

            <div className="dashboard__card wrapper">
              <div className="card">
                <AppWidgetSummary
                  className="dashboard__card__inner__div"
                  title="Rejected Images"
                  total={1723315}
                  color="warning"
                  icon={"ant-design:video-filled"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="uploaded__images__card__container">
          {photos &&
            photos.map((post, id) => (
              <div className="uploaded__images__card">
                <ImageCard post={post} key={id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RegisteredUserUploadedImages;
