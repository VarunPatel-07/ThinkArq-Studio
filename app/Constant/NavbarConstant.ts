import { NavbarLinksInterface } from "../interface/interface";
import { HirePageArray } from "./HirePagesArray";
import { DigitalMarketingServices } from "./Services/DigitalMarketingServices";

import { AiMlServicesDataArray } from "./Services/Ai-Ml-Services";
import { DataEngineeringServiceArray } from "./Services/DataEngineeringService";

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
      {
        id: "digital-marketing-services",
        label: "Digital Marketing Services",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [
          ...(DigitalMarketingServices.map((item) => ({
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
        id: "data",
        label: "Data",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [
          ...(DataEngineeringServiceArray.map((item) => ({
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
        id: "ai-ml",
        label: "AI/ML",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [
          ...(AiMlServicesDataArray.map((item) => ({
            id: item.id,
            label: item.text,
            href: item.href,
            type: "link",
            target: "_self",
            dropDown: [],
          })) as NavbarLinksInterface[]),
        ],
      },
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
