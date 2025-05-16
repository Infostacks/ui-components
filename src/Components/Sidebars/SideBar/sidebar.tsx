import React from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    styled,
    useTheme,
    Tooltip,
} from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DashboardItem } from '../../../Utils/Constants/dashboardItemList';
import { ExpandLess, ExpandMore, ChevronLeft } from "@mui/icons-material";
import { motion, AnimatePresence } from 'framer-motion';

export interface SideBarProps {
    onClick?: Function;
    activeSection: string;
    handleSectionClick: (section: string) => void;
    listItems: DashboardItem[],
    isSmallScreen: boolean
  }

// Styled Components
const GlassBox = styled(motion.div)(({ theme }) => ({
    background: theme.palette.background.paper,
    backdropFilter: 'blur(16px)',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.palette.mode === 'dark' 
        ? '0 8px 32px rgba(0,0,0,0.4)' 
        : '0 8px 32px rgba(0,0,0,0.1)',
    borderRadius: '16px',
    overflow: 'hidden',
    height: 'fit-content',
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
}));

const SidebarLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    display: 'block',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateX(4px)'
    },
    '&.active': {
        color: theme.palette.primary.main,
        '& .MuiListItemIcon-root': {
            color: theme.palette.primary.main
        },
        '& .MuiListItem-root': {
            background: theme.palette.mode === 'dark'
                ? `rgba(${hexToRgb(theme.palette.primary.main)}, 0.15)`
                : `rgba(${hexToRgb(theme.palette.secondary.main)}, 0.1)`,
            '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '4px',
                background: theme.palette.primary.main,
                borderRadius: '0 4px 4px 0'
            }
        }
    }
}));

const AvatarContainer = styled(motion.div)(({ theme }) => ({
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    boxShadow: `0 4px 12px rgba(${hexToRgb(theme.palette.primary.main)}, 0.3)`,
    cursor: 'pointer',
    flexShrink: 0
}));

const UserName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1.1rem',
    maxWidth: '100%',
}));

// Helper function
function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
}


