import type { Meta, StoryObj } from '@storybook/react';
import {CustomVerticalLinearStepper} from '../Components';

const meta = {
    title: 'Recruitment/VerticalLinearStepper',
    component: CustomVerticalLinearStepper,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isActive: 3,
        children: null
    }
}