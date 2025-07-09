    import React, { useContext } from "react";
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
        Avatar,
    } from "@mui/material";
    import { NavLink, useLocation, useNavigate } from "react-router-dom";
    import { DashboardItem } from '../../../Utils/Constants/dashboardItemList';
    import { ChevronLeft } from "@mui/icons-material";
    import { motion, AnimatePresence } from 'framer-motion';
    import StorybookContext from "../../../Context/sampleContext";

    export interface SideBarProps {
        onClick?: Function;
        activeSection: string;
        handleSectionClick: (section: string) => void;
        listItems: DashboardItem[],
        isSmallScreen: boolean,
        userTitle:string
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
            transform: 'translateX(4px)',
            '& .MuiListItemIcon-root svg': {
                color: theme.palette.primary.light,
            }
        },
        '&.active': {
            color: theme.palette.primary.main,
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
                '& svg': {
                    color: theme.palette.primary.main,
                    transform: 'scale(1.1)'
                }
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
    const AiEmployeesIcon = ({ color }: { color: string }) => (
        <motion.div
            animate={{ 
                scale: [1, 1.3, 1],
                // rotate: [0, 8, -8, 0],
             
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color // This ensures the glow uses the icon color
            }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                aria-hidden="true" 
                data-slot="icon" 
                height="16"
                style={{
                    stroke: 'currentColor', // This makes the glow match the icon color
                    // filter: 'drop-shadow(0 0 2px currentColor)' 
                }}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
            </svg>
        </motion.div>
    );
    const UserName = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
        color: theme.palette.text.primary,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '1rem',
        maxWidth: '100%',
    }));
    
    // Helper function
    function hexToRgb(hex: string): string {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 0, 0';
    }
    
    const SideBar: React.FC<SideBarProps>= ({
        handleSectionClick,
        listItems,
        userTitle,
        isSmallScreen = false
    }) => {
        const theme = useTheme();
        const location = useLocation();
        const navigate = useNavigate();
        const [collapsed, setCollapsed] = React.useState(isSmallScreen);
        const { userAuth } = useContext(StorybookContext);
    
        React.useEffect(() => {
            setCollapsed(isSmallScreen);
        }, [isSmallScreen]);
    
        const isItemActive = (item: DashboardItem) => {
            if (item.path === '/dashboard') {
                return location.pathname === '/dashboard';
            }
            return location.pathname.startsWith(item.path);
        };
    
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
                <ListItemIcon sx={{
                    minWidth: 'auto',
                    width: 'auto',
                    height: 'auto',
                    justifyContent: 'center',
                    margin: 0,
                    mr: collapsed ? 0 : 2,
                    color: 'inherit'
                }}>
                    <Box sx={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                            fontSize: '1.6rem',
                            transition: 'all 0.2s ease',
                        }
                    }}>
                        {IconComponent(iconColor)}
                    </Box>
                </ListItemIcon>
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
                    damping: 30,
                    duration: 0.3
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
                        boxSizing: 'border-box',
                        overflow: 'hidden'
                    }}
                    onClick={handleProfileClick}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={collapsed ? 'collapsed' : 'expanded'}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                                opacity: 1, 
                                x: 0,
                                transition: { duration: 0.2 }
                            }}
                            exit={{ 
                                opacity: 0, 
                                x: -20,
                                transition: { duration: 0.1 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: collapsed ? 'center' : 'flex-start',
                            }}
                        >
                            {userAuth?.photoURL ? (
                                <Avatar src={userAuth?.photoURL} sx={{ 
                                    mr: collapsed ? 0 : 2,
                                    width: 48,
                                    height: 48
                                }} />
                            ) : (
                                <Avatar sx={{ 
                                    mr: collapsed ? 0 : 2,
                                    width: 48,
                                    height: 48
                                }}>
                                    {userAuth?.displayName?.charAt(0).toUpperCase()}
                                </Avatar>
                            )}
                            
                            {!collapsed && (
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    minWidth: 0,
                                }}>
                                    <UserName variant="body1">
                                        {userAuth?.displayName}
                                    </UserName>
                                    <Typography variant="caption" color="text.secondary" sx={{
                                        display: 'block',
                                        mt: 0.2,
                                        opacity: 0.8,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        fontSize: '0.9rem',
                                    }}>
                                        {userTitle ? userTitle : 'Not Available'}
                                    </Typography>
                                </Box>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Box>
    
                <Divider sx={{
                    borderColor: 'divider',
                    mx: 2,
                    opacity: 0.5
                }} />
    
                {/* Menu Items */}
                <List sx={{ 
                    p: 2, 
                    flexGrow: 1, 
                    overflow: 'hidden',
                    '& .MuiListItem-root': {
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
                    }
                }}>
                    {listItems.map((item) => (
                        <React.Fragment key={item.path}>
                            <Tooltip title={collapsed ? item.label : ''} placement="right">
                                <SidebarLink
                                    to={item.path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    end={item.path === '/dashboard'}
                                >
                                    <ListItem
                                        button
                                        onClick={() => {
                                            handleSectionClick(item.section);
                                            navigate(item.path);
                                        }}
                                    >
                                        {renderItemIcon(item)}
                                        
                                        {!collapsed && (
                                           <Box sx={{ display:"flex",gap: '8px' }}>
                                           <ListItemText
                                               primary={item.label}
                                               primaryTypographyProps={{
                                                   variant: 'body1',
                                                   fontWeight: isItemActive(item) ? 600 : 500,
                                                   fontSize: '0.95rem',
                                                   noWrap: true,
                                               }}
                                           />
                                           {/* Add SVG after label only for AI Employees */}
                                           {item.label === "AI Employees" && (
                                               <Box sx={{ 
                                                   
                                                   display: 'flex',
                                                   alignItems: 'center',
                                                   justifyContent: 'center'
                                               }}>
                                                   <AiEmployeesIcon 
                                                       color={isItemActive(item) 
                                                           ? theme.palette.primary.main 
                                                           : theme.palette.text.secondary} 
                                                   />
                                               </Box>
                                           )}
                                       </Box>
                                        )}
                                    </ListItem>
                                </SidebarLink>
                            </Tooltip>
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
                            color: theme.palette.text.secondary,
                            '&:hover': {
                                background: theme.palette.mode === 'dark'
                                    ? `rgba(${hexToRgb(theme.palette.primary.main)}, 0.1)`
                                    : `rgba(${hexToRgb(theme.palette.secondary.main)}, 0.08)`,
                                color: theme.palette.text.primary,
                            }
                        }}
                    >
                        <ListItemIcon sx={{ 
                            minWidth: 'auto',
                            justifyContent: 'center',
                            transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: 'transform 0.3s ease',
                            mr: collapsed ? 0 : 2,
                            color: 'inherit'
                        }}>
                            <ChevronLeft sx={{ fontSize: '1.6rem' }} />
                        </ListItemIcon>
                        
                        {!collapsed && (
                            <ListItemText
                                primary="Collapse"
                                primaryTypographyProps={{
                                    variant: 'body1',
                                    fontSize: '0.95rem',
                                    noWrap: true,
                                    color: 'inherit'
                                }}
                            />
                        )}
                    </ListItem>
                </Box>
            </GlassBox>
        );
    };
    
    export default SideBar;


