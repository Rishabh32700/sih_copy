import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import ImageCard from "./ImageCard";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import AppWidgetSummary from "../../AppWidgetSummary";

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

const RegisteredUserUploadedVideos = () => {
  const [photos, setPhotos] = useState(IMAGELIST);

  // const getPhotos = async () => {
  //   const res = await axios.get(
  //     config.server.path + config.api.getPendingPhotos
  //   );
  //   setPhotos(res.data.pendingPhotosArray);
  //   console.log(res);
  // };

  useEffect(() => {
    // getPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
          User Videos Section
          </Typography>
        </div>
        <div className="uploaded__images__count">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Total Images Uploaded"
                total={714000}
                icon={"ant-design:UserAddOutLined"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Approved Images"
                total={1352831}
                color="info"
                icon={"ant-design:user-filled"}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <AppWidgetSummary
                title="Rejected Images"
                total={1723315}
                color="warning"
                icon={"ant-design:video-filled"}
              />
            </Grid>
          </Grid>
        </div>
        <div className="uploaded__images__card">
          <Grid container spacing={3}>
            {photos &&
              photos.map((post, id) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ImageCard post={post} key={id} />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUserUploadedVideos;
