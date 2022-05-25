import logout from "modules/auth/logout";
import context from "modules/context";
import { useSession } from "modules/nextAuth-reactQuery";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, useContext, useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";

const DrawerLink: FC<{ user: any }> = ({ user }) => {
  return (
    <>
      <Link href={"/dashboard"}>
        <a className="flex items-center pb-3 border-b border-gray-200">
          <MdOutlineAccountCircle className="mr-3 text-3xl" />
          <span className="text-xl capitalize">
            {user.username}
            {/* lkjlkasdhahglkshdg */}
          </span>
          <IoIosArrowForward className="text-2xl" />
        </a>
      </Link>
      <Link href={"/dashboard/cart"}>
        <a className="flex items-center pb-3 font-semibold border-b border-gray-200">
          <MdOutlineShoppingBag className="mr-3 text-xl" />
          <span>Orders</span>
        </a>
      </Link>
      <button
        className="flex items-center text-xl font-semibold text-left text-red-700"
        onClick={() => signOut()}
      >
        <BsBoxArrowLeft className="mr-3 text-xl" />
        <span>Exit</span>
      </button>
    </>
  );
};

const NavbarProfile = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const router = useRouter();

  const [session, loading] = useSession();

  const user = session.user;

  return (
    <>
      {/* <Link href={"/dashboard"}> */}
      <button
        className="relative flex items-center justify-center px-3 py-2 text-3xl text-center bg-white rounded-md shadow-md md:text-4xl shadow-gray-300 w-14"
        onClick={() => {
          setDrawerOpen((v) => !v);
        }}
      >
        <BiUser />
        <div
          className="absolute cursor-default flex-col gap-3 top-[103%] right-0 z-50 p-3 w-fit text-lg font-bold bg-white shadow-sm shadow-gray-500 rounded-md"
          style={drawerOpen ? { display: "flex" } : { display: "none" }}
        >
          <DrawerLink user={user} />
        </div>
      </button>
      {/* </Link> */}
    </>
  );
};

export default NavbarProfile;
