import type { Meta, StoryObj } from "@storybook/react";
import { NavbarBreadcrumbs } from "../Components";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

const meta = {
  title: "BreadCrumbs/Navbar Basic BreadCrumb",
  component: NavbarBreadcrumbs,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    sx: {control: 'object'},
    breadClick: {control: 'function'},
    crumbClick: {control: 'function'}
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/dashboard",
      },
      routing: {
        path: "/dashboard",
      },
    }),
  },
};

export const Two: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/dashboard/profile",
      },
      routing: {
        path: "/dashboard/profile",
      },
    }),
  },
};

export const Three: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/dashboard/profile/edit",
      },
      routing: {
        path: "/dashboard/profile/edit",
      },
    }),
  },
};

export const Four: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/dashboard/profile/edit/address",
      },
      routing: {
        path: "/dashboard/profile/edit/address",
      },
    }),
  },
};
