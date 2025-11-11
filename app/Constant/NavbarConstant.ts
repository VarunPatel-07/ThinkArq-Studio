import { NavbarLinksInterface } from "../interface/interface";
import { HirePageArray } from "./HirePagesArray";
import { ServicesArray } from "./ServicesArray";

export const NavbarLinks: NavbarLinksInterface[] = [
  { id: "home", label: "Home", href: "/", type: "link", target: "_self", dropDown: [] },
  { id: "about", label: "About", href: "/about-us", type: "link", target: "_self", dropDown: [] },
  {
    id: "services",
    label: "Services",
    href: "/services",
    type: "link",
    target: "_self",
    dropDown: [
      ...(ServicesArray.map((item) => ({
        id: item.id,
        label: item.text,
        href: item.href,
        type: "link",
        target: "_self",
        dropDown: [],
      })) as NavbarLinksInterface[]),
    ],
  },
  {
    id: "hire",
    label: "Hire",
    href: "/hire",
    type: "link",
    target: "_self",
    dropDown: [
      ...(HirePageArray.map((item) => ({
        id: item.id,
        label: item.text,
        href: item.href,
        type: "link",
        target: "_self",
        dropDown: [],
      })) as NavbarLinksInterface[]),
    ],
  },
  { id: "contact", label: "Contact", href: "/contact", type: "link", target: "_self", dropDown: [] },
];
