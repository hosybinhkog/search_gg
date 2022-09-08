import { NextPage } from "next";
import React from "react";

interface AvatarProps {
  url: string;
  className?: string;
}

const Avatar: NextPage<AvatarProps> = ({ url, className }) => {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer w-10 object-cover hover:scale-105 duration-150 transition transform animate-bounce ${className}`}
      src={url}
      loading="lazy"
      alt="profile pic"
    />
  );
};

export default Avatar;
