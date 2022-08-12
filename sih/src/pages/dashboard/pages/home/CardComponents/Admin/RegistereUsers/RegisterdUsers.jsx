import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "antd/dist/antd.css";
import { Switch } from "antd";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./registeredUser.css";

import { useNavigate } from "react-router-dom";
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

const ITEM_HEIGHT = 25;

const RegisterdUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const user = {
    userId: 1,
    userEmail: "abc@gmail.com",
    userName: "NAnd kumar",
    userRole: "regular",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dashboard__community__registered__users">
      <div className="dashboard__community__list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">User Id</StyledTableCell>
                <StyledTableCell align="left">User Email</StyledTableCell>
                <StyledTableCell align="left">User Name</StyledTableCell>
                <StyledTableCell align="left">User Role</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {photos &&
                photos.map((photo, id) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell align="left">{id}</StyledTableCell>
                    <StyledTableCell align="left">2 Aptil 2020</StyledTableCell>
                    <StyledTableCell align="left">
                      {photo.mediaId}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <a href={photo.mediaURL} target="_blank">
                        See Post
                      </a>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button>Delete</Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody> */}
            <TableBody>
              <StyledTableRow key={user.userId}>
                <StyledTableCell align="left">{user.userId}</StyledTableCell>
                <StyledTableCell align="left">{user.userEmail}</StyledTableCell>
                <StyledTableCell align="left">{user.userName}</StyledTableCell>
                <StyledTableCell align="left">
                  <Switch
                    checkedChildren="Admin"
                    unCheckedChildren="Regular"
                    defaultChecked
                  />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose}>More Info</MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={user.userId}>
                <StyledTableCell align="left">{user.userId}</StyledTableCell>
                <StyledTableCell align="left">{user.userEmail}</StyledTableCell>
                <StyledTableCell align="left">{user.userName}</StyledTableCell>
                <StyledTableCell align="left">
                  <Switch
                    checkedChildren="Admin"
                    unCheckedChildren="Regular"
                    defaultChecked
                  />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon style={{ color: "#000" }} />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          navigate(
                            `${user.userId}`
                          );
                        }}
                      >
                        More Info
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RegisterdUsers;
