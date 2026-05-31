import Navbar from "@/app/Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Suspense } from "react";
import { DataEngineeringServiceArray } from "./Constant/Services/DataEngineeringService";
import { DigitalMarketingServices } from "./Constant/Services/DigitalMarketingServices";
import { AiMlServicesDataArray } from "./Constant/Services/Ai-Ml-Services";

// Lazy load below-fold components for better initial load performance
const OurServices = dynamic(() => import("./Components/OurServices"));
const GetProposalCard = dynamic(() => import("./Components/GetProposalCard"));
const OurWorkingProcess = dynamic(() => import("./Components/OurWorkingProcess"));
const OurTeamIntro = dynamic(() => import("./Components/OurTeamIntro"));
const ThinkArqContactForm = dynamic(() => import("./Components/ThinkArqContactForm"));
const Footer = dynamic(() => import("./Components/Footer"));
export const metadata: Metadata = {
  title: "Think Arq | AI Development, Data Engineering & Digital Marketing | USA & Europe",
  description:
    "Think Arq delivers AI/ML development, custom software, data engineering, UI/UX design, and growth-focused digital marketing for businesses in the USA & Europe. Think. Build. Disrupt.",
  alternates: {
    canonical: "https://www.thinkarq.com/",
  },
  openGraph: {
    title: "Think Arq | AI Development, Data Engineering & Digital Marketing | USA & Europe",
    description:
      "Think Arq delivers AI/ML development, custom software, data engineering, UI/UX design, and digital marketing for businesses in the USA & Europe.",
    url: "https://www.thinkarq.com/",
    siteName: "Think Arq",
    images: [
      {
        url: "/meta-images/think-arq.jpg",
        width: 1200,
        height: 630,
        alt: "Think Arq — AI Development, Data Engineering & Digital Marketing",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think Arq | AI Development, Data Engineering & Digital Marketing",
    description:
      "Think Arq delivers AI/ML development, custom software, data engineering, and digital marketing for businesses in the USA & Europe.",
    images: ["/meta-images/think-arq.jpg"],
  },
};

const ServicesArrayOptions = [...DataEngineeringServiceArray, ...DigitalMarketingServices, ...AiMlServicesDataArray];

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <Navbar />
        <div className="pt-[90px] w-full h-full xl:h-screen">
          <div className="w-full h-full overflow-hidden">
            <HeroSection />
          </div>
        </div>
        <div className="pt-10 lg:pt-12 xl:pt-24">
          <div className="think-arq-container h-full">
            <OurServices
              ServicesData={ServicesArrayOptions}
              showPreviewOnly={true}
              description="At Think Arq, we craft meaningful digital experiences through UI/UX design, web and software development, AI-powered systems, data intelligence, and growth-driven marketing — building smarter brands for the connected world."
            />
          </div>
        </div>
        <div className="py-10 lg:py-12 xl:py-24">
          <div className="think-arq-container">
            <GetProposalCard />
          </div>
        </div>
        <div className="py-10 lg:py-12 xl:py-24">
          <div className="think-arq-container">
            <OurWorkingProcess />
          </div>
        </div>

        <div className="py-10 lg:py-12 xl:py-24">
          <div className="think-arq-container">
            <OurTeamIntro />
          </div>
        </div>
        {/* <div className="py-10 lg:py-12 xl:py-24 bg-[#F3F3F3]">
          <Testimonials />
        </div> */}
        <div className="pt-10 lg:pt-12 xl:pt-24">
          <div className="think-arq-container">
            <Suspense>
              <ThinkArqContactForm />
            </Suspense>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
