import React, { useState, useContext } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Menu,
    MenuItem as MuiMenuItem,
    Avatar,
    useMediaQuery,
    Box,
    keyframes,
    TextField,
    InputAdornment,
    useTheme
} from '@mui/material';
import {
    Brightness4,
    Brightness7,
    Notifications,
    Mail,
    Person,
    WorkOutline,
    Search,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// import ThemeModeContext from "Context/ThemeContext";
import StorybookContext from "../../../Context/sampleContext";
import NavbarBreadcrumbs from '../../Breadcrumbs';



interface CustomMenuItem {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    divider?: boolean;
}

interface DashboardNavBarProps {
    handleNotification: () => void;
    handleChat: () => void;
    toggleTheme: () => void;
    unreadNotificationCount: number;
    unreadChatCount: number;
    title: string;
}

const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    margin: '16px auto',
    width: 'calc(100vw - 32px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }
}));

const NavItemContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    '& > *': {
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateY(-2px)',
            filter: 'brightness(1.1)'
        }
    }
}));

const ProfileButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
        borderColor: theme.palette.primary.main,
        background: `rgba(${hexToRgb(theme.palette.primary.main)}, 0.1)`,
        boxShadow: `0 4px 12px rgba(${hexToRgb(theme.palette.primary.main)}, 0.3)`
    }
}));

const AppTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    letterSpacing: '-0.5px',
    background: theme.palette?.custom?.accentGradient || 'linear-gradient(135deg, #6e48aa, #00e5ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -4,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #6e48aa, #00e5ff)',
        animation: `${gradientAnimation} 5s ease infinite`,
        backgroundSize: '200% 200%'
    }
}));

const SearchField = styled(TextField)(({ theme }) => ({
    minWidth: 200,
    '& .MuiOutlinedInput-root': {
        height: 44,
        borderRadius: '12px',
        backgroundColor: theme.palette?.custom?.searchBackground ||
            (theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main,
            boxShadow: `0 0 0 2px ${theme.palette?.custom?.searchHoverShadow ||
                (theme.palette.mode === 'dark' ? 'rgba(110,72,170,0.2)' : 'rgba(0,229,255,0.2)')}`
        },
        '&.Mui-focused': {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main,
            boxShadow: `0 0 0 3px ${theme.palette?.custom?.searchFocusShadow ||
                (theme.palette.mode === 'dark' ? 'rgba(110,72,170,0.3)' : 'rgba(0,229,255,0.3)')}`
        }
    },
    '& .MuiInputBase-input': {
        padding: '10px 14px',
        fontSize: '0.95rem',
        color: theme.palette.text.primary,
        '&::placeholder': {
            color: theme.palette.text.secondary
        }
    }
}));

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

