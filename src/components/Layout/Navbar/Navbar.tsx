import { useState } from "react";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";
import NavbarSearchField from "./NavbarSearchField";
import Sidebar from "./Sidebar/Sidebar";
import SidebarToggle from "./Sidebar/SidebarToggle";
import { useQuery } from "react-query";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { data: resData }: { data: any } = useQuery("user");
  const data = resData?.data.attributes.location;
  return (
    <div className="w-full px-5 py-2 space-y-2 bg-white ">
      <div className="flex justify-center">
        <div className="fixed mr-20 lg:hidden left-5 top-2">
          <SidebarToggle setSidebarOpen={setSidebarOpen} />
        </div>
        <span className="text-3xl">LOGO</span>
      </div>
      <div className="h-[2px] bg-gray-200" />
      <div className="flex py-2 space-x-2">
        <NavbarCart />
        <NavbarProfile />
        <NavbarSearchField />
      </div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Navbar;
