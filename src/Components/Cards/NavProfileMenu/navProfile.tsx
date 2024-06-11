import React from "react";
import { Badge, Box, Menu, MenuItem, Typography, } from "@mui/material";
import style from './style';
import { Link } from "react-router-dom";
import figmaIcons from "../../../Utils/Icons/figma";

export interface INavProfileMenu {
  userAuth: any;
  anchorEl: any;
  open: boolean;
  handleClose: () => void;
  menuListItems: any;
  handleLogout: () => void;
}

const NavProfileMenu = ({
  userAuth,
  anchorEl,
  open,
  handleClose,
  menuListItems,
  handleLogout
}: INavProfileMenu) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: style.paperProps
      }}
      keepMounted={true}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Link to="/dashboard/profile" style={{ textDecoration: 'none', color: 'black' }}>
        <Box sx={style.imageContainer}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            color="success"
            variant="dot"
            sx={{
              "& .MuiBadge-dot": {
                width: '10px !important',
                height: '10px !important'
              }
            }}
          >
            <img src={userAuth.photoURL} style={{ width: '46px', height: '46x', borderRadius: '50%' }} alt={userAuth.displayName} />
          </Badge>
          <Box>
            <Typography fontWeight={500}>{userAuth.displayName}</Typography>
            <Typography color={"#818089"}>{userAuth.email}</Typography>
          </Box>
        </Box>
      </Link>
      <Box sx={{width: '100%', height: '0.7px', background:'#C0BFC4', my: 1}}></Box>
      {
        menuListItems &&
        menuListItems.map((menuList: any) => (
          <MenuItem key={menuList.text} onClick={handleClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              "&.MuiMenuItem-root": {
                px: '0px',
                py: '15px'
              }
            }}
          >
            <Link
              to={menuList.href}
              style={style.textStyle}
            >
              {menuList.icon}
              {menuList.text}
            </Link>
          </MenuItem>
        ))
      }

      <Box sx={{width: '100%', height: '0.7px', background:'#C0BFC4', my: 1}}></Box>
      <MenuItem onClick={handleLogout}>
        <Link
          to={'#'}
          role="button"
          style={style.textStyle}
        >
          {figmaIcons.doorExit()}
          Logout
        </Link>
      </MenuItem>

      {/* <hr /> */}

    </Menu>
  )
}

export default NavProfileMenu