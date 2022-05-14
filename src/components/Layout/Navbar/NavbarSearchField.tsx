import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const NavbarSearchField = () => {
  return (
    <div className="flex items-center w-full px-3 py-2 space-x-3 text-lg bg-gray-200 rounded-md justify-self-end focus:bg-white focus:outline-none placeholder:text-black">
      <AiOutlineSearch />
      <span className="select-none">Search ..</span>
    </div>
  );
};

export default NavbarSearchField;
