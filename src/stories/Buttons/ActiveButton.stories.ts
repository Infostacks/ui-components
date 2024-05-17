import type { Meta, StoryObj } from "@storybook/react";

import { ActiveButton } from "../../Components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Buttons/Active-Button",
  component: ActiveButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: { control: "text" },
    isActive: { control: "boolean" },
    onClick: { control: "function" },
    component: { control: "text" },
    sx: { control: "object" },
    type: { control: "text" },
    isRounded: {control: 'boolean'},
    href: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "text" },
  },
} satisfies Meta<typeof ActiveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Active Button",
    isActive: true,
    onClick: () => console.log("Clicked"),
    type: undefined,
    startIcon: undefined,
    endIcon: undefined,
    component: "a",
    sx: undefined,
  },
};

export const Secondary: Story = {
  args: {
    text: "Active Button",
    isActive: false,
    onClick: () => console.log("Clicked"),
    type: undefined,
    startIcon: undefined,
    endIcon: undefined,
    component: "a",
    sx: undefined,
  },
};
