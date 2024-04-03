import Image from "next/image";
import { HeroImg } from "@/assets/images";
import Button from "../Button";
import Link from "next/link";
import InputField from "../form/InputField";
import SectionContainer from "@/components/layouts/SectionContainer";
import { siteName } from "@/utils/_variables";

const Hero = () => {
  return (
    <div className="sm:h-[32rem] bg-slate-200 relative">
      <Image
        src={HeroImg}
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
          Large Selection
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl">
          Car, truck, heavy machinery or caravan?
        </p>

        <Button
          type="primary"
          className="shadow-2xl mt-12 font-medium md:text-xl"
        >
          Hundreds of vehicles{" "}
        </Button>
      </SectionContainer>
    </div>
  );
};

export default Hero;
