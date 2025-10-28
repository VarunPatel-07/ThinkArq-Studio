import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurImpactInNumber } from "../Constant/AboutUsConstant";

function OurImpact() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Our Impact In Number"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
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
