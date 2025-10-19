import React from "react";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { classNames } from "../Helper/Helper";

function HowWeWork() {
  return (
    <div className="think-arq-container">
      <div className="w-full h-full">
        <CommanSectionHeader
          title="Core Value"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      </div>
      <div className="grid grid-cols-1 gap-10 pt-16 w-full">
        {Array.from({ length: 6 })?.map((_, index) => (
          <div
            key={index + 1}
            className={classNames(
              "overflow-hidden rounded-[30px] lg:rounded-[45px] border border-b-8 border-[#191A23] transition-all duration-300 px-8",
              {}
            )}>
            <div className="px-5 py-8 w-full flex flex-col md:flex-row items-start justify-start md:items-center gap-3 md:gap-6">
              <div className="w-fit">
                <span className="text-4xl lg:text-5xl font-space-grotesk font-black">
                  {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h6 className="font-space-grotesk text-lg md:text-xl lg:text-2xl font-bold">
                  Lorem ipsum dolor sit amet.
                </h6>
                <p className="font-space-grotesk text-sm lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illum quidem recusandae possimus ea
                  at perferendis dolores architecto sit et.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowWeWork;
