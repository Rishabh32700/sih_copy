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

const ResearchSubmenu = () => {
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
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForInternationalNetworking"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for International Networking
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate("/vvgnli/research/centreForLabourMarketStudies");
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Labour Market Studies
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForEmploymentRelationsAndRegulations"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Employment Relations and Regulations
                  </Typography>
                </MenuItem>
                {/* <MenuItem>
                  <Typography textAlign="center">Regulations</Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForAgrarianRelationsRuralAndBehaviouralStudies"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Agrarian Relations, Rural and Behavioural Studies
                  </Typography>
                </MenuItem>
                {/* <MenuItem>
                  <Typography textAlign="center">
                    Behavioural Studies
                  </Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForNationalResourceCentreOnChildLabour"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for National Resource Centre on Child Labour
                  </Typography>
                </MenuItem>
                {/* <MenuItem>
                  <Typography textAlign="center">Labour</Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForIntegratedLabourHistoryResearchProgramme"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Integrated Labour History Research Programme
                  </Typography>
                </MenuItem>
                {/* <MenuItem>
                  <Typography textAlign="center">Programme</Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForLabourAndHealthStudies"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Labour and Health Studies
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForGenderAndLabourStudies"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Gender and Labour Studies
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate("/vvgnli/research/centreForNorthEastIndia");
                  }}
                >
                  <Typography textAlign="center">
                    Centre for North-East India
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log("research research");
                    navigate(
                      "/vvgnli/research/centreForClimateChangeAndLabour"
                    );
                  }}
                >
                  <Typography textAlign="center">
                    Centre for Climate Change and Labour
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

export default ResearchSubmenu;