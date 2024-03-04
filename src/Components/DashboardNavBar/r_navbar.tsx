import { Avatar, Box, Menu, MenuItem, Typography,  } from "@mui/material";
import figmaIcons from "../../Utils/Icons/figma";
import React from "react";
import style from "./style";
import {NavbarBreadcrumbs} from "../../index";
import StorybookContext from "../../Context/sampleContext";

export default function DashboardNavBar() {
  const { userAuth, signOutContext } = React.useContext(StorybookContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Log the user out using the signOutContext function
    signOutContext();
    // Close the menu
    handleClose();
  };

  if(!userAuth) {
    return (
      <Typography>Somethings wrong with Context/Provider...</Typography>
    )
  }

  return (
    <Box sx={style.navBarContainer}>
      <NavbarBreadcrumbs />
      <Box sx={style.navBarInnerBox}>
        {figmaIcons.messageIcons()}
        {figmaIcons.notificationIcons()}
        <Avatar
          component={"div"}
          alt="user profile pic nav"
          src={userAuth?.photoURL}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
          referrerPolicy="no-referrer"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        {/* <Avatar src={image} /> */}
      </Box>
    </Box>
  );
}