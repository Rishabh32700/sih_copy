import React from "react";

import "./aboutUsSubmenu.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

const AboutUSSubmenu = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "block" } }}>
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
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "block" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");

                    navigate("/vvgnli/about-us");
                  }}
                >
                  <Typography textAlign="center">About US</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    console.log("hello  director general");
                    navigate("/vvgnli/about-us/director-general");
                  }}
                >
                  <Typography textAlign="center">Director General</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/vision-mission");
                  }}
                >
                  <Typography textAlign="center">Vision & mission</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/history");
                  }}
                >
                  <Typography textAlign="center">History</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/governing-bodies");
                  }}
                >
                  <Typography textAlign="center">Governing Bodies</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/infrastructure");
                  }}
                >
                  <Typography textAlign="center">Infrastructure</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/networking");
                  }}
                >
                  <Typography textAlign="center">Networking</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/about-us/whoswho");
                  }}
                >
                  <Typography textAlign="center">Who's who</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AboutUSSubmenu;