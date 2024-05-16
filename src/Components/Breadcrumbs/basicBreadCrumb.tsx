import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './style';

export interface NavbarBreadcrumbsProps {
    breadClick?: Function;
    crumbClick?: Function;
    sx?: any;
    separator?: React.ReactNode
}

export default function NavbarBreadcrumbs({ breadClick, crumbClick, sx, separator }: NavbarBreadcrumbsProps) {
    const location = useLocation();
    const navigate = useNavigate()
    const crumbs = location.pathname.split('/').filter(url => url != '');

    function handleClick(event: any) {
        event.preventDefault();
        // console.info('You clicked a breadcrumb.');
        if (breadClick) breadClick();
    }
    function handleCrumbClick(to: string) {
        // console.info('You clicked a breadcrumb.');
        if (crumbClick) crumbClick();
        navigate(to);
    }

    return (
        <Box role="presentation" onClick={handleClick}
            style={{ ...style.box, ...sx }}
        >
            <Breadcrumbs
                separator={separator}
                aria-label="breadcrumb"
                maxItems={3}
                itemsAfterCollapse={1}
                // itemsBeforeCollapse={2}
            >
                {
                    crumbs.map((item, index) => {
                        if (index === crumbs.length - 1) {
                            return (
                                <Typography key={item} style={style.link}>
                                    {item[0].toUpperCase() + item.slice(1).toLowerCase()}
                                </Typography>
                            )
                        }
                        else {
                            return (

                                <Link
                                    key={item}
                                    fontSize={'20px'}
                                    fontWeight={600}
                                    color={'black'}
                                    underline='hover'
                                    onClick={() => { handleCrumbClick(`/${crumbs.slice(0, index + 1).join('/')}`) }}
                                    href={`/${crumbs.slice(0, index + 1).join('/')}`}
                                >
                                    {item[0].toUpperCase() + item.slice(1).toLowerCase()}
                                </Link>

                            )
                        }
                    }
                    )
                }
            </Breadcrumbs>
        </Box>
    );
}
