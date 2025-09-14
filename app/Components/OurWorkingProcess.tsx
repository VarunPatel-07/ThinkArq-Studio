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
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      </div>

      <div className="gw-full pt-16">
        <RenderFaq data={WorkingProcessArray} />
      </div>
    </div>
  );
}

export default OurWorkingProcess;
