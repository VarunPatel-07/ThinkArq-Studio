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
  descriptions: string | string[];
}) {
  return (
    <div className="think-arq-container">
      <div className="p-6 md:p-10 lg:p-14 bg-[#F3F3F3] rounded-[15px] md:rounded-[30px] lg:rounded-[45px]">
        <div className="w-full h-full flex flex-col md:flex-row items-center gap-3 justify-center md:gap-5 lg:gap-7">
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
            <h1 className="font-space-grotesk text-3xl lg:text-[42px] leading-9 lg:leading-[55px]   font-medium text-black">
              {title}
            </h1>
            {Array.isArray(descriptions) ? (
              <>
                <div className="pt-4 lg:pt-6 xl:pt-8 flex flex-col items-start justify-start gap-2.5">
                  {descriptions?.map((item, index) => (
                    <p
                      className="font-space-grotesk text-base lg:text-lg"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}></p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p
                  className="pt-4 lg:pt-6 xl:pt-8 font-space-grotesk text-base lg:text-lg"
                  dangerouslySetInnerHTML={{ __html: descriptions }}></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanHeroSection;
