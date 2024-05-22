import { Avatar, Box, Menu, MenuItem, Typography, } from "@mui/material";
import figmaIcons from "../../../Utils/Icons/figma";
import React from "react";
import style from "./style";
import { NavbarBreadcrumbs } from "../../../index";
import StorybookContext from "../../../Context/sampleContext";
import { Link } from "react-router-dom";

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
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: style.paperProps
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box
            sx={style.imageContainer}
          >
            <Box sx={style.colorBox} />
            <Box sx={{
              backgroundColor: 'accent.main',
              height: '55px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img
                alt={userAuth.displayName}
                src={userAuth?.photoURL}

                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "";
                  currentTarget.style.background = "white"
                }}
                style={style.imageStyle} />
            </Box>
            <Box sx={style.colorBox} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h2" fontWeight={'bolder'} fontSize={'18px'} px={3} textAlign={"center"}>{userAuth?.displayName}</Typography>
            <Typography textAlign={'center'} variant="caption">{userAuth?.email}</Typography>
          </Box>
          <hr />
          {
            menuListItems &&
            menuListItems.map((menuList: any) => (
              <MenuItem key={menuList.text} onClick={handleClose}
              >
                <Link
                  to={menuList.href}
                  style={style.textStyle}
                >
                  {menuList.text}
                </Link>
              </MenuItem>
            ))
          }
          <MenuItem onClick={handleLogout}>
            <Link
              to={'#'}
              role="button"
              style={style.textStyle}
            >
              Logout
            </Link>
          </MenuItem>

          {/* <hr /> */}

        </Menu>
      </Box>
      {/* <Avatar src={image} /> */}
    </Box>
  );
}