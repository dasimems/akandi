"use client";
import SectionContainer from "@/components/layouts/SectionContainer";
import { Routes, navHeights } from "@/utils/_variables";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";
import Logo from "../Logo";
import Button from "../Button";
import Link from "next/link";
import { Menu, User } from "iconsax-react";
import { useRouter } from "next/router";

const Nav = () => {
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const pathname = usePathname();
  const { push } = useRouter();

  const changeHeader = useCallback(() => {
    const scrollHeight =
      pathname === Routes.Home.path ? navHeights.home : navHeights.general;

    if (window.scrollY >= scrollHeight + 20) {
      setIsFixed(true);
      setHasShadow(true);
    } else {
      setIsFixed(false);
      setHasShadow(false);
    }
  }, [pathname]);

  useEffect(() => {
    changeHeader();
  }, [pathname, changeHeader]);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", changeHeader);
    }
  }, [changeHeader]);
  return (
    <>
      <div className="flex justify-center py-3 bg-black text-center text-white text-xs px-10">
        <h1>
          🎉 More 360 has rebranded to serve you better.{" "}
          <Link href="" className="underline">
            Learn More
          </Link>
        </h1>
      </div>
      <SectionContainer
        className={`${
          hasShadow ? "shadow-lg" : ""
        } border-b h-[5rem]  items-center bg-primary ${
          isFixed ? "fixed top-0" : "absolute top-[2.5rem]"
        } flex justify-between duration-300 w-full z-[9999]`}
      >
        <Logo removeText />
        {/* <NavLinks
          showActive
          className="gap-14 hidden min-[1000px]:flex"
          linkClassName="font-medium"
        /> */}
        <div className=" min-[1000px]:flex hidden items-center gap-6 text-sm">
          <Button rounded link={Routes.Login.path}>
            Login
          </Button>
          <Button rounded link={Routes.Login.path} type="primary">
            Open Account
          </Button>
        </div>

        <button
          onClick={() => {
            push(Routes.Login.path);
          }}
          title="Nav button"
          type="button"
          className="min-[1000px]:hidden"
        >
          <User variant="Bold" />
        </button>
      </SectionContainer>
    </>
  );
};

export default Nav;
