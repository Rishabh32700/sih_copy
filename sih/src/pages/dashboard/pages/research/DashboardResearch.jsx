import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./DashboardResearch.css";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
// import Scrollbar from "./components/ScrollBar";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import DashboardMainMenu from "../../main__menu__dashboard/DashboardMainMenu";
const RESEARCHLIST = [
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
];

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
}));

const DashboardResearch = ({ isAdmin }) => {
  const [pendingResearchPapers, setPendingResearchPapers] = useState([]);

  const getPendingResearchPapers = async () => {
    try {
      const res = await axios.get(
        "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/getPendingPhotos"
      );
      setPendingResearchPapers(res.data.pendingResearchArray);
      console.log("Research", res);
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
      getPendingResearchPapers();
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
    getPendingResearchPapers();
  };

  useEffect(() => {
    getPendingResearchPapers();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Research Section
          </Typography>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {isAdmin && (
                    <StyledTableCell align="left">User Id</StyledTableCell>
                  )}
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media ID</StyledTableCell>
                  <StyledTableCell align="left">Paper Link</StyledTableCell>
                  {isAdmin && (
                    <StyledTableCell align="left">Action</StyledTableCell>
                  )}
                  {!isAdmin && (
                    <StyledTableCell align="left">Delete</StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingResearchPapers &&
                  pendingResearchPapers.map((pendingResearchPaper, id) => (
                    <StyledTableRow key={id}>
                      {isAdmin && (
                        <StyledTableCell align="left">
                          {pendingResearchPaper.userId}
                        </StyledTableCell>
                      )}
                      <StyledTableCell align="left">
                        {pendingResearchPaper.date}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {pendingResearchPaper.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a
                          href={pendingResearchPaper.paperLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Paper
                        </a>
                      </StyledTableCell>
                      {isAdmin && (
                        <StyledTableCell align="right">
                          <Box component="div" sx={{ display: "inline" }}>
                            <CancelIcon color="action" />
                          </Box>
                          <Box component="div" sx={{ display: "inline" }}>
                            <DoneIcon color="primary" />
                          </Box>
                        </StyledTableCell>
                      )}
                      {!isAdmin && (
                        <StyledTableCell align="left">
                          <Button>Delete</Button>
                        </StyledTableCell>
                      )}
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

export default DashboardResearch;
