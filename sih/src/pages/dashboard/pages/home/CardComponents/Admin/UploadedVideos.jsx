import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import Paper from "@mui/material/Paper";

import TableHead from "@mui/material/TableHead";
import DashboardMainMenu from '../../../../main__menu__dashboard/DashboardMainMenu';

import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const RESEARCHLIST = [
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    postLink: "https://google.com",
    status: true,
  },
];

const UploadedVideos = () => {
  const [pendingVideos, setPendingVideos] = useState([]);
  const getPendingVideos = async () => {
    try {
      const res = await axios.get(
        "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getPendingVideos"
      );
      setPendingVideos(res.data.pendingVideosArray);
      console.log("Videos", res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    try {
      const res = await axios.post(
        "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/updatePostStatus",
        {
          ...obj,
        }
      );
      getPendingVideos();
    } catch (error) {
      console.log(error);
    }
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
    getPendingVideos();
  };

  useEffect(() => {
    getPendingVideos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Videos Section
          </Typography>
        </div>
        <div className="dashboard__community__list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">User Id</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Medid Id</StyledTableCell>
                  <StyledTableCell align="left">Post Link</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                  <StyledTableCell align="left">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingVideos.map((video) => (
                  <StyledTableRow key={video.mediaId}>
                    <StyledTableCell align="left">
                      {video.userId}
                    </StyledTableCell>
                    <StyledTableCell align="left">{video.date}</StyledTableCell>
                    <StyledTableCell align="left">
                      {video.mediaId}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <a href={video.mediaURL}>See Post</a>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box component="div" sx={{ display: "inline" }}>
                        <CancelIcon
                          color="action"
                          onClick={() => handleCancelClick(video.mediaId)}
                        />
                      </Box>
                      <Box component="div" sx={{ display: "inline" }}>
                        <DoneIcon
                          color="primary"
                          onClick={() => handleDoneClick(video.mediaId)}
                        />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button>Delete</Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default UploadedVideos;
