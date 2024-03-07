"use client";
import { ButtonProps } from "@/utils/types";
import { useRouter } from "next/router";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  type,
  buttonType,
  className,
  children,
  action = () => {},
  rounded,
  link,
  ...props
}) => {
  const { push } = useRouter();
  let typeClassName = "bg-slate-200";
  switch (type) {
    case "primary":
      typeClassName = "bg-primary text-white  ring-5 ring-primary-900 shadow-md";
      break;
    case "secondary":
      typeClassName = "bg-secondary text-white";
      break;
    case "black":
      typeClassName = "bg-black text-white";
      break;
    case "white":
      typeClassName = "bg-white text-primary";
      break;
    case "default":
      typeClassName = "bg-slate-200";
      break;
    case "transparent":
      typeClassName = "bg-transparent border-primary";
      break;
    default:
      break;
  }
  return (
    <button
      {...props}
      type={buttonType}
      onClick={() => {
        if (link) {
          push(link);
        } else if (action) {
          action();
        }
      }}
      className={`${className} ${typeClassName} py-3 px-6 ${
        rounded ? "rounded-full" : "rounded-md"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
