import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Outlet />
            </div>
        </div>
    )
}