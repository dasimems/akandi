import { LinkComponentProps } from "@/utils/types";
import Link from "next/link";
import React from "react";

const LinkComponent: React.FC<LinkComp1onentProps> = ({
  href,
  type,
  showIcon,
  Icon,
  className,
  label,
  activeClassName,
  unActiveClassName,
  active,
  iconColor,
  iconSize = 23,
  ...props
}) => {
  let typeClassName = "text-black";
  let afterClassName = "after:bg-black";
  let typeActiveClassName = "";
  let typeUnActiveClassName = "";
  switch (type) {
    case "default":
      typeClassName = "text-black";
      afterClassName = "after:bg-black";
      break;
    case "primary":
      typeClassName = "text-primary";
      afterClassName = "after:bg-primary";
      break;
    case "secondary":
      typeClassName = "text-secondary-lighter";
      afterClassName = "after:bg-secondary-lighter";
      break;

    default:
      break;
  }
  return (
    <Link
      {...props}
      href={href}
      className={`${className} ${typeClassName} ${
        active
          ? activeClassName || ` ${typeActiveClassName}`
          : unActiveClassName || `${typeUnActiveClassName}`
      } inline-flex items-end gap-2 group/link`}
    >
      {Icon && (showIcon || active) && (
        <span>
          <Icon size={iconSize} color={iconColor} active={active} />
        </span>
      )}
      <span
        className={`${afterClassName} ${
          active ? `after:w-full` : "group-hover/link:after:w-full"
        } relative after:absolute after:duration-300 after:w-0 after:h-[0.13rem] after: after:left-0 after:-bottom-[0.15rem]`}
      >
        {label}
      </span>
    </Link>
  );
};

export default LinkComponent;
