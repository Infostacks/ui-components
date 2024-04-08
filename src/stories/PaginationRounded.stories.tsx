import type { Meta, StoryObj } from '@storybook/react';
import PaginationRounded from '../Components/Pagination';

const meta: Meta = {
    title: 'Pagination/Pagination Rounded',
    component: PaginationRounded,

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        count: { control: 'number' },
        handleChange: { control: 'function' }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        count: 9,
        handleChange: (e, v) => {
            console.log(v, "current Page", v);
        }
    }
};