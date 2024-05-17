import React from "react";
import './style.css'
import { Box } from '@mui/material';

export default function Loader() {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
            ,
            width: '100vw'
            ,
            position: 'absolute'
            ,
            top: 0
            ,
            left: 0
            ,
            zIndex: 9999
            ,
            background: 'rgba(0,0,0,0.5)'
            ,
            backdropFilter: 'blur(5px)'
            ,
            WebkitBackdropFilter: 'blur(5px)'
            ,
            transition: 'all 0.3s ease-in-out'
            ,
            opacity: 1
            ,
            pointerEvents: 'all'
            ,
            visibility: 'visible'
            ,
            transform: 'scale(1)'
            ,
            transformOrigin: 'center center'
            ,
            borderRadius: '5px'
            ,
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            ,
            overflow: 'hidden'
            ,
            margin: '0'
        }}>

            <Box className="loader" 
                sx={{
                    ".side-top": {
                        backgroundColor: 'accent.main'
                    },
                    ".side-left": {
                        backgroundColor: 'accent.main'
                    },
                    ".side-right": {
                        backgroundColor: 'accent.main'
                    }
                }}
            >
                <Box className="box box-1">
                    <Box className="side-left"></Box>
                    <Box className="side-right"></Box>
                    <Box className="side-top"></Box>
                </Box>
                <Box className="box box-2">
                    <Box className="side-left"></Box>
                    <Box className="side-right"></Box>
                    <Box className="side-top"></Box>
                </Box>
                <Box className="box box-3">
                    <Box className="side-left"></Box>
                    <Box className="side-right"></Box>
                    <Box className="side-top"></Box>
                </Box>
                <Box className="box box-4">
                    <Box className="side-left"></Box>
                    <Box className="side-right"></Box>
                    <Box className="side-top"></Box>
                </Box>
            </Box>
        </Box>
    )
}