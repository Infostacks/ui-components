import { Box, Typography } from '@mui/material';
import dashboardItemList,{ DashboardItem } from '../../Utils/Constants/dashboardItemList';
import React from 'react'
import style from './style';
import { useNavigate } from 'react-router-dom';
// import  from '../../Utils/Constants/dashboardItemList';


interface ListItemProps{
  isCollapsed: boolean,
  activeSection: string,
  handleSectionClick: (section: string) => void
}

const ListItem = ({isCollapsed,activeSection,handleSectionClick}:ListItemProps) => {
    const navigate = useNavigate();
  return (
    <Box sx={{ padding: isCollapsed ? "7px" : "12px 16px", bgcolor: "" }}>
    {dashboardItemList.map((menuItem:DashboardItem,index:number) => (
      <Typography
        key={index}
        sx={style.menuItemTypo(activeSection === menuItem.section)}
        onClick={() => {
          handleSectionClick(menuItem.section);
          navigate(menuItem.path);
        }}
      >
        {menuItem.icon(
          activeSection === menuItem.section ? "#4950FF" : "#292D32"
        )}
        {!isCollapsed && menuItem.label}
      </Typography>
    ))}
  </Box>
  )
}

export default ListItem