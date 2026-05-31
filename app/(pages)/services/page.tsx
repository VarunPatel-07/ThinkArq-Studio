import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import OurServices from "@/app/Components/OurServices";
import { AiMlServicesDataArray } from "@/app/Constant/Services/Ai-Ml-Services";
import { DataEngineeringServiceArray } from "@/app/Constant/Services/DataEngineeringService";
import { DigitalMarketingServices } from "@/app/Constant/Services/DigitalMarketingServices";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.thinkarq.com";

const AllServices = [...DigitalMarketingServices, ...DataEngineeringServiceArray, ...AiMlServicesDataArray];

export const metadata: Metadata = {
  title: "Our Services | Think Arq - Think Build Disrupt",
  description:
    "Explore Think Arq's full range of services — AI/ML development, data engineering, digital marketing, UI/UX design, and custom software solutions for businesses in USA & Europe.",
  openGraph: {
    title: "Our Services | Think Arq - Think Build Disrupt",
    description:
      "Explore Think Arq's full range of services — AI/ML development, data engineering, digital marketing, UI/UX design, and custom software solutions.",
    url: `${BASE_URL}/services`,
    images: "/meta-images/think-arq.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Think Arq",
    description:
      "Explore Think Arq's full range of services — AI/ML, data engineering, digital marketing, and custom software development.",
    images: "/meta-images/think-arq.jpg",
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

// JSON-LD structured data for services
function ServicesJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Think Arq Services",
    description: "Professional software development, AI/ML, data engineering, and digital marketing services.",
    url: `${BASE_URL}/services`,
    numberOfItems: AllServices.length,
    itemListElement: AllServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.services_title || service.text,
        description: Array.isArray(service.services_description)
          ? service.services_description[0]
          : service.services_description,
        url: `${BASE_URL}${service.href}`,
        provider: {
          "@type": "Organization",
          name: "Think Arq",
          url: BASE_URL,
        },
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function ServicesPage() {
  return (
    <div className="w-full h-full">
      <ServicesJsonLd />
      <Navbar />
      <div className="pt-[90px]">
        <div className="py-10 lg:py-16 xl:py-24">
          <div className="think-arq-container">
            <OurServices
              title="Our Services"
              description="At Think Arq, we craft meaningful digital experiences through UI/UX design, web and software development, AI-powered systems, data intelligence, and growth-driven marketing — building smarter brands for the connected world."
              ServicesData={AllServices}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
