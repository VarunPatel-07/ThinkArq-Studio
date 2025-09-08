import { NavbarLinksInterface } from "../interface/interface";

export const NavbarLinks: NavbarLinksInterface[] = [
  { id: "home", label: "Home", href: "/", type: "link", target: "_self", dropDown: [] },
  { id: "about", label: "About", href: "/about", type: "link", target: "_self", dropDown: [] },
  {
    id: "services",
    label: "Services",
    href: "/services",
    type: "link",
    target: "_self",
    dropDown: [
      { id: "services-test", label: "Services Test", href: "/services", type: "link", target: "_self", dropDown: [] },
      {
        id: "services-test-1",
        label: "Services Test One",
        href: "/services",
        type: "link",
        target: "_self",
        dropDown: [
          {
            id: "services-test",
            label: "Services Test",
            href: "/services",
            type: "link",
            target: "_self",
            dropDown: [],
          },
          {
            id: "services-test-1",
            label: "Services Test One",
            href: "/services",
            type: "link",
            target: "_self",
            dropDown: [],
          },
        ],
      },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact", type: "link", target: "_self", dropDown: [] },
];
