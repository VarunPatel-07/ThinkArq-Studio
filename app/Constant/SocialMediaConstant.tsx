import { SocialMediaLinksInterface } from "../interface/interface";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";




export const SocialMediaLinksArray: SocialMediaLinksInterface[] = [
  {
    label: "facebook",
    value: "Facebook",
    icon: <FaFacebookF className="" />,
    link: "",
    target: "_blank",
  },
  {
    label: "insta",
    value: "Instagram",
    icon: <FaInstagram className="" />,
    link: "",
    target: "_blank",
  },
  {
    label: "linkedin",
    value: "LinkedIn",
    icon: <FaLinkedin className="" />,
    link: "",
    target: "_blank",
  },
];
