import { NavbarRoutes } from "@/components/ui/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <div className="p-4 borbder-b h-full flex items-center bg-white shadow-md  ">

            <MobileSidebar />
            <NavbarRoutes/>
        </div>
    )
}