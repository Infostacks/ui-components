import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {  reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import SideBar  from '../Components/SideBar/sidebar';
// import BrowserRouterasRouter from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';


const meta : Meta = {
    title: 'Recruitment/SideBar',
    component: SideBar,
    // decorators: [
    //     (Story) => (
    //       <div style={{ margin: '3em' }}>
    //         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //         <Story />
    //       </div>
    //     ),
    //   ],
    // decorators: [
    //     // (Story: React.ComponentType) => (
    //     //     <BrowserRouter>
    //     //       <Story />
    //     //     </BrowserRouter>
    //     //   ),
    //       withRouter,
    //   ],
    
    
    // parameters: {
    //     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //     layout: 'centered',
    // },

    decorators: [withRouter],
    parameters: {
      reactRouter: reactRouterParameters({
        location: {
          pathParams: { userId: '42' },
        },
        routing: { path: '/users/:userId' },
      }),
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        isCollapsed: {control: 'boolean'},
        handleCollapseToggle: {control: 'function'},
        activeSection: {control: 'text'},
        handleSectionClick: {control: 'function'},        
    } 
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Drawer: Story = {
    args: {
        isCollapsed: false,
        handleCollapseToggle: () => console.log('Clicked'),
        activeSection: 'dashboard',
        handleSectionClick: () => console.log('Clicked'),
    },
 };