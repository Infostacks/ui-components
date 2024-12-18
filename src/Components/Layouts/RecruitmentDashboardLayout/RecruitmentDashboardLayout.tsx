import { Box } from "@mui/material";
import DashboardNavBar from "../../Navbars/DashboardNavBar";
import React from "react";
import style from "./style";
import { Outlet } from "react-router-dom";
import { RSidebar } from "../..";
import { DashboardItem } from "../../../Utils/Constants/dashboardItemList";

export interface DashboardLayoutProps {
  title: string;
  dashboardItemList: DashboardItem[];
  activeSection: string;
  handleSectionClick: (section: string) => void;
  isSmallScreen: boolean;
  handleNotification:()=>void;
  handleChat:()=>void,
  unreadNotificationCount:Number;
  unreadChatCount:Number;

}

const R_DashboardLayout = (
  {
    title,
    dashboardItemList, 
    activeSection, 
    handleSectionClick, 
    isSmallScreen,
    handleNotification,
    handleChat,
    unreadNotificationCount,
    unreadChatCount

  }:DashboardLayoutProps) => {
  return (
    <Box
      sx={style.layoutContainer}
    >
      <RSidebar 
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        title={title}
        isSmallScreen={isSmallScreen}
        listItems={dashboardItemList}
      />
      <Box sx={style.parentBoxDashBoard}>
        <DashboardNavBar handleChat={handleChat} handleNotification={handleNotification} unreadChatCount={unreadChatCount} unreadNotificationCount={unreadNotificationCount}/>
        <Box sx={style.chartParentContainerBox}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default R_DashboardLayout;
