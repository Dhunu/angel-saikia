import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="w-full h-full bg-black">
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Separator />
            <Footer />
        </div>
    );
};

export default Layout;
