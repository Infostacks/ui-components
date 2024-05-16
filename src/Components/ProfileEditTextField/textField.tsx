import { InputAdornment, TextField, useTheme } from "@mui/material";
import React from "react";

export interface TextFieldInterface {
    placeholder: string | undefined,
    type: string | undefined,
    value: string | undefined,
    containError: boolean | undefined,
    success: boolean | undefined,
    register: object | undefined,
    startingicon: any | undefined,
    endingicon: any | undefined,
    helperText: string | undefined,
    required: boolean | undefined,
    sx: object | undefined,
    autoComplete: string | undefined,
    disable: boolean | undefined,
    select: boolean | undefined,
    multiline: boolean | undefined,
    children: any | undefined,
    rows: number | undefined,
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
}

const ProfileEditTextField = ({
    type,
    placeholder,
    value,
    containError,
    register,
    startingicon,
    endingicon,
    helperText,
    required,
    sx,
    autoComplete,
    disable,
    select,
    multiline,
    children,
    rows,
    onClick,
    onChange,
}: TextFieldInterface) => {
    const theme = useTheme();
    return (
        <TextField
            sx={{
                my: 1,
                width: "99%",
                "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.primary.dark}`,
                    padding: "4px 4px",
                    "fieldset": {
                        border: "none"
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                    },
                    "& fieldset": {
                        borderColor: "transparent",
                        height: '40px',
                    },
                },
                "& .MuiOutlinedInput-input": {
                    padding: '4px'
                },
                "& .Mui-focused": {
                    backgroundColor: "white",
                    padding: '3px',
                    border: `2px solid ${theme.palette.primary.dark}`,
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
            disabled={disable}
            select={select}
            multiline={multiline}
            rows={rows}
        >
            {children}
        </TextField>
    )
};

export default ProfileEditTextField;
