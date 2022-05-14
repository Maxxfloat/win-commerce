// Social Media Section
import type { IconType } from "react-icons";

import React, { FC } from "react";

const SocialMediaContact: FC<{
  url: string;
  logo: IconType;
  className?: string;
}> = ({ url, logo: Logo, className }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${className} 
    text-4xl  `}
    >
      <Logo />
    </a>
  );
};

export default SocialMediaContact;
