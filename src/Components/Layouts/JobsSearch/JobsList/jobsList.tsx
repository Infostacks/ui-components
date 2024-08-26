import React from "react";
import { Box, Typography } from '@mui/material'
import style from "./style";
// import JobsInfo from "./JobsInfo";
import PaginationRounded from "../../../Paginations/Pagination";
import JobsInfo from "./JobsInfo/jobsInfo";

export interface JobsListProps {
    searchText?: string,
    data: [any],
    setCurrent: Function,
    isSmallDev: boolean,
    handlePageChange: (v: number) => void,
    total: number,
}

export default function JobsList({ searchText, data, setCurrent, isSmallDev, handlePageChange, total }: JobsListProps) {
    return (
        <Box sx={style.container}>
            {searchText && <Typography sx={style.searchText}>Showing results for <b><u>{searchText}</u></b></Typography>}
            <Typography sx={style.results}>AI finds {data.length} jobs for you</Typography>
            <Box sx={style.jobListContainer}>
                {
                    data && data.length > 0 &&

                    data.map((job: any, i: number) => {
                        return <JobsInfo key={job.jobDetails._id} data={job} setCurrent={setCurrent} index={i} isSmallDev={isSmallDev} />
                    })
                }
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PaginationRounded
                    count={Math.ceil(total / 10)}
                    handleChange={(_, v) => { handlePageChange(v) }}
                />

            </Box>

        </Box>
    )
}