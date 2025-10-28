import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurImpactInNumber } from "../Constant/AboutUsConstant";

function OurImpact() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Our Impact in Numbers"
          description="At Think Arq, we don’t just market brands, we build digital excellence. Our services span across UI/UX design, web and software development, AI-driven solutions, and digital marketing. All crafted to help businesses innovate, scale, and succeed in the digital era."
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-16">
        {OurImpactInNumber?.map((data) => (
          <div
            key={data?.label}
            className="w-full h-full rounded-[15px] md:rounded-[24px]  p-6 bg-[#F3F3F3] border border-[va(--theme-black-color)]">
            <div className="w-full h-full flex flex-col items-start justify-start gap-1">
              <h3 className="font-space-grotesk text-4xl text-black font-bold">{data?.value}</h3>
              <p className="font-space-grotesk text-base">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurImpact;
