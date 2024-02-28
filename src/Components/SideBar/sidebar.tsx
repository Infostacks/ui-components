import React from "react";
import Box from "@mui/material/Box";
import figmaIcons from "../../Utils/Icons/figma";
import style from "./style";
import ListItem from "./listItem";
import { Typography } from "@mui/material";
import { DashboardItem } from '../../Utils/Constants/dashboardItemList';
export interface SideBarProps {
  title: string;
  onClick?: Function;
  activeSection: string;
  handleSectionClick: (section: string) => void;
  listItems: [DashboardItem],
  isXsScreen?: boolean
}

const SideBar = ({
  title,
  onClick,
  activeSection,
  handleSectionClick,
  listItems,
  isXsScreen = false,
}: SideBarProps) => {
  const [collapsed, setCollapsed] = React.useState(isXsScreen);

  const handleCollapseToggle = () => {
    if (isXsScreen) setCollapsed(true);
    else setCollapsed(prev => !prev);
    if (onClick) onClick();
  };

  return (
    <Box sx={style.containerBoxSideBar(collapsed)}>
      <Box sx={style.containerBoxSideBarTop}>
        <Box
          sx={style.childTransition(collapsed)}
        >
          {figmaIcons.dashBoardIcons()}
          <Typography sx={style.logoTypo(collapsed)}>
            {!collapsed &&
              title
            }
          </Typography>
        </Box>
        <ListItem
          isCollapsed={collapsed}
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          listItems={listItems}
        />
      </Box>
      <Box>
        <Box
          sx={style.childCTransition(collapsed)}
          onClick={handleCollapseToggle}
        >
          {figmaIcons.collapseIcons()}
          <Typography sx={style.collapseTypo(collapsed)}>
            {!collapsed && "Collapse menu"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


export default SideBar;
