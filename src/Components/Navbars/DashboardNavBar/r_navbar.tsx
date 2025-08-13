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

// --- SVG for light theme ---
const LightThemeLogo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 765.78 218.26"
        style={{ height: '60px', width: 'auto', display: 'block' }}
    >
        <defs>
            <style>
                {`
                .cls-1 { fill: #3b82f6; }
                .cls-2 { fill: #4a4aff; }
                .cls-3 { fill: #00ffab; }
                `}
            </style>
        </defs>
        <g>
            <path d="M278.74,137.02c-3.76,0-7.25-.94-10.47-2.82-3.22-1.88-5.75-4.44-7.61-7.69-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.69-7.69,3.19-1.85,6.67-2.78,10.43-2.78s7.17.91,10.39,2.74c3.22,1.83,5.78,4.29,7.69,7.38,1.9,3.14,2.86,6.54,2.86,10.2l-.08,21.32h-8.65v-3.71c-3.71,2.63-7.78,3.94-12.2,3.94ZM284.84,105.51c-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44,1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52Z"/>
            <path d="M301.99,85.97c0-1.54.55-2.87,1.66-3.98,1.11-1.11,2.46-1.66,4.05-1.66s2.95.55,4.06,1.66,1.66,2.43,1.66,3.98-.55,2.95-1.66,4.05-2.46,1.66-4.06,1.66-2.95-.55-4.05-1.66c-1.11-1.11-1.66-2.46-1.66-4.05ZM302.84,137.25v-41.94h10.12v41.94h-10.12Z"/>
            <path d="M321.37,100.18c2.73-3.24,6.54-4.87,11.43-4.87,2.16,0,4.33.45,6.49,1.35,2.16.9,4.12,2.18,5.87,3.82,1.49-1.65,3.26-2.92,5.29-3.82,2.03-.9,4.18-1.35,6.45-1.35s4.54.64,6.99,1.93c2.45,1.29,4.47,3.01,6.06,5.17,1.65,2.27,2.47,4.81,2.47,7.65v26.96h-10.12v-26.65c0-1.7-.7-3.12-2.08-4.25-1.39-1.13-2.99-1.7-4.79-1.7-2.27,0-4.22.98-5.87,2.94.72,2.06,1.08,4.17,1.08,6.33l-.15,23.4h-8.65v-23.4c0-1.96-.45-3.68-1.35-5.18-.9-1.49-2.1-2.63-3.59-3.4-1.54-.72-2.91-1.08-4.09-1.08-2.47,0-4.24.75-5.29,2.24-1.06,1.49-1.58,3.97-1.58,7.42v23.4h-8.65v-23.4c0-5.77,1.36-10.27,4.09-13.52Z"/>
            <path d="M377.56,105.31c1.88-3.12,4.47-5.6,7.76-7.45,3.19-1.8,6.64-2.7,10.35-2.7s7.18.94,10.43,2.82,5.82,4.42,7.72,7.61c1.85,3.24,2.78,6.75,2.78,10.5s-.94,7.25-2.82,10.47c-1.88,3.22-4.42,5.75-7.61,7.61-3.19,1.91-6.69,2.86-10.5,2.86-4.43,0-8.5-1.31-12.2-3.94v14.06l-8.65,4.63-.08-36.3c0-3.66.94-7.04,2.82-10.16ZM389.57,126.59c1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44Z"/>
            <path d="M429.81,137.02h-10.12v-57h10.12v57Z"/>
            <path d="M435.76,126.59c-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.68-7.69,3.19-1.85,6.67-2.78,10.43-2.78s7.18.94,10.43,2.82,5.82,4.42,7.72,7.61c1.85,3.24,2.78,6.75,2.78,10.5s-.94,7.25-2.82,10.47c-1.88,3.22-4.42,5.75-7.61,7.61-3.19,1.91-6.69,2.86-10.5,2.86s-7.25-.94-10.47-2.82c-3.22-1.88-5.75-4.44-7.61-7.69ZM463.88,121.96c1.03-1.8,1.54-3.73,1.54-5.79s-.5-4.05-1.51-5.83-2.41-3.18-4.21-4.21c-1.8-1.03-3.76-1.54-5.87-1.54s-4.05.5-5.83,1.51c-1.78,1-3.18,2.41-4.21,4.21-1.03,1.8-1.54,3.76-1.54,5.87s.51,4.06,1.54,5.83c1.03,1.78,2.45,3.18,4.25,4.21,1.8,1.03,3.73,1.54,5.79,1.54s4.05-.52,5.83-1.54c1.78-1.03,3.18-2.45,4.21-4.25Z"/>
            <path d="M485.73,95.31v23.4c0,2.99,1.03,5.34,3.09,7.07,2.06,1.72,4.58,2.59,7.57,2.59s5.43-.86,7.49-2.59c2.06-1.73,3.09-4.08,3.09-7.07v-23.4h8.65l.16,23.4c0,1.85-.26,3.63-.77,5.33l.08-.08.46.85c1.39,2.83,2.09,5.77,2.09,8.81,0,3.35-.8,6.42-2.39,9.23-1.6,2.81-3.84,4.98-6.72,6.53-2.88,1.49-5.77,2.24-8.65,2.24-2.63,0-5.15-.54-7.57-1.62-2.42-1.08-4.51-2.63-6.26-4.63l6.87-3.79c.98.82,2.07,1.46,3.28,1.89,1.21.44,2.43.66,3.67.66,1.7,0,3.33-.44,4.91-1.31,1.57-.88,2.74-2.01,3.51-3.4.77-1.29,1.16-2.81,1.16-4.56,0-.77-.08-1.49-.23-2.16-1.75,1.44-3.73,2.54-5.95,3.28-2.21.75-4.5,1.12-6.87,1.12-3.4,0-6.57-.76-9.5-2.28-2.94-1.52-5.3-3.67-7.11-6.45-1.8-2.83-2.7-6.05-2.7-9.65v-23.4h8.65Z"/>
            <path d="M539.57,95.23c2.93,0,5.97.71,9.11,2.12,3.14,1.42,5.82,3.75,8.03,6.99,2.42,3.66,3.63,7.6,3.63,11.82,0,1.13-.08,2.24-.23,3.32l-.16-.08v.08l-31.98.85c.62,1.7,1.54,3.18,2.78,4.44,1.24,1.26,2.68,2.2,4.33,2.82,1.34.52,2.78.77,4.33.77,1.75,0,3.44-.35,5.06-1.04,1.62-.7,3-1.69,4.13-2.97l8.42,3.24c-1.91,2.94-4.43,5.25-7.57,6.95-3.14,1.7-6.49,2.55-10.04,2.55-2.99,0-6.04-.71-9.15-2.12s-5.78-3.77-7.99-7.07c-2.47-3.66-3.71-7.6-3.71-11.82,0-2.47.46-4.94,1.39-7.42,1.54-4.02,4.12-7.26,7.72-9.73s7.57-3.71,11.9-3.71ZM550.84,111.76c-.57-1.6-1.45-3-2.66-4.21s-2.64-2.12-4.29-2.74c-1.34-.52-2.78-.77-4.33-.77-2.52,0-4.84.7-6.95,2.08-2.11,1.39-3.63,3.3-4.56,5.72l-.15.46,22.94-.54Z"/>
            <path d="M583.67,95.23c2.94,0,5.97.71,9.11,2.12,3.14,1.42,5.82,3.75,8.03,6.99,2.42,3.66,3.63,7.6,3.63,11.82,0,1.13-.08,2.24-.23,3.32l-.15-.08v.08l-31.98.85c.62,1.7,1.54,3.18,2.78,4.44,1.24,1.26,2.68,2.2,4.33,2.82,1.34.52,2.78.77,4.33.77,1.75,0,3.44-.35,5.06-1.04,1.62-.7,3-1.69,4.13-2.97l8.42,3.24c-1.91,2.94-4.43,5.25-7.57,6.95-3.14,1.7-6.49,2.55-10.04,2.55-2.99,0-6.04-.71-9.15-2.12s-5.78-3.77-7.99-7.07c-2.47-3.66-3.71-7.6-3.71-11.82,0-2.47.46-4.94,1.39-7.42,1.54-4.02,4.12-7.26,7.72-9.73s7.57-3.71,11.89-3.71ZM594.95,111.76c-.57-1.6-1.46-3-2.67-4.21-1.21-1.21-2.64-2.12-4.29-2.74-1.34-.52-2.78-.77-4.33-.77-2.52,0-4.84.7-6.95,2.08-2.11,1.39-3.63,3.3-4.56,5.72l-.15.46,22.94-.54Z"/>
            <path d="M645.81,126.9c-1.88,3.09-4.44,5.56-7.69,7.42-3.24,1.85-6.72,2.78-10.43,2.78s-7.25-.94-10.47-2.82c-3.22-1.88-5.75-4.44-7.61-7.69-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.69-7.69,3.19-1.85,6.67-2.78,10.43-2.78,4.43,0,8.5,1.31,12.2,3.94v-14.06l8.65-4.63.08,36.3c0,3.66-.94,7.03-2.82,10.12ZM633.8,105.59c-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44,1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52Z"/>
        </g>
        <g>
            <path className="cls-2" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
            <path className="cls-1" d="M177.04,48.07c-33.72,0-61.05,27.33-61.05,61.06,0,21.24,10.84,39.94,27.29,50.88,9.67,6.43,21.28,10.17,33.76,10.17s24.09-3.75,33.76-10.17c16.45-10.94,27.29-29.64,27.29-50.88,0-33.72-27.33-61.06-61.05-61.06ZM194.09,140.88c-5.08,2.73-10.88,4.28-17.05,4.28s-11.98-1.55-17.05-4.28c-11.3-6.08-18.98-18.02-18.98-31.75,0-19.9,16.13-36.04,36.04-36.04s36.04,16.13,36.04,36.04c0,13.73-7.68,25.67-18.98,31.75Z"/>
            <path className="cls-2" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
            <path className="cls-3" d="M210.8,160.01c-9.67,6.43-21.28,10.17-33.76,10.17s-24.09-3.75-33.76-10.17c3.08-8.22,9.06-15.02,16.71-19.12,5.08,2.73,10.88,4.28,17.05,4.28s11.98-1.55,17.05-4.28c7.64,4.11,13.63,10.91,16.71,19.12Z"/>
            <path className="cls-1" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
        </g>
    </svg>
);

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

    // --- SVG for dark theme (original) ---
    const DarkThemeLogo = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 765.78 218.26"
            style={{ height: '60px', width: 'auto', display: 'block' }}
        >
            <g>
                <path className="cls-1" fill="#fff" d="M278.74,137.02c-3.76,0-7.25-.94-10.47-2.82-3.22-1.88-5.75-4.44-7.61-7.69-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.69-7.69,3.19-1.85,6.67-2.78,10.43-2.78s7.17.91,10.39,2.74c3.22,1.83,5.78,4.29,7.69,7.38,1.9,3.14,2.86,6.54,2.86,10.2l-.08,21.32h-8.65v-3.71c-3.71,2.63-7.78,3.94-12.2,3.94ZM284.84,105.51c-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44,1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52Z"/>
                <path className="cls-1" fill="#fff" d="M301.99,85.97c0-1.54.55-2.87,1.66-3.98,1.11-1.11,2.46-1.66,4.05-1.66s2.95.55,4.06,1.66,1.66,2.43,1.66,3.98-.55,2.95-1.66,4.05-2.46,1.66-4.06,1.66-2.95-.55-4.05-1.66c-1.11-1.11-1.66-2.46-1.66-4.05ZM302.84,137.25v-41.94h10.12v41.94h-10.12Z"/>
                <path className="cls-1" fill="#fff" d="M321.37,100.18c2.73-3.24,6.54-4.87,11.43-4.87,2.16,0,4.33.45,6.49,1.35,2.16.9,4.12,2.18,5.87,3.82,1.49-1.65,3.26-2.92,5.29-3.82,2.03-.9,4.18-1.35,6.45-1.35s4.54.64,6.99,1.93c2.45,1.29,4.47,3.01,6.06,5.17,1.65,2.27,2.47,4.81,2.47,7.65v26.96h-10.12v-26.65c0-1.7-.7-3.12-2.08-4.25-1.39-1.13-2.99-1.7-4.79-1.7-2.27,0-4.22.98-5.87,2.94.72,2.06,1.08,4.17,1.08,6.33l-.15,23.4h-8.65v-23.4c0-1.96-.45-3.68-1.35-5.18-.9-1.49-2.1-2.63-3.59-3.4-1.54-.72-2.91-1.08-4.09-1.08-2.47,0-4.24.75-5.29,2.24-1.06,1.49-1.58,3.97-1.58,7.42v23.4h-8.65v-23.4c0-5.77,1.36-10.27,4.09-13.52Z"/>
                <path className="cls-1" fill="#fff" d="M377.56,105.31c1.88-3.12,4.47-5.6,7.76-7.45,3.19-1.8,6.64-2.7,10.35-2.7s7.18.94,10.43,2.82,5.82,4.42,7.72,7.61c1.85,3.24,2.78,6.75,2.78,10.5s-.94,7.25-2.82,10.47c-1.88,3.22-4.42,5.75-7.61,7.61-3.19,1.91-6.69,2.86-10.5,2.86-4.43,0-8.5-1.31-12.2-3.94v14.06l-8.65,4.63-.08-36.3c0-3.66.94-7.04,2.82-10.16ZM389.57,126.59c1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44Z"/>
                <path className="cls-1" fill="#fff" d="M429.81,137.02h-10.12v-57h10.12v57Z"/>
                <path className="cls-1" fill="#fff" d="M435.76,126.59c-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.68-7.69,3.19-1.85,6.67-2.78,10.43-2.78s7.18.94,10.43,2.82,5.82,4.42,7.72,7.61c1.85,3.24,2.78,6.75,2.78,10.5s-.94,7.25-2.82,10.47c-1.88,3.22-4.42,5.75-7.61,7.61-3.19,1.91-6.69,2.86-10.5,2.86s-7.25-.94-10.47-2.82c-3.22-1.88-5.75-4.44-7.61-7.69ZM463.88,121.96c1.03-1.8,1.54-3.73,1.54-5.79s-.5-4.05-1.51-5.83-2.41-3.18-4.21-4.21c-1.8-1.03-3.76-1.54-5.87-1.54s-4.05.5-5.83,1.51c-1.78,1-3.18,2.41-4.21,4.21-1.03,1.8-1.54,3.76-1.54,5.87s.51,4.06,1.54,5.83c1.03,1.78,2.45,3.18,4.25,4.21,1.8,1.03,3.73,1.54,5.79,1.54s4.05-.52,5.83-1.54c1.78-1.03,3.18-2.45,4.21-4.25Z"/>
                <path className="cls-1" fill="#fff" d="M485.73,95.31v23.4c0,2.99,1.03,5.34,3.09,7.07,2.06,1.72,4.58,2.59,7.57,2.59s5.43-.86,7.49-2.59c2.06-1.73,3.09-4.08,3.09-7.07v-23.4h8.65l.16,23.4c0,1.85-.26,3.63-.77,5.33l.08-.08.46.85c1.39,2.83,2.09,5.77,2.09,8.81,0,3.35-.8,6.42-2.39,9.23-1.6,2.81-3.84,4.98-6.72,6.53-2.88,1.49-5.77,2.24-8.65,2.24-2.63,0-5.15-.54-7.57-1.62-2.42-1.08-4.51-2.63-6.26-4.63l6.87-3.79c.98.82,2.07,1.46,3.28,1.89,1.21.44,2.43.66,3.67.66,1.7,0,3.33-.44,4.91-1.31,1.57-.88,2.74-2.01,3.51-3.4.77-1.29,1.16-2.81,1.16-4.56,0-.77-.08-1.49-.23-2.16-1.75,1.44-3.73,2.54-5.95,3.28-2.21.75-4.5,1.12-6.87,1.12-3.4,0-6.57-.76-9.5-2.28-2.94-1.52-5.3-3.67-7.11-6.45-1.8-2.83-2.7-6.05-2.7-9.65v-23.4h8.65Z"/>
                <path className="cls-1" fill="#fff" d="M539.57,95.23c2.93,0,5.97.71,9.11,2.12,3.14,1.42,5.82,3.75,8.03,6.99,2.42,3.66,3.63,7.6,3.63,11.82,0,1.13-.08,2.24-.23,3.32l-.16-.08v.08l-31.98.85c.62,1.7,1.54,3.18,2.78,4.44,1.24,1.26,2.68,2.2,4.33,2.82,1.34.52,2.78.77,4.33.77,1.75,0,3.44-.35,5.06-1.04,1.62-.7,3-1.69,4.13-2.97l8.42,3.24c-1.91,2.94-4.43,5.25-7.57,6.95-3.14,1.7-6.49,2.55-10.04,2.55-2.99,0-6.04-.71-9.15-2.12s-5.78-3.77-7.99-7.07c-2.47-3.66-3.71-7.6-3.71-11.82,0-2.47.46-4.94,1.39-7.42,1.54-4.02,4.12-7.26,7.72-9.73s7.57-3.71,11.9-3.71ZM550.84,111.76c-.57-1.6-1.45-3-2.66-4.21s-2.64-2.12-4.29-2.74c-1.34-.52-2.78-.77-4.33-.77-2.52,0-4.84.7-6.95,2.08-2.11,1.39-3.63,3.3-4.56,5.72l-.15.46,22.94-.54Z"/>
                <path className="cls-1" fill="#fff" d="M583.67,95.23c2.94,0,5.97.71,9.11,2.12,3.14,1.42,5.82,3.75,8.03,6.99,2.42,3.66,3.63,7.6,3.63,11.82,0,1.13-.08,2.24-.23,3.32l-.15-.08v.08l-31.98.85c.62,1.7,1.54,3.18,2.78,4.44,1.24,1.26,2.68,2.2,4.33,2.82,1.34.52,2.78.77,4.33.77,1.75,0,3.44-.35,5.06-1.04,1.62-.7,3-1.69,4.13-2.97l8.42,3.24c-1.91,2.94-4.43,5.25-7.57,6.95-3.14,1.7-6.49,2.55-10.04,2.55-2.99,0-6.04-.71-9.15-2.12s-5.78-3.77-7.99-7.07c-2.47-3.66-3.71-7.6-3.71-11.82,0-2.47.46-4.94,1.39-7.42,1.54-4.02,4.12-7.26,7.72-9.73s7.57-3.71,11.89-3.71ZM594.95,111.76c-.57-1.6-1.46-3-2.67-4.21-1.21-1.21-2.64-2.12-4.29-2.74-1.34-.52-2.78-.77-4.33-.77-2.52,0-4.84.7-6.95,2.08-2.11,1.39-3.63,3.3-4.56,5.72l-.15.46,22.94-.54Z"/>
                <path className="cls-1" fill="#fff" d="M645.81,126.9c-1.88,3.09-4.44,5.56-7.69,7.42-3.24,1.85-6.72,2.78-10.43,2.78s-7.25-.94-10.47-2.82c-3.22-1.88-5.75-4.44-7.61-7.69-1.91-3.14-2.86-6.62-2.86-10.43s.94-7.25,2.82-10.47c1.88-3.22,4.44-5.78,7.69-7.69,3.19-1.85,6.67-2.78,10.43-2.78,4.43,0,8.5,1.31,12.2,3.94v-14.06l8.65-4.63.08,36.3c0,3.66-.94,7.03-2.82,10.12ZM633.8,105.59c-1.85-1.08-3.89-1.62-6.1-1.62s-4.18.55-6.06,1.66c-1.88,1.11-3.36,2.59-4.44,4.44-1.13,1.8-1.7,3.84-1.7,6.1s.55,4.18,1.66,6.06c1.11,1.88,2.59,3.36,4.44,4.44,1.8,1.13,3.84,1.7,6.1,1.7s4.18-.55,6.06-1.66c1.88-1.11,3.39-2.59,4.52-4.44,1.08-1.85,1.62-3.89,1.62-6.1s-.55-4.18-1.66-6.06c-1.11-1.88-2.59-3.39-4.44-4.52Z"/>
            </g>
            <g>
                <path className="cls-3" fill="#4a4aff" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
                <path className="cls-2" fill="#3b82f6" d="M177.04,48.07c-33.72,0-61.05,27.33-61.05,61.06,0,21.24,10.84,39.94,27.29,50.88,9.67,6.43,21.28,10.17,33.76,10.17s24.09-3.75,33.76-10.17c16.45-10.94,27.29-29.64,27.29-50.88,0-33.72-27.33-61.06-61.05-61.06ZM194.09,140.88c-5.08,2.73-10.88,4.28-17.05,4.28s-11.98-1.55-17.05-4.28c-11.3-6.08-18.98-18.02-18.98-31.75,0-19.9,16.13-36.04,36.04-36.04s36.04,16.13,36.04,36.04c0,13.73-7.68,25.67-18.98,31.75Z"/>
                <path className="cls-3" fill="#4a4aff" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
                <path className="cls-4" fill="#00ffab" d="M210.8,160.01c-9.67,6.43-21.28,10.17-33.76,10.17s-24.09-3.75-33.76-10.17c3.08-8.22,9.06-15.02,16.71-19.12,5.08,2.73,10.88,4.28,17.05,4.28s11.98-1.55,17.05-4.28c7.64,4.11,13.63,10.91,16.71,19.12Z"/>
                <path className="cls-2" fill="#3b82f6" d="M197.69,109.13c0,11.4-9.25,20.65-20.65,20.65s-20.65-9.25-20.65-20.65,9.25-20.65,20.65-20.65,20.65,9.25,20.65,20.65Z"/>
            </g>
        </svg>
    );

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
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 60,
                            
                                mr: 1,
                            }}
                        >
                            {/* Inline SVG logo, switch by theme */}
                            {theme.palette.mode === 'light' ? <LightThemeLogo /> : <DarkThemeLogo />}
                        </Box>
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