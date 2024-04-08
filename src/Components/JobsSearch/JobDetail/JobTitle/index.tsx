import React from "react";
import { Box, Typography, Button } from '@mui/material'
import style from "./style";
import figmaIcons from "../../../../Utils/Icons/figma";
import { useMediaQuery } from "@mui/material";
import JobOptions from "../Options";

export interface JobTitleProps {
    data: any;
    applied: boolean;
}

export default function JobTitle({ data, applied }) {
    const isXS = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

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
                                    // window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/dashboard/jobs/apply/${data.jobDetails._id}`)
                                    window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/jobs/apply/${data.jobDetails._id}`)
                                }
                                }
                            >
                                Apply
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
                        <Box sx={style.orgActivityLarge}><Button sx={style.searchBtn}>
                            Follow
                        </Button>
                            <Button sx={style.searchBtn}
                                onClick={() => {
                                    // window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/dashboard/jobs/apply/${data.jobDetails._id}`)
                                    window.open(`${process.env.REACT_APP_CANDIDATE_PANEL}/#/dashboard/profile`)
                                }
                                }
                            >
                                Apply
                            </Button></Box>
                    </Box>
                }
                <Box sx={style.ai_recommend}>
                    {data.jobDetails.is_recommended_by_ai ? <Typography className="recommended"> {figmaIcons.AI()} Recommended for you by AI</Typography> : <Typography></Typography>}
                </Box>
            </Box>
        </Box>
    )
}