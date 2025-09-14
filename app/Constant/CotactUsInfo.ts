import { ContactUsInfoInterface } from "../interface/interface";


export const ContactUsSectionInfo: ContactUsInfoInterface[] = [
  {
    id: "phone",
    label: "Phone",
    value: "+91 98765 43210",
    className: "",
    link: "tel:+919876543210", // ✅ no `?` here
  },
  {
    id: "email",
    label: "Email",
    value: "contact@example.com",
    className: "",
    link: "mailto:contact@example.com", // ✅ can add for email too
  },
  {
    id: "address",
    label: "Address",
    value: "123, MG Road, Bengaluru, Karnataka, India",
    className: "flex-col items-start justify-start",
  },
];
