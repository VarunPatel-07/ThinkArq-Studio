"use client";
import React from "react";
import { ServicesArray } from "../Constant/ServicesArray";
import { classNames, getServiceBg, IsOdd } from "../Helper/Helper";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
const DotLottieReact = React.lazy(() =>
  import("@lottiefiles/dotlottie-react").then((mod) => ({
    default: mod.DotLottieReact,
  }))
);
function OurServices() {
  return (
    <div className="w-full">
      <div className="flex gap-5 items-center justify-start">
        <h2 className="bg-[#B9FF66] font-space-grotesk text-5xl font-semibold p-1.5 pt-1 rounded-md">Services</h2>
        <p className="font-space-grotesk text-lg font-medium text-gray-600 max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
        {ServicesArray?.map((services, index) => (
          <div key={services?.id} className="w-full h-full flex items-center justify-center cursor-pointer group">
            <div
              className={classNames(`w-full p-8 rounded-4xl border border-b-8 border-[#191A23]`, {
                "bg-[#B9FF66]": !getServiceBg(index),
                "bg-[#F3F3F3]": getServiceBg(index),
              })}>
              <div className="flex items-stretch justify-start gap-4">
                <div className="grow">
                  <div className="w-full h-full flex flex-col items-start justify-between">
                    <h3 className="font-space-grotesk text-2xl font-semibold flex flex-col gap-1 items-start justify-start">
                      {services?.label?.map((text, i) => (
                        <span
                          key={i}
                          className={classNames("block py-0.5 px-1.5 rounded-md", {
                            "bg-[#B9FF66]": getServiceBg(index),
                            "bg-[#F3F3F3]": !getServiceBg(index),
                          })}>
                          {text}
                        </span>
                      ))}
                    </h3>
                    <Link
                      href={services?.href}
                      target={services?.target}
                      className="gap-2 bg-[#191A23]  rounded-full w-12 h-12 flex items-center justify-end flex-nowrap transition-all duration-500 group-hover:w-48 overflow-hidden group/button">
                      <span className="-translate-x-full opacity-0 group-hover:-translate-x-1/2 group-hover:opacity-100 text-white font-medium text-lg transition-all duration-300 text-nowrap">
                        Learn More
                      </span>
                      <HiArrowRight className="-translate-x-1/2 min-w-6 min-h-6 group-hover/button:-rotate-45 transition-all duration-300 text-white" />
                    </Link>
                  </div>
                </div>
                <div className="min-w-[210px] min-h-[210px] w-[210px] h-[210px]">
                  <DotLottieReact
                    src={services?.lottieIcon}
                    loop
                    autoplay
                    className="w-full h-full"
                    width={210}
                    height={210}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
