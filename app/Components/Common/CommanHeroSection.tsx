"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

function CommanHeroSection({
  heroImage,
  title,
  descriptions,
}: {
  heroImage: string;
  title: string;
  descriptions: string;
}) {
  return (
    <div className="think-arq-container">
      <div className="p-14 bg-[#F3F3F3] rounded-[45px]">
        <div className="w-full h-full flex flex-col md:flex-row items-center gap-7 justify-center">
          <div className="w-full lg:w-1/2">
            <DotLottieReact
              src={heroImage && "/lottie/together-for-success.lottie"}
              loop
              autoplay
              className="w-full h-full"
              width={210}
              height={210}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="font-space-grotesk text-6xl leading-[70px] font-medium text-black">{title}</h1>
            <p className="pt-8 font-space-grotesk text-lg">{descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanHeroSection;
