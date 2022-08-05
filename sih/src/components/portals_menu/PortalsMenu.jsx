import React, { useContext } from "react";
import { gData } from "../../App";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import "./portalsMenu.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const PortalsMenu = () => {
  let myData = useContext(gData);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>

          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/login"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        myData.setState(1);
                      }}
                    >
                      <Typography textAlign="center">VVGNLI</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        myData.setState(2);
                      }}
                    >
                      <Typography textAlign="center">Community</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        myData.setState(3);
                      }}
                    >
                      <Typography textAlign="center">Webinar</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        myData.setState(4);
                      }}
                    >
                      <Typography textAlign="center">Research Work</Typography>
                    </MenuItem>
                  </Menu>
                </Box>

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                <Box style={{justifyContent:"space-evenly"}} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button
                    onClick={() => {
                      myData.setState(1);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    VVGNLI
                  </Button>
                  <Button
                    onClick={() => {
                      myData.setState(2);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Community
                  </Button>
                  <Button
                    onClick={() => {
                      myData.setState(3);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Webinar
                  </Button>
                  <Button
                    onClick={() => {
                      myData.setState(4);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Research Work
                  </Button>
                </Box>
                {console.log(myData.state)}

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="R" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
    </>
  );
};

export default PortalsMenu;
