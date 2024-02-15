"use client";
import SectionContainer from "@/components/layouts/SectionContainer";
import {
  allSocials,
  companyRoutes,
  contactRoutes,
  developerRoutes,
  legalFooterRoutes,
  resourceRoutes,
  siteName,
  supportRoutes
} from "@/utils/_variables";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import DownloadButtons from "../DownloadButtons";

const FooterContent: React.FC<{
  title?: string;
  content: { label: string; path: string }[];
}> = ({ title, content }) => {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-6">
      <h1 className="font-bold">{title}</h1>
      <ul className="flex flex-col gap-6 text-slate-600">
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
      <div className="flex items-start gap-6 justify-between flex-wrap pb-20">
        <FooterContent title="Company" content={companyRoutes} />
        <FooterContent title="Developers" content={developerRoutes} />
        <FooterContent title="Support" content={supportRoutes} />
        <FooterContent title="Resources" content={resourceRoutes} />
        <FooterContent title="Contact" content={contactRoutes} />
      </div>
      <div className="flex items-center flex-wrap gap-5 justify-center min-[499px]:justify-between w-full pt-10 border-t">
        <div className="flex items-center gap-4">
          <div className="w-[2rem] h-[2rem] flex items-stretch rounded-full overflow-hidden bg-white">
            <div className="w-[33%] bg-green-800"></div>
            <div className="flex-1"></div>
            <div className="w-[33%] bg-green-800"></div>
          </div>
          <p>Nigeria</p>
        </div>

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
      <div className="flex flex-wrap gap-5 items-center justify-center min-[790px]:justify-between w-full pt-10 border-t">
        <p>{date.getFullYear()} More360 Technologies. All right reserved.</p>

        <ul className="flex items-center flex-wrap gap-6">
          {legalFooterRoutes.map(({ path, label }, index) => (
            <li key={index}>
              <Link className="hover:underline hover:text-primary" href={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center min-[790px]:justify-between">
        <DownloadButtons size="small" />
      </div>
    </SectionContainer>
  );
};

export default Footer;
