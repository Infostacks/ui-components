import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export interface PaginationRoundedProps {
    count: number;
    handleChange: (event, page: number) => void;
    style?: any
}

export default function PaginationRounded({ count, handleChange, style }: PaginationRoundedProps) {
    return (
        <Stack spacing={2}>
            <Pagination
                count={count}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                sx={{
                    ...{
                        "button": {
                            fontWeight: 'bold',
                            border: "1px solid #F1F1F1",
                            background: "#FFF",
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            fontFamily: 'DM Sans',
                            ":hover": {
                                background: "#5960ffab",
                                color: 'whitesmoke'
                            }
                        },
                        ".Mui-selected": {
                            backgroundColor: "#4950FF !important",
                            color: "white",
                            border: "none",
                            ":hover": {
                                backgroundColor: "#4950FF",
                                color: 'whitesmoke'
                            }
                        }
                    },
                    ...style
                }}
            />
        </Stack>
    );
}