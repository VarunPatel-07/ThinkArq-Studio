"use client";
import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurCoreValueArray } from "../Constant/AboutUsConstant";

// Dynamically import with SSR disabled

function OurCoreValue() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Core Values"
          description="At Think Arq, we provide a complete suite of digital solutions designed to help businesses grow, innovate, and succeed online. Our expertise spans UI/UX design, web and software development, AI-powered solutions, and growth-focused digital marketing, enabling businesses in the USA, Europe, and beyond to achieve scalable results and measurable success."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 lg:pt-12 xl:pt-16">
        {OurCoreValueArray?.map((item) => (
          <div
            key={item?.id}
            className="rounded-[15px] md:rounded-[30px] lg:rounded-[45px] border border-[#191A23] p-6 lg:py-10 lg:px-9 border-b-8">
            <div className="flex items-stretch justify-start gap-8">
              <div className="flex flex-col gap-4">
                <h6 className="font-space-grotesk text-xl md:text-2xl lg:text-3xl font-semibold">{item?.title}</h6>
                <span className="w-full h-[2px] inline-flex bg-[#191a23]"></span>
                <p className="font-space-grotesk text-lg">{item?.description}</p>
              </div>
              {/* {item?.lottieIcon && (
                <DotLottieReact
                  src={item?.lottieIcon}
                  loop
                  autoplay
                  className="w-full h-full  hidden md:flex"
                  width={210}
                  height={210}
                />
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCoreValue;
