import SectionContainer from "@/components/layouts/SectionContainer";
import { allWorthKnowing } from "@/utils/_variables";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const WorthKnowingCard: React.FC<{
  title: string;
  desc: string;
  link: string;
  img: StaticImageData;
}> = ({ title, desc, link, img }) => {
  return (
    <Link
      href=""
      className="w-[17rem] h-[auto] bg-white rounded-lg overflow-hidden hover:shadow-2xl"
    >
      <div className="w-full h-[8rem] bg-slate-200 relative">
        <Image
          src={img}
          className="object-cover object-center"
          fill
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-1 p-5">
        <h1 className="font-medium">{title}</h1>
        <p className="uppercase text-xs text-slate-600">{desc}</p>
      </div>
    </Link>
  );
};

const WorthKnowing = () => {
  return (
    <SectionContainer className="py-20 bg-slate-200 flex flex-col gap-10">
      <h1 className="text-center text-lg md:text-xl font-medium">
        Worth knowing
      </h1>
      <div className="flex items-stretch gap-10 justify-center flex-wrap">
        {allWorthKnowing.map((data) => (
          <WorthKnowingCard {...data} key={data.title} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WorthKnowing;
