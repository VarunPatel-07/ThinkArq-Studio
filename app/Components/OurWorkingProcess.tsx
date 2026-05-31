import React from "react";
import RenderFaq from "./Common/RenderFaq";
import { WorkingProcessArray } from "../Constant/WorkingProcessArray";
import CommanSectionHeader from "./Common/CommanSectionHeader";

function OurWorkingProcess() {
  return (
    <div className="w-full">
      <div className="w-full">
        <CommanSectionHeader
          title="Our Working Process"
          description="At Think Arq, we follow a proven, results-driven process — from discovery and strategy to design, development, AI integration, and continuous optimization — ensuring every project delivers measurable business impact."
        />
      </div>

      <div className="gw-full pt-16">
        <RenderFaq data={WorkingProcessArray} />
      </div>
    </div>
  );
}

export default OurWorkingProcess;
