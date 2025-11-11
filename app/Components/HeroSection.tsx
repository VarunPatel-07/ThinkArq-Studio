import Image from "next/image";
import React from "react";
import HeroBannerIllustration from "@/app/Assets/Images/hero-illustration.webp";
import AssociateCompanySlider from "./Common/AssociateCompanySlider";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-between">
      <div className="w-full flex-col md:flex-row flex items-center justify-space-between think-arq-container">
        <div className="w-full md:w-1/2 pb-14 md:pb-0">
          <div className="xl:max-w-[531px] flex flex-col items-start justify-start gap-6 md:gap-9">
            <h1 className="font-space-grotesk text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="block">Think.</span> <span className="block">Build.</span>{" "}
              <span className="block">Disrupt.</span>
            </h1>
            <p className="font-space-grotesk text-lg md:mt-4 text-gray-600">
              At Think Arq, we blend creativity with intelligence — delivering sleek UI/UX, robust web and software
              solutions, AI and data-driven insights, and growth-focused digital marketing to help businesses scale
              smarter.
            </p>
            <Link
              href={"#contact-us"}
              className="font-space-grotesk text-xl pt-2.5 pb-3 px-8 text-white bg-[#191A23] rounded-lg border-0">
              Book A Consultation
            </Link>
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
