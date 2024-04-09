import React from "react";
import { Box, Typography, Button } from '@mui/material'
import style from "./style";
import figmaIcons from "../../../../Utils/Icons/figma";
import { calculateDifferenceInDate } from "../../../../Utils/helpers";
import { useNavigate } from 'react-router-dom';

export interface JobsInfoProps {
    data: any;
    setCurrent: Function;
    index: number;
    isSmallDev: boolean;
}

export default function JobsInfo({ data, setCurrent, index, isSmallDev }) {
    const navigate = useNavigate();

    const handleSelect = (index: number) => {
        if (isSmallDev) {
            navigate(`/viewjob/${data.jobDetails._id}`);
        }
        setCurrent(index);
    }

    return (
        <Box sx={style.container} onClick={() => { handleSelect(index) }}>

            <Box>
                <Typography sx={style.companyTitle}>{data.name}</Typography>
                <Typography sx={style.position}>{data.jobDetails.title}</Typography>
                <Typography sx={style.location}>{data.jobDetails.location}</Typography>
            </Box>

            <Box sx={style.jobType}>
                <Typography>{data.jobDetails.salary.currency.text}{' '}
                    {data.jobDetails.salary.min}{' - '}
                    {data.jobDetails.salary.max}{' '}
                    {data.jobDetails.salary.period}
                </Typography>
                {
                    data.jobDetails.jobType.map((type, index) => {
                        return <Typography key={type + index}>{type}</Typography>
                    })
                }
            </Box>

            <Box sx={style.jobStats}>
                <Typography>{figmaIcons.eye()} {data.jobDetails.views} Viewed  </Typography>
                <Typography>{figmaIcons.applied()} {data.jobDetails.applicants} Applied</Typography>
            </Box>

            <Box sx={style.ai_recommend}>
                {data.jobDetails.is_recommended_by_ai ? <Typography className="recommended">
                    {figmaIcons.AI()} Recommended for you by AI</Typography> : <Typography></Typography>}
                <Typography className="date-recommended">{calculateDifferenceInDate(data.jobDetails.datePosted)}</Typography>
            </Box>

            <Button sx={style.verticalIcon} onClick={(e) => { e.stopPropagation() }}>
                {figmaIcons.moreHorizontalIcon()}
            </Button>
        </Box>
    )
}