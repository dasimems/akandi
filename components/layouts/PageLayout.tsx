"use client";
import { Routes, navHeights } from "@/utils/_variables";
import { usePathname } from "next/navigation";
import React from "react";

const PageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();
  return (
    <section
      style={{
        paddingTop:
          pathname === Routes.Home.path ? navHeights.home : navHeights.general
      }}
    >
      {children}
    </section>
  );
};

export default PageLayout;
