import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import Logo from "../Logo";
import SocialMediaContact from "../../SocialMediaContact";
import FooterNav from "./FooterNav";
import socialMediaInfo from "utils/socialMediaInfo";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-5 bg-gray-200 md:px-7 py-7">
      <ul className="flex flex-col space-y-3 text-lg font-bold list-none ">
        <Logo />
        <FooterNav />
      </ul>
      <section className="flex flex-col space-y-5">
        {socialMediaInfo.map((item) => {
          return <SocialMediaContact key={item.url} {...item} />;
        })}
      </section>
    </footer>
  );
};

export default Footer;
