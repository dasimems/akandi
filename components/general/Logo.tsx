import { LogoTransparentWhite } from "@/assets/images";
import { Routes, siteName, siteShortName } from "@/utils/_variables";
import { LogoProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC<LogoProps> = ({
  removeText,
  removeImage,
  className,
  height = 70,
  width = 120,
  textClassName
}) => {
  return (
    <Link
      href={Routes.Home.path}
      className={`${className} flex items-center gap-1`}
    >
      {!removeImage && (
        <Image
          src={LogoTransparentWhite}
          alt={siteName}
          width={width}
          height={height}
          className="object-contain object-left"
        />
      )}
      {!removeText && (
        <h1 className={`${textClassName} font-bold md:text-lg`}>More</h1>
      )}
    </Link>
  );
};

export default Logo;
