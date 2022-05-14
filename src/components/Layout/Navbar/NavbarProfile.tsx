import logout from "modules/auth/logout";
import context from "modules/context";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, useContext } from "react";
import { BiUser } from "react-icons/bi";

const Drawer: FC<{ router: NextRouter }> = () => {
  const { setUser } = useContext(context);
  return (
    <div className="absolute right-0 z-50 w-32 p-3 text-lg font-bold bg-white border-2 border-black rounded-md top-14 ">
      <button
        onClick={() => {
          logout();
          setUser(undefined);
        }}
      >
        Exit
      </button>
    </div>
  );
};

const NavbarProfile = () => {
  const router = useRouter();
  return (
    <>
      <Link href={"/dashboard"}>
        <a className="relative flex items-center justify-center px-3 py-2 text-3xl text-center bg-white rounded-md shadow-md md:text-4xl shadow-gray-300 w-14">
          <BiUser />
        </a>
      </Link>
      <Drawer router={router} />
    </>
  );
};

export default NavbarProfile;
