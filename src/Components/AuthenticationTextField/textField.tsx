import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export interface AuthenticationTextFieldProps {
    placeholder?: string;
    type?: string;
    value?: string;
    containError?: boolean;
    success?: boolean;
    register?: object;
    startingicon?: React.ReactNode;
    endingicon?: React.ReactNode;
    helperText?: string;
    required?: boolean;
    sx?: object;
    autoComplete?: string
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
}

const AuthenticationTextField = ({
    placeholder,
    type,
    value,
    containError,
    register,
    startingicon,
    endingicon,
    helperText,
    required,
    sx,
    autoComplete,
    onClick,
    onChange,
}: AuthenticationTextFieldProps) => (
    <TextField
        sx={{
            "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                backgroundColor: containError ? 'error.extraLight' : "secondary.extraDark",
                padding: "5px 15px",
                "&:hover fieldset": {
                    borderColor: "transparent", // Remove outline when not focused
                },
                "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Remove outline when focused
                },
                "& fieldset": {
                    borderColor: "transparent",
                },
            },
            ...sx,
        }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">{startingicon}</InputAdornment>
            ),
            endAdornment: (
                <InputAdornment position="end">{endingicon}</InputAdornment>
            ),
        }}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        required={required}
        error={containError}
        helperText={helperText}
        autoComplete={autoComplete}
        {...register}
    />
);

export default AuthenticationTextField;
