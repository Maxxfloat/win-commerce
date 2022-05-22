import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IconType } from "react-icons";
import { CSSProperties } from "react";

const socialMediaInfo: {
  url: string;
  logo: IconType;
  style?: CSSProperties;
}[] = [
  {
    url: "mailto:startomid2020@gmail.com",
    logo: HiOutlineMail,
  },
  {
    url: "https://www.linkedin.com/in/omid-neshati/",
    logo: BsLinkedin,
    style: { color: "#0e76a8" },
  },
  {
    url: "https://github.com/Maxxfloat/win-commerce",
    logo: BsGithub,
  },
];

export default socialMediaInfo;
