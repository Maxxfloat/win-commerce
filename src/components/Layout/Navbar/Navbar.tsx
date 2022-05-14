import { useState, useContext } from "react";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";
import NavbarSearchField from "./NavbarSearchField";
import Sidebar from "./Sidebar/Sidebar";
import SidebarToggle from "./Sidebar/SidebarToggle";
import { useQuery } from "react-query";
import Logo from "../Logo";
import SigninBtn from "./SigninBtn";
import context from "modules/context";
import SmallScreenSearchPopup from "./SmallScreenSearchPopup";
import pages from "utils/pages";
import NavbarTab from "./NavbarTab";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchPageUp, setSearchPageUp] = useState<boolean>(false);
  // const { data: resData }: { data: any } = useQuery("user");
  const { user } = useContext(context);
  return (
    <header className="w-full px-5 py-2 space-y-2 bg-white ">
      <nav className="flex justify-center lg:hidden">
        <div className="absolute mr-20 left-5 top-2">
          <SidebarToggle setSidebarOpen={setSidebarOpen} />
        </div>
        <Logo />
      </nav>
      <div className="h-[2px] bg-gray-200 lg:hidden" />
      <div className="flex justify-center py-2 space-x-3 lg:justify-start ">
        <div className="items-center justify-center hidden w-28 lg:flex">
          <Logo />
        </div>
        <div className="flex items-center w-full" style={{ marginLeft: 0 }}>
          <div
            className="w-full lg:w-1/2"
            onClick={() => setSearchPageUp(true)}
          >
            <NavbarSearchField />
          </div>
        </div>
        {user ? <NavbarProfile /> : <SigninBtn />}
        <NavbarCart />
      </div>
      <div className="flex items-center gap-3 p-1 mx-5 border-t-2 border-gray-300">
        {pages.map((page) => {
          return (
            <NavbarTab
              key={page.title}
              title={page.title}
              link={page.address}
            />
          );
        })}
      </div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SmallScreenSearchPopup
        searchPageUp={searchPageUp}
        setSearchPageUp={setSearchPageUp}
      />
    </header>
  );
};

export default Navbar;
