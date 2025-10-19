import { ReactElement, SetStateAction } from "react";

export interface NavbarLinksInterface {
  id: string;
  label: string;
  href: string;
  type: "button" | "link";
  dropDown: NavbarLinksInterface[];
  target?: "_blank" | "_self";
}

export interface RenderLinkDropDownInterface {
  data: NavbarLinksInterface;
  isParentOpen?: boolean;
  className?: string;
}

export interface ServicesArrayInterface {
  id: string;
  label: string[];
  text: string;
  href: string;
  type: "button" | "link";
  target?: "_blank" | "_self";
  lottieIcon: string;
}

export interface WorkingProcessArrayInterface {
  id: number;
  question: string;
  answer: string;
}

export interface SearchDropProps {
  name?: string;
  className?: string;
  label?: string;
  isRequiredField?: boolean;
  selectedValue?: string | string[];
  setSelectedValue?: React.Dispatch<SetStateAction<string>>;
  onSelectValBtn?: (data: string | object, index?: number) => void;
  placeHolderName?: string;
  options: Array<string | object>;
  searchKey: string;
  position: "bottom" | "top";
  emptyDataMessage: string;
  loading?: boolean;
  showSearchBar?: boolean;
  showError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  type?: "select" | "multi-select";
}

export interface SocialMediaLinksInterface {
  label: string;
  value: string;
  icon: ReactElement;
  link: string;
  target: "_blank" | "_self";
}

export interface ContactUsInfoInterface {
  id: string;
  label: string;
  value: string;
  className: string;
  link?: string;
}

export interface OurImpactInNumberInterface {
  label: string;
  value: string;
  description: string;
}

export interface OurCoreValueInterface {
  id: number;
  title: string;
  description: string;
  lottieIcon?: string;
}
