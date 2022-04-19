import { useState } from "react";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";
import NavbarSearchField from "./NavbarSearchField";
import Sidebar from "./Sidebar/Sidebar";
import SidebarToggle from "./Sidebar/SidebarToggle";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="inset-x-0 w-full px-4 pt-4 space-y-2 bg-white ">
      <div className="flex justify-center">
        <span className="text-3xl">LOGO</span>
      </div>
      <div className="h-[2px] bg-gray-200" />
      <div className="flex py-2 space-x-2">
        <NavbarCart />
        <NavbarProfile />
        <NavbarSearchField />
      </div>
      <div className="h-[2px] bg-gray-200" />
      <div className="lg:hidden">
        <SidebarToggle
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Navbar;
