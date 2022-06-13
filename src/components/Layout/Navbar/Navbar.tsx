import { useState } from "react";
import NavbarCart from "./NavbarCart";
import NavbarProfile from "./NavbarProfile";
import NavbarSearchField from "./NavbarSearchField";
import Sidebar from "./Sidebar/Sidebar";
import SidebarToggle from "./Sidebar/SidebarToggle";
import Logo from "../Logo";
import SigninBtn from "./SigninBtn";
import SearchPopup from "./SearchPopup";
import pages from "utils/pages";
import NavbarTab from "./NavbarTab";
import { useSession } from "modules/nextAuth-reactQuery";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchPageUp, setSearchPageUp] = useState<boolean>(false);

  const [session] = useSession({
    required: false,
  });

  return (
    <header className="w-full gap-2 px-5 py-2 bg-white ">
      <nav className="flex justify-center mb-2 lg:hidden">
        <div className="absolute mr-20 left-5 top-2">
          <SidebarToggle setSidebarOpen={setSidebarOpen} />
        </div>
        <Logo />
      </nav>
      <div className="flex justify-center gap-3 py-2 my-1 border-t-2 border-gray-200 lg:border-none lg:justify-start">
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
        {session ? <NavbarProfile /> : <SigninBtn />}
        <NavbarCart />
      </div>
      <div className="flex items-center gap-3 p-1 px-5 border-t-2 border-gray-200">
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
      <SearchPopup
        searchPageUp={searchPageUp}
        setSearchPageUp={setSearchPageUp}
      />
    </header>
  );
};

export default Navbar;
