import type { Meta, StoryObj } from "@storybook/react";
import { ProfileEditTextField } from "../../Components";

const meta = {
  title: "Text Fields/ProfileEditTextField",
  component: ProfileEditTextField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
    containError: { control: "boolean" },
    success: { control: "boolean" },
    register: { control: "object" },
    helperText: { control: "text" },
    required: { control: "boolean" },
    sx: { control: "object" },
    autoComplete: { control: "text" },
    disable: { control: "boolean" },
    select: { control: "boolean" },
    multiline: { control: "boolean" },
    rows: { control: "number" },
    onClick: { control: "function" },
    onChange: { control: "function" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    success: undefined,
    type: undefined,
    placeholder: undefined,
    value: undefined,
    containError: undefined,
    register: undefined,
    startingicon: undefined,
    endingicon: undefined,
    helperText: undefined,
    required: undefined,
    sx: undefined,
    autoComplete: undefined,
    disable: undefined,
    select: undefined,
    multiline: undefined,
    children: undefined,
    rows: undefined,
    onClick: undefined,
    onChange: undefined,
  },
};
