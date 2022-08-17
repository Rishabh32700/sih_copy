import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import ImageCard from "./ImageCard";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import config from "../../../../../../ApiConfig/Config";
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

const UploadedVideos = () => {
  const [videos, setVideos] = useState([]);

  const getApprovedVideos = async () => {
    const res = await axios.get(
      config.server.path + config.api.getApprovedVideos
    );
    setVideos(res.data.approvedVideosArray);
    console.log(res);
  };

  useEffect(() => {
    getApprovedVideos();
  }, []);
  
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Images Section Modal
          </Typography>
        </div>
        <div className="uploaded__videos__card">
          <Grid container spacing={3}>
            {videos &&
              videos.map((post) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ImageCard post={post} key={post.mediaId} />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default UploadedVideos;
