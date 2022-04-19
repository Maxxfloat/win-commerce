import React from "react";
import { IconBase } from "react-icons";
import { BsCart3 } from "react-icons/bs";

const NavbarCart = () => {
  return (
    <a className="relative flex justify-center px-3 py-2 text-4xl text-center bg-white rounded-md shadow-md shadow-gray-300 w-14">
      <BsCart3 />
      <div className="rounded-full text-sm flex items-center justify-center w-5 h-5 -bottom-1 bg-red-600 shadow-sm shadow-red-600 text-white -right-1 border-[1px] absolute border-red-600 p-1">
        2
      </div>
    </a>
  );
};

export default NavbarCart;
