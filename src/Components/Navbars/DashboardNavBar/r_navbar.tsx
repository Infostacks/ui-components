import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Badge,
  useTheme,
} from "@mui/material";
import figmaIcons from "../../../Utils/Icons/figma";
import React from "react";
import style from "./style";
import { NavbarBreadcrumbs } from "../../../index";
import StorybookContext from "../../../Context/sampleContext";
import NavProfileMenu from "../../Cards/NavProfileMenu/navProfile";

export interface DashboardNavBarProps {
  handleNotification: () => void;
  handleChat: () => void;
  unreadNotificationCount: Number;
  unreadChatCount: Number;
}

export default function DashboardNavBar({
  handleNotification,
  handleChat,
  unreadNotificationCount,
  unreadChatCount,
}: DashboardNavBarProps) {
  const theme = useTheme();
  const { userAuth, signOutContext, menuListItems } =
    React.useContext(StorybookContext);
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
    return <Typography>Somethings wrong with Context/Provider...</Typography>;
  }

  return (
    <Box sx={style.navBarContainer}>
      <NavbarBreadcrumbs />
      <Box sx={style.navBarInnerBox}>
        <IconButton disableRipple onClick={handleChat}>
          <Badge
            badgeContent={unreadChatCount}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: theme.palette.accent?.main,
                color: "#fff",
              },
            }}
          >
            {figmaIcons.messageIcons()}
          </Badge>
        </IconButton>
        <IconButton disableRipple onClick={handleNotification}>
          <Badge
            badgeContent={unreadNotificationCount}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: theme.palette.accent?.main,
                color: "#fff",
              },
            }}
          >
            {figmaIcons.notificationIcons()}
          </Badge>
        </IconButton>
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