const SideBar: React.FC<SideBarProps> = ({
    handleSectionClick,
    listItems,
    isSmallScreen = false
}) => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({});
    const [collapsed, setCollapsed] = React.useState(isSmallScreen);

    React.useEffect(() => {
        setCollapsed(isSmallScreen);
    }, [isSmallScreen]);

    const toggleExpand = (label: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };
    const isItemActive = (item: DashboardItem) => {
        // Exact match
        if (location.pathname === item.path) return true;
        
        // Sub-item match
        // if (item?.subItems?.some(subItem => location.pathname === subItem.path)) return true;
        
        // Special case for dashboard (only match exactly)
        if (item.path === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        
        return false;
    };
    // const isItemActive = (item: DashboardItem) => {
    //     return location.pathname === item.path || 
    //            (item.subItems && item.subItems.some(subItem => location.pathname === subItem.path));
    // };
 
    const handleCollapseToggle = () => {
        setCollapsed(prev => !prev);
    };

    const handleProfileClick = () => {
        navigate('/dashboard/profile');
    };

    const renderItemIcon = (item: DashboardItem) => {
        const IconComponent = item.icon;
        const isActive = isItemActive(item);
        const iconColor = isActive ? theme.palette.primary.main : theme.palette.text.secondary;
        
        return (
            <Box sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: iconColor,
                '& svg': {
                    fontSize: '1.6rem',
                    transition: 'transform 0.2s ease',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)'
                }
            }}>
                {/* {typeof IconComponent === 'function' ? 
                    <IconComponent /> : 
                    React.isValidElement(IconComponent) ? 
                    React.cloneElement(IconComponent) : 
                    IconComponent} */}
                    {IconComponent(iconColor)}
            </Box>
        );
    };

    return (
        <GlassBox
            initial={false}
            animate={{
                width: collapsed ? 80 : 280
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
            sx={{
                display:'flex'
            }}
        >
            {/* Profile Section */}
            <Box 
                sx={{ 
                    p: collapsed ? 2 : 3,
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    cursor: 'pointer',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    height: 100,
                    minHeight: 100,
                    boxSizing: 'border-box'
                }}
                onClick={handleProfileClick}
            >
                {/* <AvatarContainer
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {title.charAt(0).toUpperCase()}
                </AvatarContainer> */}
                
                <AnimatePresence>
                    {!collapsed && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                overflow: 'hidden',
                                flexGrow: 1,
                                maxWidth: 'calc(100% - 58px)',
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                                width: '100%',
                            }}>
                                <UserName variant="body1">candidate</UserName>
                                <Typography variant="caption" color="text.secondary" sx={{
                                    display: 'block',
                                    mt: 0.5,
                                    opacity: 0.8,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontSize: '0.9rem',
                                    maxWidth: '100%',
                                }}>
                                    candidate@careerflow.com
                                </Typography>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>

            <Divider sx={{
                borderColor: 'divider',
                mx: 2,
                opacity: 0.5
            }} />

            {/* Menu Items */}
            <List sx={{ p: 2, flexGrow: 1, overflow: 'hidden' }}>
                {listItems.map((item) => (
                    <React.Fragment key={item.path}>
                        <Tooltip title={collapsed ? item.label : ''} placement="right">
                            <SidebarLink
                                to={item.path}
                                className={isItemActive(item) ? 'active' : ''}
                            >
                                <ListItem
                                    button
                                    sx={{
                                        borderRadius: '12px',
                                        mb: 0.5,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: collapsed ? 'center' : 'flex-start',
                                        minHeight: 48,
                                        px: collapsed ? 0 : 2,
                                        '&:hover': {
                                            background: theme.palette.mode === 'dark'
                                                ? `rgba(${hexToRgb(theme.palette.primary.main)}, 0.1)`
                                                : `rgba(${hexToRgb(theme.palette.secondary.main)}, 0.08)`,
                                        }
                                    }}
                                    onClick={() => {
                                        handleSectionClick(item.section);
                                        navigate(item.path)

                                        // if (item.subItems) {
                                        //     if (!collapsed) toggleExpand(item.path);
                                        // } else {
                                        //     handleSectionClick(item.path);
                                        // }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 'auto',
                                        width: 'auto',
                                        height: 'auto',
                                        justifyContent: 'center',
                                        margin: 0,
                                        mr: collapsed ? 0 : 2,
                                    }}>
                                        {renderItemIcon(item)}
                                    </ListItemIcon>
                                    
                                    <AnimatePresence>
                                        {!collapsed && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.2 }}
                                                style={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    flexGrow: 1,
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{
                                                        variant: 'body1',
                                                        fontWeight: isItemActive(item) ? 600 : 500,
                                                        fontSize: '0.95rem',
                                                        noWrap: true,
                                                    }}
                                                    sx={{
                                                        transition: 'opacity 0.2s ease',
                                                        opacity: collapsed ? 0 : 1
                                                    }}
                                                />
                                                {item.section && (
                                                    expandedItems[item.path] 
                                                        ? <ExpandLess sx={{ ml: 'auto' }} /> 
                                                        : <ExpandMore sx={{ ml: 'auto' }} />
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </ListItem>
                            </SidebarLink>
                        </Tooltip>

                        {/* Nested items */}
                        {/* {!collapsed && item.section && expandedItems[item.path] && (
                            <Collapse in={expandedItems[item.path]} timeout="auto" unmountOnExit>
                                <Box sx={{
                                    pl: 4,
                                    overflow: 'hidden'
                                }}>
                                    {item.subItems.map((subItem) => (
                                        <SidebarLink
                                            to={subItem.path}
                                            key={subItem.path}
                                            className={location.pathname === subItem.path ? 'active' : ''}
                                        >
                                            <ListItem
                                                button
                                                sx={{
                                                    borderRadius: '8px',
                                                    pl: 4,
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        background: theme.palette.mode === 'dark'
                                                            ? `rgba(${hexToRgb(theme.palette.primary.main)}, 0.08)`
                                                            : `rgba(${hexToRgb(theme.palette.secondary.main)}, 0.05)`,
                                                    }
                                                }}
                                                onClick={() => handleSectionClick(subItem.path)}
                                            >
                                                <ListItemText
                                                    primary={subItem.label}
                                                    primaryTypographyProps={{
                                                        variant: 'body1',
                                                        fontSize: '0.9rem',
                                                        noWrap: true,
                                                    }}
                                                />
                                            </ListItem>
                                        </SidebarLink>
                                    ))}
                                </Box>
                            </Collapse>
                        )} */}
                    </React.Fragment>
                ))}
            </List>

            {/* Collapse Button */}
            <Box sx={{ p: 2 }}>
                <ListItem
                    button
                    onClick={handleCollapseToggle}
                    sx={{
                        borderRadius: '12px',
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        px: collapsed ? 0 : 2,
                        color: theme.palette.text.secondary, // Add this line
                        '&:hover': {
                            background: theme.palette.mode === 'dark'
                                ? `rgba(${hexToRgb(theme.palette.primary.main)}, 0.1)`
                                : `rgba(${hexToRgb(theme.palette.secondary.main)}, 0.08)`,
                            color: theme.palette.text.primary, // Add hover color change
                        }
                    }}
                >
                    <ListItemIcon sx={{ 
                        minWidth: 'auto',
                        justifyContent: 'center',
                        transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.3s ease',
                        mr: collapsed ? 0 : 2,
                        color: 'inherit' // Ensure icon inherits text color
                    }}>
                        <ChevronLeft sx={{ fontSize: '1.6rem' }} />
                    </ListItemIcon>
                    
                    <AnimatePresence>
                        {!collapsed && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ListItemText
                                    primary="Collapse"
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        fontSize: '0.95rem',
                                        noWrap: true,
                                        color: 'inherit' // Inherit color from ListItem
                                    }}
                                    sx={{
                                        color: 'inherit' // Double ensure color inheritance
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </ListItem>
            </Box>
        </GlassBox>
    );
};

export default SideBar;