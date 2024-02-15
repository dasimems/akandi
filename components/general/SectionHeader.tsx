import { SectionHeaderProps } from "@/utils/types";
import React from "react";
import SectionContainer from "../layouts/SectionContainer";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  textOne,
  textTwo,
  activeText = "text-one",
  className
}) => {
  const textClassName = `block self-center relative`;
  const activeClassName = `font-bold uppercase text-xl md:text-3xl relative before:w-[60%] before:left-0 before:h-[0.08rem] before:bg-black before:absolute before:bottom-0`;
  const unActiveClassName = "font-medium text-lg md:text-2xl";
  return (
    <h1
      className={`${className} relative flex w-full m-0 p-0 gap-2 items-center`}
    >
      <span
        className={`${textClassName} ${
          activeText === "text-one"
            ? ` ${activeClassName} `
            : `${unActiveClassName}`
        }`}
      >
        {textOne}
      </span>
      <span
        className={`${textClassName} ${
          activeText === "text-two"
            ? `${activeClassName}`
            : `${unActiveClassName}`
        }`}
      >
        {textTwo}
      </span>
    </h1>
  );
};

export default SectionHeader;
