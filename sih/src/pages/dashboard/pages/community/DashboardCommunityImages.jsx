import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import Paper from "@mui/material/Paper";

import TableHead from "@mui/material/TableHead";

import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Typography, Button, CircularProgress } from "@mui/material";
// import Scrollbar from "./components/ScrollBar";
import { styled } from "@mui/material/styles";

import { tableCellClasses } from "@mui/material/TableCell";
import axios from "axios";

import config from "../../../../ApiConfig/Config";

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

const DashboardCommunityImages = ({ isAdmin }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhotos = async () => {
    setLoading(true);
    const res = await axios.get(
      config.server.path + config.api.getPendingPhotos
    );
    setPhotos(res.data.pendingPhotosArray);
    console.log(res);
    setLoading(false);
  };

  const handleCancelClick = async (id) => {
    console.log("Cancel", id);
    const obj = {
      mediaId: id,
      postStatus: "2",
    };
    const res = await axios.get(
      "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getPendingPhotos",
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
      config.server.path + config.api.updatePostStatus,
      {
        ...obj,
      }
    );
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Images Section
          </Typography>
        </div>
        <div className="dashboard__community__list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {isAdmin && (
                    <StyledTableCell align="left">User Id</StyledTableCell>
                  )}
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media Id</StyledTableCell>
                  <StyledTableCell align="left">Post Link</StyledTableCell>
                  {isAdmin && (
                    <StyledTableCell align="left">Action</StyledTableCell>
                  )}
                  {!isAdmin && (
                    <StyledTableCell align="left">Delete</StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <CircularProgress />
                ) : (
                  photos.map((photo, id) => (
                    <StyledTableRow key={id}>
                      {isAdmin && (
                        <StyledTableCell align="left">{id}</StyledTableCell>
                      )}
                      <StyledTableCell align="left">
                        2 Aptil 2020
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {photo.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a href={photo.mediaURL} target="_blank">
                          See Post
                        </a>
                      </StyledTableCell>
                      {isAdmin && (
                        <StyledTableCell align="right">
                          <Box component="div" sx={{ display: "inline" }}>
                            <CancelIcon
                              color="action"
                              onClick={() => {
                                handleCancelClick(photo.mediaId);
                              }}
                            />
                          </Box>
                          <Box component="div" sx={{ display: "inline" }}>
                            <DoneIcon
                              color="primary"
                              onClick={() => {
                                handleDoneClick(photo.mediaId);
                              }}
                            />
                          </Box>
                        </StyledTableCell>
                      )}
                      {!isAdmin && (
                        <StyledTableCell align="left">
                          <Button>Delete</Button>
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCommunityImages;
