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
}

export default function JobsSearchLayout({ data, handlePageChange, total, applyUrl }: JobsSearchLayoutProps) {
    const [current, setCurrent] = React.useState(0);
    const isSmall = useMediaQuery('(max-width: 836px)');

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
                            <JobDetail data={data[current]} applied={false} applyUrl={applyUrl}/>
                        }
                    </>
                }
            </Box>
        </Box>
    );
}
