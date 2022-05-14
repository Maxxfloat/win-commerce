import Link from "next/link";
import React from "react";

import pages from "utils/pages";

const FooterNav = () => {
  return (
    <>
      {pages.map((page) => {
        return (
          <li key={page.title}>
            <Link href={page.address}>
              <a className="text-gray-700 capitalize">{page.title}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default FooterNav;
