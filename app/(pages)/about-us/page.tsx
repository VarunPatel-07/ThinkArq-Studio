import CommanHeroSection from "@/app/Components/Common/CommanHeroSection";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import OurCoreValue from "@/app/Components/OurCoreValue";
import OurImpact from "@/app/Components/OurImpact";
import OurTeamIntro from "@/app/Components/OurTeamIntro";
import { Metadata } from "next";

const BASE_URL = "https://www.thinkarq.com";

export const metadata: Metadata = {
  title: "About Think Arq | AI & Software Development Company in USA & Europe",
  description:
    "Learn about Think Arq — a technology company delivering AI/ML development, custom software, data engineering, UI/UX design, and digital marketing services across the USA & Europe. Meet our team and discover our vision.",
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
  openGraph: {
    title: "About Think Arq | AI & Software Development Company in USA & Europe",
    description:
      "Think Arq is a technology company delivering AI/ML development, custom software, data engineering, and digital marketing services across the USA & Europe.",
    url: `${BASE_URL}/about-us`,
    siteName: "Think Arq",
    images: [
      {
        url: "/meta-images/think-arq.jpg",
        width: 1200,
        height: 630,
        alt: "About Think Arq — AI & Software Development Company",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Think Arq | AI & Software Development Company",
    description:
      "Think Arq delivers AI/ML development, custom software, data engineering, and digital marketing for businesses in the USA & Europe.",
    images: ["/meta-images/think-arq.jpg"],
  },
};

function page() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[90px]">
        <CommanHeroSection
          heroImage="/Lottie/together-for-success.lottie"
          title="At Think Arq, we architect ideas into reality."
          descriptions="Whether it’s a sleek web app, a smart AI solution, or a bold marketing campaign — we design, develop, and deliver digital products that leave an impression. We think ahead, code with precision, and market with purpose."
        />
      </div>
      <div className="py-10 lg:py-12 xl:py-24">
        <OurImpact />
      </div>
      <div className="pb-10 lg:pb-12 xl:pb-24">
        <OurCoreValue />
      </div>
      <div className="py-10 lg:py-12 xl:py-24">
        <div className="think-arq-container">
          <OurTeamIntro />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default page;
