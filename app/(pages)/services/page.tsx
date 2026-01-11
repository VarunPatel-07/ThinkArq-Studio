import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import OurServices from "@/app/Components/OurServices";
import ThinkArqContactForm from "@/app/Components/ThinkArqContactForm";
import { AiMlServicesDataArray } from "@/app/Constant/Services/Ai-Ml-Services";
import { DataEngineeringServiceArray } from "@/app/Constant/Services/DataEngineeringService";
import { DigitalMarketingServices } from "@/app/Constant/Services/DigitalMarketingServices";
import { Metadata } from "next";
import { Suspense, useMemo } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Our Services | Think Arq - Think Build Disrupt",
  description:
    "Discover all Think Arq services including web development, UI/UX design, mobile apps, branding, and scalable digital solutions.",
  openGraph: {
    title: "Our Services | Think Arq - Think Build Disrupt",
    description:
      "Discover all Think Arq services including web development, UI/UX design, mobile apps, branding, and scalable digital solutions.",
    url: `https://thinkarq.com/services`,
    images: "/meta-images/think-arq.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Think Arq - Think Build Disrupt",
    description:
      "Discover all Think Arq services including web development, UI/UX design, mobile apps, branding, and scalable digital solutions.",
    images: "/meta-images/think-arq.jpg",
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};
function page() {
  const ServicesArrayOptions = useMemo(() => {
    return [...DataEngineeringServiceArray, ...DigitalMarketingServices, ...AiMlServicesDataArray];
  }, [DataEngineeringServiceArray, DigitalMarketingServices, AiMlServicesDataArray]);
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-25 xl:pt-35">
        <div className="think-arq-container h-full">
          <OurServices
            ServicesData={ServicesArrayOptions}
            description="At Think Arq, we craft meaningful digital experiences through UI/UX design, web and software development, AI-powered systems, data intelligence, and growth-driven marketing — building smarter brands for the connected world."
          />
        </div>
      </div>

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
  );
}

export default page;
