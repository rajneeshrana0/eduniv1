"use client";

import { Layout , Compass, Share } from "lucide-react";
import { SidebarItem } from "./sidebar-item";




const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href:"/",
    },

    {
        icon: Compass,
        label: "Browser",
        href:"/search",
    },
    {
        icon: Share,
        label: "Discord",
        href:"/community",
    },
]




export const SidebarRoutes = () => {

const routes = guestRoutes;
    return(
        <div className="flex flex-col w-full ">
            {routes.map((route) => (
                <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}