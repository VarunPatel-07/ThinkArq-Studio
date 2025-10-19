"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), {
  ssr: false,
});

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
              src={heroImage || "/Lottie/together-for-success.lottie"}
              loop
              autoplay
              className="w-full h-full"
              width={210}
              height={210}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="font-space-grotesk text-3xl lg:text-4xl xl:text-6xl leading-[36px] lg:leading-[44px] xl:leading-[70px] font-medium text-black">
              {title}
            </h1>
            <p className="pt-4 lg:pt-6 xl:pt-8 font-space-grotesk text-base lg:text-lg">{descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanHeroSection;
