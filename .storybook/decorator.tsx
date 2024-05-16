import React from "react";
import { ThemeProvider } from "@mui/material";
import defaultTheme from '../src/theme';

/* snipped for brevity */

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={defaultTheme}>
        {/* <CssBaseline /> */}
        <Story />
    </ThemeProvider>
);

export const decorators = [withMuiTheme];