const DashboardNavBar: React.FC<DashboardNavBarProps> = ({
    handleNotification,
    title,
    handleChat,
    unreadNotificationCount,
    toggleTheme,
    unreadChatCount
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const { currentTheme, updateColorMode } = useContext(ThemeModeContext);
    const { userAuth, signOutContext } = useContext(StorybookContext);
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:1000px)');
    const open = Boolean(anchorEl);

    // const toggleTheme = () => {
    //     // const currentMode = currentTheme?.palette?.mode || 'light';
    //     // let nextMode;

    //     // if (currentMode === 'light') {
    //     //     nextMode = 'dark';
    //     // } else if (currentMode === 'dark') {
    //     //     nextMode = 'black';
    //     // } else {
    //     //     nextMode = 'light';
    //     // }

    //     // updateColorMode(nextMode);
    // };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        signOutContext();
        handleMenuClose();
    };

    if (!userAuth) {
        return <Typography>Something's wrong with Context/Provider...</Typography>;
    }

    // Default menu items if not provided
    const defaultMenuItems: CustomMenuItem[] = [
        { label: 'My Profile', onClick: handleMenuClose },
        { label: 'Account Settings', onClick: handleMenuClose },
        { label: 'Logout', onClick: handleLogout, divider: true }
    ];

    const finalMenuItems = defaultMenuItems;

    const getThemeIcon = () => {
        const currentMode = theme?.palette?.mode || 'light';

        switch (currentMode) {
            case 'dark':
                return <Brightness7 sx={{ color: '#ffc107', fontSize: '24px' }} />;

            default: // light
                return <Brightness4 sx={{ color: theme.palette.text.secondary, fontSize: '24px' }} />;
        }


    };

    return (
        <StyledAppBar position="static">
            <Toolbar sx={{
                justifyContent: 'space-between',
                py: 1,
                px: isMobile ? 2 : 4,
                gap: 2,
                flexWrap: 'nowrap'
            }}>
                {/* Left Section */}
                <Box display="flex" alignItems="center" gap={2} sx={{
                    minWidth: 'fit-content',
                    flexShrink: 0
                }}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <WorkOutline sx={{
                            color: theme.palette.primary.main,
                            fontSize: 28,
                            transform: 'rotate(-15deg)'
                        }} />
                        <AppTitle variant="h6">
                            {title}
                        </AppTitle>
                    </Box>

                    {!isMobile && (
                        <NavbarBreadcrumbs />
                    )}
                </Box>

                {/* Search Bar */}
                <Box sx={{
                    flex: '1 1 auto',
                    minWidth: 150,
                    maxWidth: 600,
                    mx: 2,
                    width: '100%',
                }}>
                    <SearchField
                        fullWidth
                        variant="outlined"
                        placeholder="Search jobs, applications..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '1.25rem'
                                    }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Right Section */}
                <NavItemContainer sx={{
                    minWidth: 'fit-content',
                    flexShrink: 0
                }}>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {getThemeIcon()}
                    </IconButton>

                    {!isMobile && (
                        <>
                            <IconButton color="inherit" onClick={handleChat}>
                                <Badge
                                    badgeContent={unreadChatCount}
                                    color="error"
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            backgroundColor: theme.palette?.accent?.main,
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <Mail sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '24px'
                                    }} />
                                </Badge>
                            </IconButton>

                            <IconButton color="inherit" onClick={handleNotification}>
                                <Badge
                                    badgeContent={unreadNotificationCount}
                                    color="error"
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            backgroundColor: theme.palette?.accent?.main,
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <Notifications sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: '24px'
                                    }} />
                                </Badge>
                            </IconButton>
                        </>
                    )}

                    <ProfileButton onClick={handleMenuOpen}>
                        <Avatar
                            sx={{
                                width: 38,
                                height: 38,
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText
                            }}
                            alt={userAuth?.displayName || 'User'}
                            src={userAuth?.photoURL || undefined}
                        // referrerPolicy="no-referrer"
                        >
                            {!userAuth?.photoURL && <Person />}
                        </Avatar>
                    </ProfileButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        PaperProps={{
                            elevation: 4,
                            sx: {
                                mt: 2,
                                borderRadius: '12px',
                                minWidth: 200,
                                background: theme.palette.mode === 'dark'
                                    ? 'rgba(26, 27, 47, 0.9)'
                                    : 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(8px)',
                                border: `1px solid ${theme.palette.divider}`,
                                '& .MuiMenuItem-root': {
                                    px: 2,
                                    py: 1.5,
                                    color: theme.palette.text.primary,
                                    '&:hover': {
                                        background: theme.palette.mode === 'dark'
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.03)'
                                    }
                                }
                            }
                        }}
                    >
                        {finalMenuItems.map((item, index) => (
                            <MuiMenuItem
                                key={index}
                                onClick={item.onClick}
                                divider={item.divider}
                            >
                                {item.icon && (
                                    <Box mr={1.5} display="flex" alignItems="center">
                                        {item.icon}
                                    </Box>
                                )}
                                {item.label}
                            </MuiMenuItem>
                        ))}
                    </Menu>
                </NavItemContainer>
            </Toolbar>
        </StyledAppBar>
    );
};

export default DashboardNavBar;