import React from "react";
import { Box } from '@mui/material'
import style from "./style";
import JobsList from "./JobsList";
import JobDetail from "./JobDetail";
import { useMediaQuery } from "@mui/material";

export interface JobsSearchLayoutProps {
    data: any;
    handlePageChange: (value: number) => void;
    total: number
}

export default function JobsSearchLayout({ data, handlePageChange, total }: JobsSearchLayoutProps) {
    const [current, setCurrent] = React.useState(0);
    const isSmall = useMediaQuery('(max-width: 836px)');

    return (
        <Box sx={style.jobsContainer}>
            <Box sx={style.layout}>
                {
                    data &&
                    <>
                        <JobsList
                            data={data}
                            setCurrent={setCurrent}
                            isSmallDev={isSmall}
                            handlePageChange={handlePageChange}
                            total={total}
                        />
                        {
                            !isSmall && data.length > current &&
                            <JobDetail data={data[current]} />
                        }
                    </>
                }
            </Box>
        </Box>
    );
}
