import { Box, Typography } from '@mui/material';
import React from 'react'
import style from './style';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  isCollapsed: boolean,
  activeSection: string,
  listItems: [any],
  handleSectionClick: (section: string) => void;
}

const ListItem = ({ isCollapsed, activeSection, handleSectionClick, listItems }: ListItemProps) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "7px" }}>
      {
        listItems.map((menuItem) => (
          <Box
            sx={{
              ...style.childTransition(isCollapsed),
              ...style.menuItemTypo(activeSection === menuItem.section, isCollapsed)
            }}
            onClick={() => {
              handleSectionClick(menuItem.section);
              navigate(menuItem.path);
            }}
            >
            {menuItem.icon(
              activeSection === menuItem.section ? "#4950FF" : "#292D32"
            )}
            <Typography
              key={menuItem.path}
              sx={{
                ...style.collapseTypo(isCollapsed),
                ...{
                  color: activeSection === menuItem.section ? "#4950FF" : "",
                  fontWeight: activeSection === menuItem.section ? 600 : 500,
                  lineHeight: "24px",
                }
              }}
            >
              {!isCollapsed && menuItem.label}
            </Typography>
          </Box>
        ))}
    </Box>
  )
}

export default ListItem