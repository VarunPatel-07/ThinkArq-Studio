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
  services_title: string;
  services_description: string | string[];
  how_we_work: {
    title: string;
    description: string;
  }[];
  how_we_work_title: string;
  how_we_work_description: string;
  shadow_title: string;
  other_service_title: string;
  other_service_description: string;
  lets_connect: {
    title: string;
    description: string;
    sub_title: string;
    cta_button: string;
    lottieIcon: string;
  };
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
  target?: "_self" | "_blank";
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

export interface PrivacyPolicyDataInterface {
  id: number;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface OwnerInfoDataInterface {
  id: number;
  label: string;
  value: string;
}

export interface countryObject {
  country_flag: string;
  country_name: string;
  country_code: string;
  country_number_code: string;
}
