import { React } from 'react';
import figmaIcons from "../../Utils/Icons/figma";


export interface DashboardItem{
    label: string,
    icon: React.ReactNode,
    section: string,
    path: string,
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
      },
      {
        label: "Post a Job",
        icon: figmaIcons.postJobIcons,
        section: "Post a job",
        path: "/dashboard/postajob",
      },
]

export default dashboardItemList;