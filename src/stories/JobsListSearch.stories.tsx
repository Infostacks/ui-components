import type { Meta, StoryObj } from '@storybook/react';
import data from '../Components/JobsSearch/const';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { JobsList } from '../Components';

const meta: Meta = {
    title: 'List/JobsList',
    component: JobsList,
    decorators: [
        withRouter
    ],

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object' },
        total: { control: 'number' },
        isSmallDev: { control: 'boolean' }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        data: data.jobs,
        total: data.total,
        isSmallDev: true
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