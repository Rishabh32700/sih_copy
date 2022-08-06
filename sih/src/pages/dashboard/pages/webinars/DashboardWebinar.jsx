import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./DashboardWebinar.css";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import {  Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const WEBINARLIST = [
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DashboardWebinar = () => {
  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Webinars Section
          </Typography>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Webinar Name</StyledTableCell>
                  <StyledTableCell align="right">Department</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Host</StyledTableCell>
                  <StyledTableCell align="right">Webinar Link</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Registers Users</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {WEBINARLIST.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.department}</StyledTableCell>
                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.host}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <a href={row.webinarLink}>Webinar Link</a>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.status ? "Scheduled" : "Completed"}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <a href={row.usersLink}>Users Link</a>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Box component="div" sx={{ display: "inline" }}>
                        <CancelIcon color="action" />
                      </Box>
                      <Box component="div" sx={{ display: "inline" }}>
                        <DoneIcon color="primary" />
                      </Box>
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

export default DashboardWebinar;