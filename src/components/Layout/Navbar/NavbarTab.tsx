import Link from "next/link";
import { FC } from "react";
const NavbarTab: FC<{ title: string; link: string }> = ({ title, link }) => {
  return (
    <Link href={link}>
      <a className="flex items-center justify-center p-2 text-xl font-bold hover:text-gray-600">
        {title}
      </a>
    </Link>
  );
};

export default NavbarTab;
