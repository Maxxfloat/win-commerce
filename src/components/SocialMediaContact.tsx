// Social Media Section
import React, { CSSProperties, FC } from "react";
import type { IconType } from "react-icons";

const SocialMediaContact: FC<{
  url: string;
  logo: IconType;
  style?: CSSProperties;
}> = ({ url, logo: Logo, style }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={` text-4xl `}
      style={style}
    >
      <Logo />
    </a>
  );
};

export default SocialMediaContact;
