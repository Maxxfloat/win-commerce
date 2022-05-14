import { FC } from "react";
import Link from "next/link";

const SidebarLink: FC<{ title: string; link: string }> = ({ title, link }) => {
  return (
    <li className="w-full">
      <Link href={link}>
        <a className="block p-1 pl-3 text-lg font-bold text-left capitalize border-b border-red-500 ">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default SidebarLink;
