import Link from "next/link";
import { FC, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { SidebarType } from "types/UseStateTypes";

const Sidebar: FC<SidebarType> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className="fixed right-0 z-10 flex w-full transition-all duration-300"
      style={!sidebarOpen ? { right: "100%", background: "none" } : {}}
    >
      <div className="flex flex-col items-center w-10/12 h-screen overflow-hidden bg-gray-300 shadow-lg shadow-gray-400 lg:hidden ">
        <ul className="flex flex-col items-center w-full"></ul>
        {/* <SocialMendias /> */}
      </div>
      <div
        className="w-2/12"
        onClick={function () {
          setSidebarOpen((v) => !v);
        }}
      />
    </div>
  );
};

// export const SocialMendias: FC = () => (
//   <div className="flex m-10 mt-auto space-x-3">
//     <div
//       className="p-[5px] text-3xl rounded-lg text-white "
//       style={{
//         backgroundImage:
//           "radial-gradient(circle at 30% 107%, #fcef69 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
//       }}
//     >
//       <BsInstagram />
//     </div>
//     <div className=" text-[2.4rem] rounded-lg text-[#0e76a8]">
//       <GrLinkedin />
//     </div>
//     <div></div>
//   </div>
// );

export default Sidebar;
