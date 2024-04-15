import React from "react";
import { Box, Divider } from '@mui/material';
import style from "./style";
import JobTitle from "./JobTitle";
import JobDescription from "./JobDescription";
import { useLocation } from 'react-router-dom'

export interface JobDetailProps {
    data: any;
    applied: boolean;
    applyUrl: string;
}

export default function JobDetail({ data, applied, applyUrl }: any) {
    const location = useLocation();

    const handleScroll = () => {
        const container = document.getElementById('job-detail-expandable-container');
        if (container) {
            const coord = container.getBoundingClientRect().y;
            const available = window.innerHeight - coord - 20; // -45 for bottom space
            container.style.maxHeight = available + 'px';
            // console.log("height", container.clientHeight, "starting y:", coord, "window height: ", window.innerHeight, "job detail expand height: ", available);
        }
    }

    React.useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <Box sx={{ ...style.container(location.pathname.split('/')[1] !== 'viewjob') }} id='job-detail-container'>
            <JobTitle data={data} applied={applied} applyUrl={applyUrl}/>

            <Divider sx={{ borderColor: 'black' }} />

            <JobDescription data={data} />
        </Box>
    )
}