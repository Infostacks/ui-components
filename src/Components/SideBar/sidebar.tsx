import React from "react";
import Box from "@mui/material/Box";
import figmaIcons from "../../Utils/Icons/figma";
import style from "./style";
import ListItem from "./listItem";
import { Typography } from "@mui/material";

export interface SideBarProps {
  isCollapsed: boolean;
  handleCollapseToggle: () => void;
  activeSection: string;
  handleSectionClick: (section: string) => void;
}

const SideBar = ({
  isCollapsed,
  handleCollapseToggle,
  activeSection,
  handleSectionClick,
}:SideBarProps) => {

  return (
    <Box sx={style.containerBoxSideBar(isCollapsed)}>
      <Box sx={style.containerBoxSideBarTop}>
        <Typography sx={style.logoTypo}>
          {figmaIcons.dashBoardIcons}
          {!isCollapsed && "Candidate"}
        </Typography>
        {/* <ListItem isCollapsed={isCollapsed} activeSection={activeSection} handleSectionClick={handleSectionClick}/> */}
      </Box>
      <Box sx={{ bgcolor: "" }}>
        <Typography sx={style.collapseTypo} onClick={handleCollapseToggle}>
          {figmaIcons.collapseIcons} {!isCollapsed && "Collapse menu"}
        </Typography>
      </Box>
    </Box>
  );
};


export default SideBar;
