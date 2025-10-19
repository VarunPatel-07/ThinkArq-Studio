import Image from "next/image";
import React from "react";
import HeroBannerIllustration from "@/app/Assets/Images/hero-illustration.png";
import AssociateCompanySlider from "./Common/AssociateCompanySlider";

function HeroSection() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-between">
      <div className="w-full flex-col md:flex-row flex items-center justify-space-between think-arq-container">
        <div className="w-full md:w-1/2 pb-14 md:pb-0">
          <div className="xl:max-w-[531px] flex flex-col items-start justify-start gap-6 md:gap-9">
            <h1 className="font-space-grotesk text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="block">Navigating the</span> <span className="block">digital landscape</span>{" "}
              <span className="block">for success</span>
            </h1>
            <p className="font-space-grotesk text-lg md:mt-4 text-gray-600">
              Our digital marketing agency helps businesses grow and succeed online through a range of services
              including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="font-space-grotesk text-xl pt-2.5 pb-3 px-8 text-white bg-[#191A23] rounded-lg border-0">
              Book a consultation
            </button>
          </div>
        </div>
        <div className="hidden md:flex w-1/2">
          <Image src={HeroBannerIllustration} alt="Hero Banner Illustration" width={600} height={515} loading="lazy" />
        </div>
      </div>
      <AssociateCompanySlider />
    </div>
  );
}

export default HeroSection;
