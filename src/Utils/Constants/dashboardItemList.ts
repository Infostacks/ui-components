import React from 'react';
import figmaIcons from "../../Utils/Icons/figma";


export interface DashboardItem{
    label: string;
    icon: ((stroke?:string)=>React.JSX.Element);
    section: string;
    path: string;
}

const dashboardItemList:DashboardItem[]=[
    {
        label: "Dashboard",
        icon: figmaIcons.sideBarDashBoardIcons,
        section: "dashboard",
        path: "/dashboard",
      },
      {
        label: "Profile",
        icon: figmaIcons.dashBoardProfileIcons,
        section: "profile",
        path: "/dashboard/profile",
      }
]

export default dashboardItemList;