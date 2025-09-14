"use client"
import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurCoreValueArray } from "../Constant/AboutUsConstant";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function OurCoreValue() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Core Value"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      </div>
      <div className="grid grid-cols-2 gap-10 pt-16">
        {OurCoreValueArray?.map((item) => (
          <div key={item?.id} className="rounded-[45px] border border-b-8 border-[#191A23] py-10 px-9">
            <div className="flex items-stretch justify-start gap-8">
              <div>
                <h6 className="font-space-grotesk text-3xl font-semibold">{item?.title}</h6>
                <span className="w-full h-[2px] inline-flex bg-[#191a23] my-4 mt-6"></span>
                <p className="font-space-grotesk text-lg">{item?.description}</p>
              </div>
              {item?.lottieIcon && (
                <DotLottieReact
                  src={item?.lottieIcon}
                  loop
                  autoplay
                  className="w-full h-full"
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
