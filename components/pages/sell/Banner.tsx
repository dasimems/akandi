import Image from "next/image";
import { ExportHeroImage, HeroImg, SellHeroImage } from "@/assets/images";
import Button from "../../general/Button";
import Link from "next/link";
import InputField from "../../general/form/InputField";
import SectionContainer from "@/components/layouts/SectionContainer";
import { siteName } from "@/utils/_variables";

const Banner = () => {
  return (
    <div className="sm:h-[32rem] bg-slate-200 relative">
      <Image
        src={SellHeroImage}
        alt={siteName}
        fill
        priority
        className="object-cover object-center"
      />
      <SectionContainer
        parentClassName="h-full"
        className=" flex flex-col py-20 relative items-center justify-center gap-2 text-center h-full w-full bg-[rgba(0,0,0,.3)] text-white"
      >
        <h1 className="font-extrabold text-2xl sm:text-4xl md:text-6xl">
          We have sold 300 000 cars
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl">
          Sell to highest bidder
        </p>
      </SectionContainer>
    </div>
  );
};

export default Banner;
