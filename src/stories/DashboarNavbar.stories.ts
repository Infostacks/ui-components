import type { Meta, StoryObj } from "@storybook/react";
import DashboardNavBar from "../Components/DashboardNavBar/r_navbar";
import {StorybookDecor} from "../Context/sampleContext";
import { reactRouterParameters, withRouter } from "storybook-addon-react-router-v6";


const meta = {
    title: 'Navbar/Dashboard Navbar',
    component: DashboardNavBar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    decorators: [
        StorybookDecor,
        withRouter
      ],
    //   parameters: {
    //     // pass in some JSON props here, I don't know what you need
    //     initialProps: {
    //         userAuth: {
    //             photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c',
    //         },
    //         signOutContext: () => {
    //             console.log('signout');
    //         }
    //     },
    //     reactRouter: reactRouterParameters({
    //         location: {
    //           path: "/dashboard/profile",
    //         },
    //         routing: {
    //           path: "/dashboard/profile",
    //         },
    //       }),
    //  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
    parameters: {
        // pass in some JSON props here, I don't know what you need
        initialProps: {
            userAuth: {
                photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c',
            },
            signOutContext: () => {
                console.log('signout');
            }
        },
        reactRouter: reactRouterParameters({
            location: {
              path: "/dashboard",
            },
            routing: {
              path: "/dashboard",
            },
          }),
     }
}

export const Profile: Story = {
    parameters: {
        // pass in some JSON props here, I don't know what you need
        initialProps: {
            userAuth: {
                photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c',
            },
            signOutContext: () => {
                console.log('signout');
            }
        },
        reactRouter: reactRouterParameters({
            location: {
              path: "/dashboard/profile",
            },
            routing: {
              path: "/dashboard/profile",
            },
          }),
     }
}