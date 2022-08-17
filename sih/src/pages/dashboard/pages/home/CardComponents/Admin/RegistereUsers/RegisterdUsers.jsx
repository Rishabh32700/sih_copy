import React, { useState, useEffect } from "react";
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
import config from "../../../../../../../ApiConfig/Config";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import RegisteredUsersCardTable from "./RegisteredUsersCardTable";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




const RegisterdUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [allUsers, setAllUsers] = useState([]);
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAllUsersBasicInfo = async () => {
    const res = await axios.get(
      config.server.path +
        config.role.admin +
        config.api.getUserDetails +
        `?userId=${userId}`
    );
    setAllUsers(res.data.userDetails);
    console.log(res.data.userDetails);
  };

  const handleClickMoreInfo = (id) => {
    handleClose();
    // navigate(`dasboard/home/registerdUsers/:userId`)
    console.log(id);
  };

  useEffect(() => {
    getAllUsersBasicInfo();
  }, []);
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
                <StyledTableCell align="left">More</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers &&
                allUsers.map((user) => (
                  <RegisteredUsersCardTable key={user.userId} user={user} />

                  // <StyledTableRow key={user.userId}>
                  //   <StyledTableCell align="left">
                  //     {user.userId}
                  //   </StyledTableCell>
                  //   <StyledTableCell align="left">
                  //     {user.emailAddress}
                  //   </StyledTableCell>
                  //   <StyledTableCell align="left">
                  //     {user.userName}
                  //   </StyledTableCell>
                  //   <StyledTableCell align="left">
                  //     <Switch
                  //       style={{ width: "80px" }}
                  //       checkedChildren="Admin"
                  //       unCheckedChildren="Regular"
                  //       defaultChecked
                  //     />
                  //   </StyledTableCell>
                  //   <StyledTableCell align="left">
                  //     <div>
                  //       <IconButton
                  //         aria-label="more"
                  //         id="long-button"
                  //         aria-controls={open ? "long-menu" : undefined}
                  //         aria-expanded={open ? "true" : undefined}
                  //         aria-haspopup="true"
                  //         onClick={handleClick}
                  //       >
                  //         <MoreVertIcon style={{ color: "#000" }} />
                  //       </IconButton>
                  //       <Menu
                  //         id="long-menu"
                  //         MenuListProps={{
                  //           "aria-labelledby": "long-button",
                  //         }}
                  //         anchorEl={anchorEl}
                  //         open={open}
                  //         onClose={handleClose}
                  //         PaperProps={{
                  //           style: {
                  //             maxHeight: ITEM_HEIGHT * 4.5,
                  //             width: "20ch",
                  //           },
                  //         }}
                  //       >
                  //         <MenuItem onClick={()=>handleClickMoreInfo(user.emailAddress)}>
                  //           More Info
                  //         </MenuItem>
                  //         <MenuItem onClick={handleClose}>Delete</MenuItem>
                  //       </Menu>
                  //     </div>
                  //   </StyledTableCell>
                  // </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RegisterdUsers;
