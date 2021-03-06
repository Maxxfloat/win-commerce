import { FC } from "react";
import { useQuery } from "react-query";
import { SidebarType } from "types/UseStateTypes";

import SidebarLink from "./SidebarLink";
import pages from "utils/pages";
import Logo from "components/Layout/Logo";
import SocialMediaContact from "components/SocialMediaContact";
import socialMediaInfo from "utils/socialMediaInfo";
import { getCategories } from "utils/getData";

const Sidebar: FC<SidebarType> = ({ sidebarOpen, setSidebarOpen }) => {
  const { data }: { data: any[] | undefined } = useQuery(
    "categories",
    getCategories
  );
  return (
    <div className="absolute z-20 lg:hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 h-screen bg-gray-300 opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className="fixed top-0 bottom-0 z-20 flex w-9/12 transition-all duration-300 -left-full "
        style={sidebarOpen ? { left: 0 } : {}}
      >
        <div
          dir="rtl"
          className="flex flex-col items-center w-full overflow-y-auto bg-white shadow-lg shadow-gray-400 "
        >
          <div dir="ltr" className="w-full p-10 sm:pl-16 ">
            <div className="flex justify-center">
              <Logo />
            </div>
            <p className="text-3xl font-bold text-gray-500 my-7">Pages</p>
            <ul className="flex flex-col w-full gap-3 sm:w-1/2">
              {pages.map((page) => {
                return (
                  <SidebarLink
                    key={page.title}
                    title={page.title}
                    link={{ pathname: page.address }}
                  />
                );
              })}
            </ul>
            <p className="mt-16 text-3xl font-bold text-gray-500 mb-7">
              Categories
            </p>
            <ul className="flex flex-col w-full gap-3 sm:w-1/2">
              {data?.map((category) => {
                const info = category.attributes;
                return (
                  <SidebarLink
                    key={info.name}
                    title={info.name}
                    link={{
                      pathname: `/products`,
                      query: { category: info.slug },
                    }}
                  />
                );
              })}
            </ul>
            <div className="flex justify-center gap-5 mt-20 mb-10">
              {socialMediaInfo.map((item) => {
                return <SocialMediaContact key={item.url} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
