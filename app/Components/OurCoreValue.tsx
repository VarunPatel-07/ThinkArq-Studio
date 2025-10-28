"use client"
import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurCoreValueArray } from "../Constant/AboutUsConstant";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), {
  ssr: false,
});


function OurCoreValue() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Core Value"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 lg:pt-12 xl:pt-16">
        {OurCoreValueArray?.map((item) => (
          <div key={item?.id} className="rounded-[15px] md:rounded-[30px] lg:rounded-[45px] border border-[#191A23] p-6 lg:py-10 lg:px-9 border-b-8">
            <div className="flex items-stretch justify-start gap-8">
              <div className="flex flex-col gap-4">
                <h6 className="font-space-grotesk text-xl md:text-2xl lg:text-3xl font-semibold">{item?.title}</h6>
                <span className="w-full h-[2px] inline-flex bg-[#191a23]"></span>
                <p className="font-space-grotesk text-lg">{item?.description}</p>
              </div>
              {item?.lottieIcon && (
                <DotLottieReact
                  src={item?.lottieIcon}
                  loop
                  autoplay
                  className="w-full h-full hidden md:flex"
                  width={210}
                  height={210}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCoreValue;
