import { FC } from "react";
import { IconBase } from "react-icons";
import { BsCart3 } from "react-icons/bs";
import CartNumberIndicator from "./CartNumberIndicator";

const NavbarCart = () => {
  return (
    <a className="relative flex justify-center px-3 py-2 text-4xl text-center bg-white rounded-md shadow-md shadow-gray-300 w-14">
      <BsCart3 />
      <CartNumberIndicator />
    </a>
  );
};

export default NavbarCart;
