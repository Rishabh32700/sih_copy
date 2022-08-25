import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";


import "./vvgnliMainMenu.css";
import { useNavigate } from "react-router-dom";

export default function VvgnliMainMenu() {
const navigate = useNavigate()

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli")
          }}
        >
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/about-us")
            console.log("gjhsdjkvjvjrkwblkrcbh");
          }}
        >
          <ListItemButton>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/research")
          }}
        >
          <ListItemButton>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/training")
          }}
        >
          <ListItemButton>
            <ListItemText primary="Training" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/publication")
          }}
        >
          <ListItemButton>
            <ListItemText primary="Publication" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/library") 
          }}
        >
          <ListItemButton>
            <ListItemText primary="Library" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/people") 
          }}
        >
          <ListItemButton>
            <ListItemText primary="People" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/online-training") 
          }}
        >
          <ListItemButton>
            <ListItemText primary="Online Training" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/e-resource")
          }}
        >
          <ListItemButton>
            <ListItemText primary="E-Resource" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/vvgnli/mou")
          }}
        >
          <ListItemButton>
            <ListItemText primary="MOU" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      style={{
        height: "fit-content",
        position: "fixed",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 1rem",
        width: "100%",
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{  color: "white", alignSelf: "right" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
