import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Button } from "@material-ui/core";
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

const RegisteredUserUploadedResearch = () => {
  const [researchWorks, setResearchWorks] = useState([]);
  const { userId } = useParams();

  const getUserResearchWork = async () => {
    const res = await axios.get(
      config.server.path + config.api.getResearchWorkForUserId + `?userId=${userId}`
    );
    console.log(res.data);
    setResearchWorks(res.data.researchWorkArray);
  };

  useEffect(() => {
    getUserResearchWork();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Research Section for User {userId}
          </Typography>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Media ID</StyledTableCell>
                  <StyledTableCell align="left">Paper Link</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {researchWorks &&
                  researchWorks.map((researchWork, id) => (
                    <StyledTableRow key={id}>
                      <StyledTableCell align="left">
                        {moment(researchPaper.currentTimeStamp).format(
                          "dd DD MMMM YYYY"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {researchWork.mediaId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a
                          href={researchWork.mediaURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          See Paper
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="right">
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

export default RegisteredUserUploadedResearch;
