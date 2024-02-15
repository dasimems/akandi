import React from "react";
import AuthLayout from "./AuthLayout";
import { usePathname } from "next/navigation";
import { Routes } from "@/utils/_variables";

const AuthNavLinks: React.FC<{
  number: number;
  description: string;
  className?: string;
}> = ({ number, description, className }) => {
  const pathname = usePathname();
  const numberFromPathname = pathname
    .split(`${Routes.ApplicationForm.path}`)
    .filter((data) => data.length > 0)
    .map((data) => data.slice(1))[0];
  const activeNumber = parseInt(numberFromPathname || "1");
  return (
    <div
      className={`${className} flex flex-col gap-2 items-start px-5 md:px-10 ${
        number <= activeNumber ? "text-primary" : "text-slate-600"
      }`}
    >
      <span
        className={`w-[2rem] h-[2rem] ${
          number <= activeNumber
            ? "bg-primary text-white"
            : "bg-slate-100 text-slate-700"
        } inline-flex items-center justify-center rounded-full`}
      >
        {number}
      </span>
      <p className="text-xs sm:text-sm">{description}</p>
    </div>
  );
};

const AuthApplicationLayout: React.FC<{
  children: React.ReactNode;
  contentClassName?: string;
}> = ({ children, contentClassName }) => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-24 w-full items-center">
        <div className="w-full  justify-center flex items-stretch">
          <AuthNavLinks
            number={1}
            className="border-r"
            description="Business information"
          />
          <AuthNavLinks
            number={2}
            className="border-r"
            description="Business address"
          />
          <AuthNavLinks number={3} description="Proof of business" />
        </div>
        <div className={`${contentClassName} flex justify-center w-full`}>
          {children}
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthApplicationLayout;
