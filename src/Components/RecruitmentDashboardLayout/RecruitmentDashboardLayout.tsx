import { Box } from "@mui/material";
import DashboardNavBar from "../DashboardNavBar";
import React from "react";
import style from "./style";
import { Outlet } from "react-router-dom";
import { RSidebar } from "..";
import { DashboardItem } from "../../Utils/Constants/dashboardItemList";

export interface DashboardLayoutProps {
  dashboardItemList: DashboardItem[];
  activeSection: string;
  handleSectionClick: (section: string) => void;
  isSmallScreen: boolean;
}

const R_DashboardLayout = (
  {
    dashboardItemList, 
    activeSection, 
    handleSectionClick, 
    isSmallScreen
  }:DashboardLayoutProps) => {
  return (
    <Box
      sx={style.layoutContainer}
    >
      <RSidebar 
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
        title="Candidate"
        isSmallScreen={isSmallScreen}
        listItems={dashboardItemList}
      />
      <Box sx={style.parentBoxDashBoard}>
        <DashboardNavBar />
        <Box sx={style.chartParentContainerBox}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default R_DashboardLayout;
