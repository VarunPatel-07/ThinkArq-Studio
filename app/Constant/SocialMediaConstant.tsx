import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SocialMediaLinksInterface } from "../interface/interface";

export const SocialMediaLinksArray: SocialMediaLinksInterface[] = [
  {
    label: "twitter",
    value: "Twitter",
    icon: <FaTwitter className="" aria-hidden="true" />,
    link: "https://x.com/Think_Arq_",
    target: "_blank",
  },
  {
    label: "insta",
    value: "Instagram",
    icon: <FaInstagram className="" aria-hidden="true" />,
    link: "https://www.instagram.com/think_arq_/",
    target: "_blank",
  },
  {
    label: "linkedin",
    value: "LinkedIn",
    icon: <FaLinkedin className="" aria-hidden="true" />,
    link: "https://www.linkedin.com/company/think-arq/",
    target: "_blank",
  },
];
