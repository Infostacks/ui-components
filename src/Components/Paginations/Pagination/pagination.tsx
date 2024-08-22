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
                // color={'accent'}
                variant="outlined"
                shape="rounded"
                sx={{
                    ...{
                        "button": {
                            fontWeight: 'bold',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            ":hover": {
                                backgroundColor: '#3326C9',
                                color: 'white'
                            }
                        },
                        ".Mui-selected": {
                            backgroundColor: '#3326C9',
                            color: 'white',
                            ":hover": {
                                backgroundColor: '#3326C9',
                            }
                        }
                    },
                    ...style
                }}
            />
        </Stack>
    );
}