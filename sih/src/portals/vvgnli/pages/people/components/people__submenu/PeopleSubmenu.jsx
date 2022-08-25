import React, { useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import NestedMenuItem from "material-ui-nested-menu-item";
import { useNavigate } from "react-router-dom";

const PeopleSubmenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const navigate = useNavigate();
  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleRightClick}
      >
        Open Menu
      </Button>
      {/* <Typography>Right click to open menu</Typography> */}
      <Menu
        id="simple-menu"
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
        MenuListProps={{ onMouseLeave: handleItemClick }}
      >
        <MenuItem
          onClick={() => {
            navigate("/vvgnli/people/director-general");
            handleItemClick();
          }}
        >
          Director General
        </MenuItem>

        <NestedMenuItem
          label="Senior Fellow"
          parentMenuOpen={!!menuPosition}
          onClick={() => {
            navigate("/vvgnli/people/senior-fellow");
            handleItemClick();
          }}
        >
          <MenuItem onClick={() => {
            navigate("/vvgnli/people/senior-fellow/helen");
            handleItemClick();
          }}>Dr. Helen R Sekar</MenuItem>
          <MenuItem onClick={() => {
            navigate("/vvgnli/people/senior-fellow/sanjay");
            handleItemClick();
          }}>Dr. Sanjay Upadhyaya</MenuItem>
        </NestedMenuItem>
        <NestedMenuItem
          label="Fellows"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Dr. Ruma Ghosh </MenuItem>
          <MenuItem onClick={handleItemClick}>Dr. Anoop K. Satpathy </MenuItem>
          <MenuItem onClick={handleItemClick}> Dr. Shashi Bala</MenuItem>
          <MenuItem onClick={handleItemClick}>
            Dr. Ellina Samantroy Jena
          </MenuItem>
          <MenuItem onClick={handleItemClick}>
            Dr. Otojit Kshetrimayum{" "}
          </MenuItem>
        </NestedMenuItem>
        <NestedMenuItem
          label="Associate Fellows"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Dr. Dhanya M B </MenuItem>
          <MenuItem onClick={handleItemClick}>
            Mr. Priyadarsan Amitav Khuntia
          </MenuItem>
          <MenuItem onClick={handleItemClick}> Dr. Ramya Ranjan Patel</MenuItem>
          <MenuItem onClick={handleItemClick}>Dr. Manoj Jatav </MenuItem>
        </NestedMenuItem>
        <NestedMenuItem
          label="Administration"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleItemClick}>Mr. Harsh Singh Rawat </MenuItem>
          <MenuItem onClick={handleItemClick}>Mr. V. K. Sharma </MenuItem>
          <MenuItem onClick={handleItemClick}>
            Mr. Shreeniwas Kumar Varma
          </MenuItem>
          <MenuItem onClick={handleItemClick}>Mr. Shailesh Kumar </MenuItem>
        </NestedMenuItem>
        <MenuItem onClick={handleItemClick}>Office Staff</MenuItem>
      </Menu>
    </div>
  );
};

export default PeopleSubmenu;