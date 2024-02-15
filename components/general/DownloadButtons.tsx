import React from "react";
import Button from "../general/Button";
import { Apple } from "iconsax-react";
import { BiLogoPlayStore } from "react-icons/bi";

const DownloadButtons: React.FC<{
  size?: "small" | "large" | "medium";
  className?: string;
}> = ({ size, className }) => {
  let firstTextClassName = "text-sm";
  let secondTextClassName = "text-3xl";
  let iconSize = 45;

  switch (size) {
    case "small":
      firstTextClassName = "text-xs";
      secondTextClassName = "text-base";
      iconSize = 30;
      break;
    case "medium":
      firstTextClassName = "text-xs";
      secondTextClassName = "text-xl";
      iconSize = 38;
      break;
    default:
      break;
  }
  return (
    <div className={`${className} flex items-center flex-wrap gap-6`}>
      <Button type="black" className="flex items-center gap-3">
        <span>
          <Apple color="white" size={iconSize} />
        </span>
        <span className="flex flex-col items-start">
          <span className={firstTextClassName}>Download on the</span>
          <span className={secondTextClassName}>App Store</span>
        </span>
      </Button>
      <Button type="black" className="flex items-center gap-3">
        <span>
          <BiLogoPlayStore
            color="white"
            size={iconSize - 10 > 0 ? iconSize - 10 : iconSize}
          />
        </span>
        <span className="flex flex-col items-start">
          <span className={firstTextClassName}>GET IT ON</span>
          <span className={secondTextClassName}>Google Play</span>
        </span>
      </Button>
    </div>
  );
};

export default DownloadButtons;
