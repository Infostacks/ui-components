import { Box } from "@mui/material";
import DashboardNavBar from "../../Navbars/DashboardNavBar";
import React from "react";
import { Outlet } from "react-router-dom";
import { RSidebar } from "../..";
import { DashboardItem } from "../../../Utils/Constants/dashboardItemList";

export interface DashboardLayoutProps {
  title: string;
  dashboardItemList: DashboardItem[];
  activeSection: string;
  handleSectionClick: (section: string) => void;
  isSmallScreen: boolean;
  handleNotification: () => void;
  handleChat: () => void;
  unreadNotificationCount: number;
  unreadChatCount: number;
  toggleTheme: () => void;
}

const R_DashboardLayout = ({
  title,
  dashboardItemList,
  activeSection,
  handleSectionClick,
  isSmallScreen,
  handleNotification,
  handleChat,
  unreadNotificationCount,
  unreadChatCount,
  toggleTheme
}: DashboardLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          width: "100%",
          zIndex: 1200,
          flexShrink: 0,
        }}
      >
        <DashboardNavBar
          handleChat={handleChat}
          toggleTheme={toggleTheme}
          title={title}
          handleNotification={handleNotification}
          unreadChatCount={unreadChatCount}
          unreadNotificationCount={unreadNotificationCount}
        />
      </Box>

      {/* Main Layout: Sidebar + Content */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width:'fit-content',
            flexShrink: 0,
            px: "15px",
            py: 2,
            overflowY: "auto",
          }}
        >
          <RSidebar
            activeSection={activeSection}
            handleSectionClick={handleSectionClick}
            isSmallScreen={isSmallScreen}
            listItems={dashboardItemList}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            p:"15px",
            height: "100%",
            width:"100%",
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default R_DashboardLayout;
