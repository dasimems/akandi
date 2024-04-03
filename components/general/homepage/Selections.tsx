import SectionContainer from "@/components/layouts/SectionContainer";
import { allSelections } from "@/utils/_variables";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectionCard: React.FC<{ image: any; label: string; value: string }> = ({
  image,
  label,
  value
}) => {
  return (
    <Link href="" className="flex items-center flex-col gap-2">
      <div className="w-[8rem] h-[8rem] bg-slate-200 flex items-center justify-center rounded-full">
        <Image
          alt={label}
          src={image}
          className="w-[6rem] h-[6rem] object-contain object-center"
        />
      </div>
      <p className="text-lg md:text-xl text-center">{label}</p>
    </Link>
  );
};

const Selections = () => {
  return (
    <SectionContainer className="flex items-center justify-center gap-12 py-10 md:py-20 flex-col">
      <h1 className="text-center text-lg md:text-xl font-medium">
        See our selections
      </h1>

      <div className="flex items-center flex-wrap justify-center gap-10 md:gap-20">
        {allSelections.map((data) => (
          <SelectionCard {...data} key={data.value} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Selections;
