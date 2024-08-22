import React from "react";
import { Button } from "@mui/material";

export interface ActiveButtonProps {
    text: string | undefined,
    isActive: boolean | undefined,
    type: string | undefined,
    startIcon: React.ReactNode | undefined,
    endIcon: React.ReactNode | undefined,
    sx: object | undefined,
    component: React.ElementType<any>
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined,
    disabled?: boolean ,
    href?: string,
    isRounded?: boolean,
    size?: "small" | "medium" | "large"
}

const ActiveButton = ({
   text,
   onClick,
   isActive,
    type="button",
    startIcon,
    endIcon,
    sx,
    component='button',
    isRounded,
    href,
    size
}: ActiveButtonProps) => (
  <Button
    sx={{
      padding: "8px",
      color: isActive? 'white' : '#3326C9',
      borderRadius: isRounded ? '50px' : "15px",
      backgroundColor: isActive? '#3326C9' : 'transparent',
      textTransform: "capitalize",
      ":hover": {
        backgroundColor: isActive? '#3326C9' : 'transparent',
      },
      ...sx,
    }}
    component={component}
    onClick={onClick}
    type={type}
    startIcon={startIcon}
    endIcon={endIcon}
    href={href}
    size={size}
  >
    {text}
  </Button>
);

export default ActiveButton;
