import { CarGuideImage } from "@/assets/images";
import Button from "@/components/general/Button";
import SectionContainer from "@/components/layouts/SectionContainer";
import { Routes, siteName } from "@/utils/_variables";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CarGuide = () => {
  const { push } = useRouter();
  return (
    <>
      <SectionContainer className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-10 py-20">
        <div className="flex items-center flex-col gap-6 text-center w-full md:max-w-[20rem]">
          <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
            Find the car for your needs
          </h1>
          <p>
            Ask some simple questions and find the car that suits your needs.
          </p>

          <Button
            action={() => {
              push(`${Routes.CarGuide.path}/start`);
            }}
            type="primary"
            className="w-full"
          >
            Get started
          </Button>
        </div>

        <div className="w-[20rem] h-[20rem] bg-slate-200 rounded-full overflow-hidden relative">
          <Image
            src={CarGuideImage}
            alt={`${siteName} car guide`}
            className="object-cover object-center"
            fill
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default CarGuide;
