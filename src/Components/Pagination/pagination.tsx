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
                color={'primary'}
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
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText'
                            }
                        },
                        ".Mui-selected": {
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            ":hover": {
                                backgroundColor: 'primary.main',
                            }
                        }
                    },
                    ...style
                }}
            />
        </Stack>
    );
}