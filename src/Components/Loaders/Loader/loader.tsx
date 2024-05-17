import { CircularProgress } from "@mui/material";
import React from "react";

export interface LoaderProps {
	thickness?: number,
	color?: string,
    value?: number,
    variant?: "determinate" | "indeterminate" | undefined,
    size?: number,
    sx?: object,
}

const Loader = ({
    thickness,
    color,
    value,
    variant,
    size,
    sx,
}: LoaderProps) =>
 (
    <CircularProgress 
        
        thickness={thickness}
        // color={color}
        value={value}
        variant={variant}
        size={size}
        sx={{ ...sx, ...{color: `${color}.main` } }}
    />
);

export default Loader;