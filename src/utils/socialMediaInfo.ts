import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IconType } from "react-icons";

const socialMediaInfo: { url: string; logo: IconType; className?: string }[] = [
  { url: "mailto:startomid2020@gmail.com", logo: HiOutlineMail },
  { url: "jkjk", logo: BsLinkedin, className: "text-blue-900" },
  { url: "https://github.com/Maxxfloat/win-commerce", logo: BsGithub },
];

export default socialMediaInfo;
