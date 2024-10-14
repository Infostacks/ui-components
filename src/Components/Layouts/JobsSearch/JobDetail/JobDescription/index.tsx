import React from "react";
import { Box, Typography } from '@mui/material'
import style from "./style";
import JobOptions from "../Options";
import { useMediaQuery } from "@mui/material";
import { RichTextReadOnly } from 'mui-tiptap'
import StarterKit from "@tiptap/starter-kit";

export interface JobDescriptionProps {
    data: any
    handleSave?: () => void;
    handleShare?: () => void;
}

export default function JobDescription({ data,handleSave,handleShare }: JobDescriptionProps) {
    const isXS = useMediaQuery((theme: any) => theme?.breakpoints?.down('sm'))

    return (
        <Box sx={style.container} id="job-detail-expandable-container">
            <Box sx={style.jobDetailText}>
                <Typography sx={style.jobDetail}>Job Details</Typography>
                <span>{isXS && <JobOptions save={data?.saved}  handleSave={handleSave} handleShare={handleShare}/>}</span>
            </Box>

            <Box sx={style.jobInfoContainer}>
                <Box sx={style.jobInfoRow}>
                    <Typography sx={style.jobInfoTitle}>Job Type: </Typography>
                    <Box sx={style.jobInfoStats}>
                        {
                            data.jobDetails.jobType &&
                            data.jobDetails.jobType.map((type) => (
                                <Typography key={type} >{type}</Typography>
                            ))
                        }
                    </Box>
                </Box>
                <Box sx={style.jobInfoRow}>
                    <Typography sx={style.jobInfoTitle}>Experience: </Typography>
                    <Box sx={style.jobInfoStats}>
                        <Typography>{data.jobDetails.experience}</Typography>
                    </Box>
                </Box>
                {
                    data.jobDetails.closeDate &&
                    <Box sx={style.jobInfoRow}>
                        <Typography sx={style.jobInfoTitle}>Close Date: </Typography>
                        <Box sx={style.jobInfoStats}>
                            <Typography>{new Date(data.jobDetails.closeDate).toDateString()}</Typography>
                        </Box>
                    </Box>
                }
                <Box sx={style.jobInfoRow}>
                    <Typography sx={style.jobInfoTitle}>Salary: </Typography>
                    <Box sx={style.jobInfoStats}>
                        <Typography>
                            {data.jobDetails.salary.currency.text}{' '}
                            {data.jobDetails.salary.min}{' - '}
                            {data.jobDetails.salary.max}{' '}
                            {data.jobDetails.salary.period}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.jobInfoSkillsRow}>
                    <Typography sx={style.jobInfoTitle}>Skills: </Typography>
                    <Box sx={style.jobInfoStats}>
                    {
                            data.jobDetails.skills &&
                            data.jobDetails.skills.map((type) => (
                                <Typography key={type} >{type}</Typography>
                            ))
                        }
                    </Box>
                </Box>

            <Box sx={style.jobDetailsContainer}>
                <Box sx={style.jobDetailsCRow}>
                    <RichTextReadOnly
                        content={data.jobDetails.description}
                        extensions={[StarterKit]}
                        injectCSS={true}
                    />
                </Box>
            </Box>
        </Box>
    )
}