import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import JobDetail from '../Components/JobsSearch/JobDetail';
import data from '../Components/JobsSearch/const';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const meta: Meta = {
    title: 'Deatils/JobsList Details',
    component: JobDetail,
    decorators: [
        withRouter
    ],

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object' },
        // total: { control: 'number' },
        // isSmallDev: {control: 'boolean'}
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

const theme = createTheme({});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Short: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <MUIThemeProvider theme={theme}>
                    <Story />
                </MUIThemeProvider>
            </ThemeProvider>
        )
    ],
    args: {
        data: data.jobs[0],
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                path: "/jobs",
            },
            routing: {
                path: "/jobs",
            },
        }),
    }
};

export const Long: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <MUIThemeProvider theme={theme}>
                    <Story />
                </MUIThemeProvider>
            </ThemeProvider>
        )
    ],
    args: {
        data: data.jobs[1],
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                path: "/jobs",
            },
            routing: {
                path: "/jobs",
            },
        }),
    }
};