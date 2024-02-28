import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {  reactRouterParameters, withRouter, reactRouterOutlets } from 'storybook-addon-react-router-v6';
import SideBar  from '../Components/SideBar/sidebar';
import dashboardItemList from '../Utils/Constants/dashboardItemList';

const meta : Meta = {
    title: 'Drawer/SideBar',
    component: SideBar,

    decorators: [withRouter],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        title: {control: 'text'},
        activeSection: {control: 'text'},
        handleSectionClick: {control: 'function'},  
        isXsScreen: {control: 'boolean'},
        listItems: {control: 'object'},
    } 
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Candidate: Story = {
    args: {
        title: 'Candidate',
        activeSection: 'dashboard',
        onClick:()=>{console.log('onclick')},
        handleSectionClick: () => console.log('Clicked'),
        listItems: dashboardItemList
    },
    parameters: {
      reactRouter: reactRouterParameters({
        routing: reactRouterOutlets([
          { 
            path: '/dashboard'
          },
          { 
            path: '/dashboard/profile'
          },
        ])
      }),
    },
};