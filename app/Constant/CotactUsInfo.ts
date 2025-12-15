import { ContactUsInfoInterface } from "../interface/interface";

export const ContactUsSectionInfo: ContactUsInfoInterface[] = [
  {
    id: "phone",
    label: "Phone",
    value: "+91 98765 43210",
    className: "",
    link: "tel:+919876543210",
  },
  {
    id: "email",
    label: "Email",
    value: "contact.thinkarq@gmail.com",
    className: "",
    link: "mailto:contact.thinkarq@gmail.com",
  },
  {
    id: "address",
    label: "Address",
    value: "123, MG Road, Bengaluru, Karnataka, India",
    className: "lg:flex-col items-start justify-start",
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "123, MG Road, Bengaluru, Karnataka, India"
    )}`,
    target: "_blank",
  },
];
