import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Card, Stack, Container, Typography } from "@mui/material";
// import Scrollbar from "./components/ScrollBar";
import { Grid} from "@mui/material";
import './DashboardCommunity.css'
import Page from "../home/Page";
import WebinarListHead from "../webinars/components/WebinarListHead";
import ImageCard from "./component/ImageCard";

const IMAGELIST = [
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://www.constructionweekonline.in/cloud/2021/11/24/Kl6SWhqw-IIT-ISM-Dhanbad-1.png",
    status: true,
  },
];

const DashboardModalImages = () => {
  return (
    <div className="dashboard__community__modal">
      <div className="dashboard__community__modal__container">
        <div className="dashboard__community__modal__list">
          <Grid container spacing={3}>
            {IMAGELIST.map((post, id) => (
              <ImageCard post={post} key={id} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default DashboardModalImages;
