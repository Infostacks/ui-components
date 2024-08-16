import React from "react";
import { Box } from '@mui/material'
import style from "./style";
import JobsList from "./JobsList";
import JobDetail from "./JobDetail";
import { useMediaQuery } from "@mui/material";

export interface JobsSearchLayoutProps {
    data: any;
    handlePageChange: (value: number) => void;
    total: number;
    applyUrl: string;
    appliedList?: string[]
}

export default function JobsSearchLayout({ data, handlePageChange, total, applyUrl, appliedList = [] }: JobsSearchLayoutProps) {
    const [current, setCurrent] = React.useState(0);
    const isSmall = useMediaQuery('(max-width: 836px)');

    const list = [
        '65fc7f59f6c8a424657e06f3'
    ]

    return (
        <Box sx={style.jobsContainer}>
            <Box sx={style.layout}>
                {
                    data &&
                    <>
                        <Box sx={{ width: !isSmall && data.length > current ? '30%' : '100%' }}>

                            <JobsList
                                data={data}
                                setCurrent={setCurrent}
                                isSmallDev={isSmall}
                                handlePageChange={handlePageChange}
                                total={total}
                            />
                        </Box>
                        {
                            !isSmall && data.length > current &&
                            <JobDetail data={data[current]} applied={false} applyUrl={applyUrl} alreadyApplied={appliedList.includes(data[current]._id)} />
                        }
                    </>
                }
            </Box>
        </Box>
    );
}
