import React from "react";
import RenderFaq from "./Common/RenderFaq";
import { WorkingProcessArray } from "../Constant/WorkingProcessArray";

function OurWorkingProcess() {
  return (
    <div className="w-full">
      <div className="flex gap-5 items-center justify-start">
        <h2 className="bg-[#B9FF66] font-space-grotesk text-5xl font-semibold p-1.5 pt-1 rounded-md">
          Our Working Process{" "}
        </h2>
        <p className="font-space-grotesk text-lg font-medium text-gray-600 max-w-[580px]">
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </div>
      <div className="gw-full pt-16">
        <RenderFaq data={WorkingProcessArray} />
      </div>
    </div>
  );
}

export default OurWorkingProcess;
