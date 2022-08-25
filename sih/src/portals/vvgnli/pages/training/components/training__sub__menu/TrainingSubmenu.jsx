import React from "react";

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
const TrainingSubmenu = () => {
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

                    navigate("/vvgnli/training/Current-Training-Programmes");
                  }}
                >
                  <Typography textAlign="center">
                    Current Training Programmes
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    console.log("hello  director general");
                    navigate(
                      "/vvgnli/training/Training-Calendar-2022-2023-English"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Training Calendar 2022-2023 -English
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate(
                      "/vvgnli/training/Training-Calendar-2022-2023-Hindi"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Training Calendar 2022-2023 -Hindi
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate(
                      "/vvgnli/training/International-Training-Programmes"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    International Training Programmes
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/training/Domestic-Training-Programmes");
                  }}
                >
                  <Typography textAlign="center">
                    Domestic Training Programmes
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("hello  hello");
                    navigate("/vvgnli/training/ITEC-Sanction-FY-2022-23");
                  }}
                >
                  <Typography textAlign="center">
                    ITEC Sanction FY 2022-23
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default TrainingSubmenu;