import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemIcon from "@mui/material/ListItemIcon";

import { gData } from "../../../App";

import "./DashboardMainMenu.css";

export default function DashboardMainMenu() {
  const myGlobalDataForDashboardMainMenu = useContext(gData);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
              "home"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
              "community"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Community" />
          </ListItemButton>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Images" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Videos" />
          </ListItemButton>
        </List>
        </ListItem> */}

        <ListItemButton>
          <ListItemText primary="Community" />
        </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
                "images"
              );
            }}
          >
            <ListItemText primary="Images" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
                "videos"
              );
            }}
          >
            <ListItemText primary="Videos" />
          </ListItemButton>
        </List>

        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
              "research"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
              "webinar"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Webinar" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            myGlobalDataForDashboardMainMenu.set_dashboard_main_menu_state(
              "imageModal"
            );
          }}
        >
          <ListItemButton>
            <ListItemText primary="Image Modal" />
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
            <MenuIcon style={{ color: "white", alignSelf: "right" }} />
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
