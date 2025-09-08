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
  href: string;
  type: "button" | "link";
  target?: "_blank" | "_self";
  lottieIcon: string;
}
