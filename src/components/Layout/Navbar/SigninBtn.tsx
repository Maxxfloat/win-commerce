import Link from "next/link";
import React from "react";
import { BiLogIn } from "react-icons/bi";
const BigSigninBtn = () => {
  return (
    <Link href={"/auth/login"} passHref>
      <button className="flex items-center justify-center px-3 py-2 text-center bg-white rounded-md border-[1px] border-gray-500 whitespace-nowrap">
        <BiLogIn />
        <span className="ml-3 text-sm font-semibold text-gray-600 ">
          Sign in
        </span>
      </button>
    </Link>
  );
};

export default BigSigninBtn;
