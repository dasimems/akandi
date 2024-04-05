import SectionContainer from "@/components/layouts/SectionContainer";
import {
  allAboutContent,
  allWhyUsLink,
  siteName,
  Socials
} from "@/utils/_variables";
import { Call } from "iconsax-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button from "../../general/Button";
import Image from "next/image";

const WhyUs = () => {
  return (
    <SectionContainer className="py-10 md:py-20 bg-slate-200 flex flex-col gap-10 ">
      <div className="bg-white p-8 rounded-md flex flex-col gap-4">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          We make it easier to buy and sell used vehicles
        </h1>

        <p className="text-slate-600 italic">
          More than 26 000 vehicles and machines are sold annually through our
          marketplace {siteName}. We strive to make the vehicle transaction as
          simple as possible - regardless if you are selling or buying through
          us.
        </p>
        <p className="mt-5">Welcome to Akandi</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {allWhyUsLink.map(({ label, value }) => (
            <Link
              href=""
              className="py-5 px-10 border rounded-md text-center text-lg"
              key={value}
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-col md:justify-center md:flex-row gap-10 p-8 bg-white rounded-md">
        <div className="flex flex-col gap-1 text-center items-center">
          <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
            Give us a call!
          </h1>
          <p className="text-slate-600">
            We&apos;re happy to help with your purchase
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href=""
            className="py-5 px-10 md:px-16 inline-flex items-center gap-1 text-[#007AB8] border-2 font-medium justify-center border-[#007AB8]"
          >
            <span>
              <Call />
            </span>
            <span>{Socials.Call.label}</span>
          </Link>
          <Link
            href=""
            className="py-5 px-10 md:px-16 inline-flex items-center gap-1 text-[#007AB8] border-2 font-medium justify-center border-[#007AB8]"
          >
            <span>
              <Mail />
            </span>
            <span>customercare@akandi.com</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allAboutContent.map(({ title, description, linkText, image }) => (
          <div className="bg-white rounded-md overflow-hidden" key={title}>
            <div className="w-full h-[15rem] bg-slate-100 relative">
              <Image
                src={image}
                alt={title}
                className="object-cover object-center"
                fill
              />
            </div>
            <div className="p-8 flex flex-col gap-5">
              <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
                {title}
              </h1>
              <p className="">{description}</p>

              <Button type="primary" className="mt-3">
                {linkText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-md flex flex-col gap-4">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          Car auctions - buy your next car at Akandi
        </h1>

        <p className="text-slate-600">
          Akandi is biggest marketplace for used cars. Every year, we sell more
          than 26,000 cars, in hundreds of models and from more than 60 car
          brands. With us, you can find the car that suits your needs!
        </p>
      </div>
      <div className="bg-white p-8 rounded-md flex flex-col gap-4">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          Sell a company car through Akandi
        </h1>

        <p className="text-slate-600">
          Do you have a company car you want to sell? We offer our services to
          private individuals as well as companies.{" "}
          <Link href="" className="text-[#007AB8]">
            Contact us
          </Link>{" "}
          to know more!
        </p>
      </div>
    </SectionContainer>
  );
};

export default WhyUs;
