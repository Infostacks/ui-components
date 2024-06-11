import { Avatar, Box, Typography } from "@mui/material";
import figmaIcons from "../../../Utils/Icons/figma";
import React from "react";
import style from "./style";
import { NavbarBreadcrumbs } from "../../../index";
import StorybookContext from "../../../Context/sampleContext";
import NavProfileMenu from "../../Cards/NavProfileMenu/navProfile";

export default function DashboardNavBar() {
  const { userAuth, signOutContext, menuListItems } = React.useContext(StorybookContext);
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

  if (!userAuth) {
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
          alt={userAuth?.displayName}
          src={userAuth?.photoURL}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
          referrerPolicy="no-referrer"
          rel="noreferrer"
        />
        <NavProfileMenu
          userAuth={userAuth}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          menuListItems={menuListItems}
          handleLogout={handleLogout}
        />
      </Box>
      {/* <Avatar src={image} /> */}
    </Box>
  );
}