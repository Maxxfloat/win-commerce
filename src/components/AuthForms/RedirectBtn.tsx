import Link from "next/link";
import { FC } from "react";

const FormExtraBtn: FC<{ href: string; title: string }> = ({ href, title }) => (
  <Link href={href} passHref>
    <button className="w-3/5 mt-5 text-right pr-3 leading-9 flex justify-end text-blue-700  border-blue-400 rounded-sm rounded-b-none border-b-[1px]">
      {title}
    </button>
  </Link>
);

export default FormExtraBtn;
