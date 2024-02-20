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
}

const ActiveButton = ({
   text,
   onClick,
   isActive,
    type="button",
    startIcon,
    endIcon,
    sx,
    component='button'
}: ActiveButtonProps) => (
  <Button
    sx={{
      padding: "8px",
      color: `${!isActive ? `#3326C9` : "white"}`,
      borderRadius: "15px",
      backgroundColor: `${!isActive ? "transparent" : `#3326C9`}`, // Update style based on isLogin
      textTransform: "capitalize",
      ":hover": {
        backgroundColor: `${!isActive ? "transparent" : `#3326C9`}`,
      },
      ...sx,
    }}
    component={component}
    onClick={onClick}
    type={type}
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {text}
  </Button>
);

export default ActiveButton;
