import type { Meta, StoryObj } from "@storybook/react";
import {
    reactRouterParameters,
    withRouter,
} from "storybook-addon-react-router-v6";
import { NavProfileMenu } from "../../Components";
import figmaIcons from "../../Utils/Icons/figma";

const meta = {
    title: "Cards/Navbar Profile Menu",
    component: NavProfileMenu,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    decorators: [withRouter],
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        userAuth: {
            photoURL:
                "https://lh3.googleusercontent.com/a/ACg8ocKjSDRwb8AWDtxj9h5mlMQMIuHAbiEGFlyZSOfr4cqZ=s96-c",
            displayName: "Muhammad Ghufran Ali Chaudhry jutt",
            email: "ghoofy.321@gmail.com",
        },
        handleLogout: () => {
            console.log("signout");
        },
        menuListItems: [
            { text: "Settings", href: "/settings", icon: figmaIcons.settingsIcon()},
            { text: "Help Center", href: "/profile", icon: figmaIcons.helpChatIcon()},
        ],
        anchorEl: null,
        open: true,
        handleClose: () => {}
    },
    parameters: {
        // pass in some JSON props here, I don't know what you need
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