import { Routes, navRoutes } from "@/utils/_variables";
import React from "react";
import LinkComponent from "../LinkComponent";
import { NavLinkProps } from "@/utils/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const NavLinks: React.FC<NavLinkProps> = ({ className, isFooter }) => {
  const pathname = usePathname();
  return (
    <ul
      className={`${className} text-lg flex ${
        isFooter ? "items-start flex-col" : "items-center flex-row"
      }`}
    >
      <li>
        <Link href="">
          <span>Solutions</span>
        </Link>
      </li>
      <li>
        <Link href={Routes.About.path}>
          <span>About us</span>
        </Link>
      </li>
      <li>
        <Link href="" className="flex items-center gap-1">
          <span>Blog</span>
          <span>
            <GoArrowUpRight />
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
