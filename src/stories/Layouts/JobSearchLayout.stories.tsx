import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import data from '../../Components/Layouts/JobsSearch/const';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { JobsSearchLayout } from '../../Components';

const meta: Meta = {
    title: 'Layout/JobsSearch',
    component: JobsSearchLayout,
    decorators: [
        withRouter
    ],

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        // searchText: { control: 'text' },
        searchText: { control: 'object' },
        data: { control: 'object' },
        handlePageChange: {},
        total: { control: 'number' },
        applyUrl: { control: 'string' },
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

const theme = createTheme({});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const primary: Story = {
    // decorators: [
    //     (Story) => (
    //         <ThemeProvider theme={theme}>
    //             <MUIThemeProvider theme={theme}>
    //                 <Story />
    //             </MUIThemeProvider>
    //         </ThemeProvider>
    //     )
    // ],
    args: {
        data: data.jobs,
        total: data.total,
        applyUrl: '/apply/',
        appliedList: ['66070dac8421868ef0643dc7'],
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

export const TextCorrect: Story = {
    // decorators: [
    //     (Story) => (
    //         <ThemeProvider theme={theme}>
    //             <MUIThemeProvider theme={theme}>
    //                 <Story />
    //             </MUIThemeProvider>
    //         </ThemeProvider>
    //     )
    // ],
    args: {
        searchText: {searchText:'Soft Engner',autoCorrectText:'Software Engineer'},
        data: data.jobs,
        total: data.total,
        applyUrl: '/apply/',
        appliedList: ['66070dac8421868ef0643dc7'],
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