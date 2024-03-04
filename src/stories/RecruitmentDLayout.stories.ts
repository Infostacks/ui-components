import type { Meta, StoryObj } from "@storybook/react";
import { R_DashboardLayout } from "../Components";
import { StorybookDecor } from "../Context/sampleContext";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import dashboardItemList from "../Utils/Constants/dashboardItemList";

const meta = {
  title: "Layout/Recruitment",
  component: R_DashboardLayout,

  decorators: [StorybookDecor, withRouter],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  args: {
    dashboardItemList: dashboardItemList,
    activeSection: "dashboard",
    handleSectionClick: (section: string) => {
      console.log(section);
    },
    isXsScreen: false,
  },
  parameters: {
    // pass in some JSON props here, I don't know what you need
    initialProps: {
      userAuth: {
        photoURL:
          "https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",
      },
      signOutContext: () => {
        console.log("signout");
      },
    },
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


export const ProfilePage: Story = {
    args: {
      dashboardItemList: dashboardItemList,
      activeSection: "profile",
      handleSectionClick: (section: string) => {
        console.log(section);
      },
      isXsScreen: false,
    },
    parameters: {
      // pass in some JSON props here, I don't know what you need
      initialProps: {
        userAuth: {
          photoURL:
            "https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",
        },
        signOutContext: () => {
          console.log("signout");
        },
      },
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
