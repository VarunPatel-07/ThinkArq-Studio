import { OwnerInfoDataInterface, PrivacyPolicyDataInterface } from "../interface/interface";

export const PrivacyPolicyData: PrivacyPolicyDataInterface[] = [
  {
    id: 1,
    title: "Information We Collect",
    description: "We collect personal information that you provide to us directly, such as:",
    bulletPoints: [
      "<strong>Contact Information:</strong> Name, email address, phone number, and company details.",
      "<strong>Service-Related Information:</strong> Data related to the services you request or engage with.",
      "<strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited.",
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description: "We use the collected information for purposes including:",
    bulletPoints: [
      "Providing and improving our services.",
      "Communicating with you regarding your inquiries and requests.",
      "Sending updates, newsletters, or promotional materials (with your consent).",
      "Complying with legal obligations and protecting our rights.",
    ],
  },
  {
    id: 3,
    title: "Data Sharing and Disclosure",
    description:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:",
    bulletPoints: [
      "<strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business, subject to confidentiality agreements.",
      "<strong>Legal Compliance:</strong> When required by law or to protect our rights and safety.",
    ],
  },
  {
    id: 4,
    title: "Data Security",
    description:
      "We implement reasonable technical and organizational measures to safeguard your personal information against unauthorized access, alteration, or destruction. While we strive to protect your data, please be aware that no method of transmission over the internet is 100% secure.",
    bulletPoints: [],
  },
  {
    id: 5,
    title: "Your Rights",
    description:
      "Depending on your location and applicable laws, you may have rights regarding your personal information, including:",
    bulletPoints: [
      "Accessing and correcting your data.",
      "Requesting deletion of your data.",
      "Objecting to or restricting certain data processing activities.",
    ],
  },
  {
    id: 6,
    title: "Cookies and Tracking Technologies",
    description:
      "Our website may use cookies and similar technologies to enhance user experience and analyze site usage. You can control cookie settings through your browser preferences.",
    bulletPoints: [],
  },
  {
    id: 7,
    title: "Third-Party Links",
    description:
      "Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party sites and encourage you to review their privacy policies.",
    bulletPoints: [],
  },
  {
    id: 8,
    title: "Changes to This Privacy Policy",
    description:
      "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.",
    bulletPoints: [],
  },
  {
    id: 9,
    title: "Contact Us",
    description:
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:",
    bulletPoints: [],
  },
];

export const OwnerInformation: OwnerInfoDataInterface[] = [
  {
    id: 1,
    label: "Email",
    value: "contact.thinkarq@gmail.com",
  },
  {
    id: 2,
    label: "Phone",
    value: "",
  },
  {
    id: 3,
    label: "Address",
    value: "",
  },
];
