import Navbar from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div className="relative">
                <Navbar />
                <Outlet /> {/* Renders the matched child route */}
            </div>
        </>
    );
};

export default MainLayout;
