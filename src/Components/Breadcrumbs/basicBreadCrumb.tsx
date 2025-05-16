import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import style from './style';

export interface NavbarBreadcrumbsProps {
    breadClick?: () => void;
    crumbClick?: () => void;
    sx?: React.CSSProperties;
    separator?: React.ReactNode;
}

export default function NavbarBreadcrumbs({ breadClick, crumbClick, sx, separator }: NavbarBreadcrumbsProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const crumbs = location.pathname.split('/').filter(url => url !== '');

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        if (breadClick) breadClick();
    }

    function handleCrumbClick(to: string) {
        if (crumbClick) crumbClick();
        navigate(to);
    }

    return (
        <Box
            role="presentation"
            onClick={handleClick}
            sx={{ ...style.box, ...sx }}
        >
            <Breadcrumbs
                separator={separator}
                aria-label="breadcrumb"
                maxItems={3}
                itemsAfterCollapse={1}
            >
                {crumbs.map((item, index) => {
                    const formattedItem = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
                    const path = `/${crumbs.slice(0, index + 1).join('/')}`;

                    return index === crumbs.length - 1 ? (
                        <Typography key={item} sx={style.link(theme)}>
                            {formattedItem}
                        </Typography>
                    ) : (
                        <Link
                            key={item}
                            sx={style.link(theme)}
                            underline="hover"
                            onClick={(e) => {
                                e.preventDefault();
                                handleCrumbClick(path);
                            }}
                            href={path}
                        >
                            {formattedItem}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
}
