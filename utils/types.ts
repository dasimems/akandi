import { StaticImageData } from "next/image";
import { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { IconBaseProps } from "react-icons";
import CheckBox from '../components/general/form/CheckBox';
import Label from '../components/general/form/Label';
import { option } from '@/utils/_variables';
import Accordion from '../components/general/accordion';

export type LinkType = "primary" | "secondary" | "default";
export type ButtonType =
  | "primary"
  | "secondary"
  | "default"
  | "transparent" | "white" |
  "black";

export type IconProps = {
  size?: number;
  active?: boolean;
  color?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export type IconType = React.FC<IconProps>;

export type LinkComponentPropsBase = {
  href: string;
  type?: LinkType;
  showIcon?: boolean;
  Icon?: IconType;
  className?: string;
  label: string;
  activeClassName?: string;
  iconSize?: number;
  iconColor?: string;
} & LinkProps;

type LinkComponentPropsWithActiveClassName = LinkComponentPropsBase & {
  active: boolean;
  activeClassName: string;
  unActiveClassName: string;
};

type LinkComponentPropsWithoutActiveClassName = LinkComponentPropsBase & {
  active?: boolean;
  activeClassName?: string;
  unActiveClassName?: string;
};

export type LinkComponentProps =
  | LinkComponentPropsWithActiveClassName
  | LinkComponentPropsWithoutActiveClassName;

export type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  innerContent?: boolean;
} & HTMLProps<HTMLDivElement>;

export type ButtonProps = {
  type?: ButtonType;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  action?: () => void;
  rounded?:boolean;
  link?: string;
} & HTMLProps<HTMLButtonElement>;

export type SelectProps={
  value:string,
  onChange:(newValue:string)=>void,
  placeholder:string,
  options:string[]
};


export type RouteType = {
  path: string;
  Icon: undefined | IconType;
  showIn:string[];
  label: string;
  type: "link" | "hash";
  activeIn: string[];
};

export type NavLinkProps = {
  showIcon?: boolean;
  className?: string;
  linkClassName?: string;
  showActive?: boolean;
  isFooter?: boolean;
};

export type WhatWeDoCardProps = {
  Icon: IconType;
  title: string;
  description: string;
  image: StaticImageData[] | StaticImageData;
};

export type SectionHeaderProps = {
  textOne: string;
  textTwo: string;
  activeText?: "text-one" | "text-two";
  className?: string;
};

export type LogoProps = {
  removeText?: boolean;
  removeImage?: boolean;
  className?: string;
  textClassName?: string;
  height?: number,
  width?: number,
};

export type ProjectProps = {
  title: string;
  description: string;
  id: string;
  image: StaticImageData;
};
export type TestimonialCardProps = {
  testimonial: string;
};
export type ProjectComponentProps = {
  className?: string;
} & HTMLProps<HTMLDivElement>;

export type ProjectCardListProps = {
  inverted?: boolean;
  projects: [ProjectProps, ProjectProps] | [ProjectProps];
} & HTMLProps<HTMLDivElement>;
export type AboutProps = {
  removeAds?: boolean;
};

export type SocialMedia = {
  label: string;
  link: string;
  Icon: IconType | React.FC<IconBaseProps> | undefined;
};

export type SocialMediaList = SocialMedia[];

export type LabelProps = {
  children: React.ReactNode;
} & HTMLProps<HTMLLabelElement>;

export type InputElementProps = {
  label?: React.ReactNode;
  inputClassName?: string;
  inputParentClassName?: string;
  formClassName?: string;
  labelClassName?: string;
  error?: string;
} & HTMLProps<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type InputFieldProps = {
  RightIcon?: IconType;
  buttonTitle?: string;
  LeftIcon?: IconType;
  rightButtonTitle?: string;
  leftButtonClassName?: string;
  rightButtonClassName?: string;
  leftButtonTitle?: string;
  rightIconAction?: () => void;
  leftIconAction?: () => void;
  iconProps?: IconProps;
} & InputElementProps;

export type SelectOptionType = {
  value: string;
  label: string;
}

export type SelectBoxType = {
  options?: SelectOptionType[];
  emptyOptionLabel?: string;
  hideEmptyOption?: boolean

} & InputElementProps


