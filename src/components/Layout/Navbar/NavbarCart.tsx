import { FC } from "react";
import { IconBase } from "react-icons";
import { BsCart3 } from "react-icons/bs";
import CartNumberIndicator from "./CartNumberIndicator";

const NavbarCart = () => {
  return (
    <a className="relative flex items-center justify-center px-3 py-2 text-3xl text-center bg-white rounded-md shadow-md md:text-4xl shadow-gray-200 w-14">
      <BsCart3 />
      <CartNumberIndicator />
    </a>
  );
};

export default NavbarCart;
