"use client";
import SectionContainer from "@/components/layouts/SectionContainer";
import {
  allSocials,
  otherServiceRoutes,
  ourServiceRoutes,
  aboutRoutes,
  policiesRoutes,
  siteName
} from "@/utils/_variables";
import React from "react";
import Link from "next/link";

const FooterContent: React.FC<{
  title?: string;
  content: { label: string; path: string }[];
}> = ({ title, content }) => {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-6">
      <h1 className="font-bold text-lg">{title}</h1>
      <ul className="flex flex-col gap-6 text-slate-600 text-md font-medium">
        {content &&
          Array.isArray(content) &&
          content.map(({ path, label }, index) => (
            <li key={index}>
              <Link
                className="inline-flex hover:translate-x-2 duration-300"
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const date = new Date();

  return (
    <SectionContainer className="bg-primary-30 py-10 gap-10 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <Link
          href=""
          className="flex justify-center bg-primary rounded-md w-full p-4"
        >
          <p className="text-white text-lg font-bold">Cars on auction</p>
        </Link>
        <Link
          href=""
          className="flex justify-center bg-primary rounded-md w-full p-4"
        >
          <p className="text-white text-lg font-bold">Cars for fixed price </p>
        </Link>
        <Link
          href=""
          className=" border border-primary flex justify-center rounded-md w-full p-4"
        >
          <p className="text-primary text-lg font-bold">Sell car</p>
        </Link>
      </div>
      <div className="flex items-start gap-6 justify-between flex-wrap pb-10">
        <FooterContent title="Other services" content={otherServiceRoutes} />
        <FooterContent title="Our services" content={ourServiceRoutes} />
        <FooterContent title="About Akandi online" content={aboutRoutes} />
        <FooterContent
          title="Policies and condition"
          content={policiesRoutes}
        />
      </div>
      <div className="flex justify-end w-full pt-4 border-t">
        <ul className="flex items-center flex-wrap gap-6">
          {allSocials.map(({ label, link }, index) => (
            <li key={index}>
              <Link
                className="hover:underline hover:text-primary"
                key={index}
                href={link}
                target="_blank"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 items-center justify-center  w-full pt-4">
        <p className="text-center text-lg font-light text-slate-800 italic">
          {" "}
          copyright &copy; {date.getFullYear()} Akandi online.com. All right
          reserved.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Footer;
