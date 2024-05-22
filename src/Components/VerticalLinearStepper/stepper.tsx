import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import { useTheme } from '@mui/material';

export interface MyVerticalLinearStepperProps {
    isActive: number;
    children: React.ReactNode;
}

// TODO: change the completed step algo...
// will consider completed if data exist...
export default function MyVerticalLinearStepper({ isActive, children }: MyVerticalLinearStepperProps) {
    const theme=useTheme()
    return (
        <Stepper activeStep={isActive} orientation="vertical"
            sx={{
                textAlign: 'right',
                "& .MuiStepLabel-root": {
                    flexDirection: 'row-reverse'
                },
                "& .MuiStepLabel-label": {
                    color: '#211F54',
                    fontSize: '14px',
                    fontWeight: '600',
                    textAlign: 'right',
                    marginRight: '10px',
                },
                "& .MuiStepLabel-label .Mui-completed": {
                    color: '#211F54',
                    fontSize: '14px',
                    fontWeight: '600',
                    textAlign: 'right',
                    marginRight: '10px',
                },
                "& .MuiStep-root": {
                    my: '-10px'
                },
                "& .MuiStepConnector-line": {
                    borderRight: `2px solid  ${theme.palette.accent.main}`,
                    width: '82%',
                    borderLeft: 'none',
                    height: '72px',
                },
                "& .MuiSvgIcon-root": {
                    "circle": {
                        color: '#7C8EFF',
                        r: 10,
                    },
                    cursor: 'pointer',
                },
                "& .MuiStepLabel-iconContainer .Mui-active": {
                    "circle": {
                        color: '#3326C9',
                    }
                },
                "& .MuiStepLabel-iconContainer .Mui-completed": {
                    "circle": {
                        r: 10
                    }
                },
                "& .MuiStepIcon-text": {
                    fontSize: '14px',
                },
            }}>
            {children}
        </Stepper>
    );
}