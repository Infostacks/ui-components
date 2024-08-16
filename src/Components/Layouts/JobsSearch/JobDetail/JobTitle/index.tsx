import React from "react";
import { Box, Typography, Button } from '@mui/material'
import style from "./style";
import figmaIcons from "../../../../../Utils/Icons/figma";
import { useMediaQuery } from "@mui/material";
import JobOptions from "../Options";
import { useNavigate } from "react-router-dom";

export interface JobTitleProps {
    data: any;
    applied: boolean;
    applyUrl: string;
    alreadyApplied: boolean;
}

export default function JobTitle({ data, applyUrl, applied, alreadyApplied }: JobTitleProps) {
    const isXS = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))
    const navigate = useNavigate();

    return (
        <Box sx={style.row}>
            <Box sx={style.organizationContainer}>
                {!isXS && <img src={data.image} style={style.orgImage} />}
                <Box sx={style.organizationDetails}>
                    <Box sx={style.orgNameRow}><Typography sx={style.textOrgName}>{data.name}</Typography><Typography>{data.followers} Followers</Typography></Box>
                    <Typography className="jobRow-jobTitle">{data.jobDetails.title}</Typography>
                    <Typography sx={style.textJobLocation}>{data.jobDetails.location}</Typography>

                    {
                        !applied &&
                        <Box sx={style.orgActivitySmall}>
                            <Button sx={style.searchBtn}>
                                Follow
                            </Button>
                            <Button sx={style.searchBtn}
                                onClick={() => {
                                    // window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/jobs/apply/${data.jobDetails._id}`)
                                    navigate(`${applyUrl}${data.jobDetails._id}`)
                                }}
                                disabled={alreadyApplied}
                            >
                                {alreadyApplied ? 'Applied' : 'Apply'}
                            </Button>
                        </Box>
                    }
                </Box>
            </Box>
            <Box sx={style.orgActivityContainer}>
                {
                    !applied &&
                    <Box sx={style.activityBox}>
                        {
                            !isXS && <>
                                <JobOptions />
                            </>
                        }
                        <Box sx={style.orgActivityLarge}>
                            <Button sx={style.searchBtn}>
                                Follow
                            </Button>
                            <Button
                                sx={style.searchBtn}
                                onClick={() => {
                                    // window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/jobs/apply/${data.jobDetails._id}`)
                                    navigate(`${applyUrl}${data.jobDetails._id}`)
                                }}
                                disabled={alreadyApplied}
                            >
                                {alreadyApplied ? 'Applied' : 'Apply'}
                            </Button>
                        </Box>
                    </Box>
                }
                <Box sx={style.ai_recommend}>
                    {data.jobDetails.is_recommended_by_ai ? <Typography className="recommended"> {figmaIcons.AI()} Recommended for you by AI</Typography> : <Typography></Typography>}
                </Box>
            </Box>
        </Box>
    )
}