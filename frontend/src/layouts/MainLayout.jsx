import Navbar from "@/components/custom/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet /> {/* Renders the matched child route */}
        </>
    );
};

export default MainLayout;
