import React, { FC, useState } from "react";
import { SidebarType } from "types/UseStateTypes";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const SidebarToggle: FC<SidebarType> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <button
      onClick={function () {
        setSidebarOpen((v) => !v);
      }}
      className="z-30 flex items-center justify-center w-12 h-12 text-3xl text-center text-black rounded-lg "
    >
      {sidebarOpen ? <CgClose className="text-4xl " /> : <FiMenu />}
    </button>
  );
};

export default SidebarToggle;
