import React from "react";
import { IconBase } from "react-icons";
import { BsCart3 } from "react-icons/bs";

const NavbarCart = () => {
  return (
    <a className="relative flex justify-center px-3 py-2 text-4xl text-center bg-white rounded-md shadow-md shadow-gray-300 w-14">
      <BsCart3 />
      <div className="absolute flex items-center justify-center p-2 text-sm text-white bg-red-600 border-4 border-white rounded-full shadow-sm shadow-gray-200 h-7 w-7 -bottom-1 -right-1">
        2
      </div>
    </a>
  );
};

export default NavbarCart;
