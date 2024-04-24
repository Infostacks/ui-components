import type { Meta, StoryObj } from '@storybook/react';
import RichTextEditorTipTap from '../Components/RichTextEditor/richTextEditor';

const meta: Meta = {
    title: 'Text Fields/RichTextEditorTipTap',
    component: RichTextEditorTipTap,

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        editable: { control: 'boolean' },
        value: { control: 'text' },
        setValue: { control: 'function' },
        handleFiles: {control: 'function'}
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        editable: true,
        value: 'Hello world',
        setValue: (value: any) => console.log(value),
        handleFiles: (files: any) => console.log(files)
    }
};