"use client";
import React, { useState } from "react";
import { classNames, getServiceBg } from "../Helper/Helper";
import { useScrollReveal } from "../Helper/useScrollReveal";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { ServicesArrayInterface } from "../interface/interface";
import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), {
  ssr: false,
});

const ITEMS_PER_LOAD = 4;
const PREVIEW_COUNT = 6;

function OurServices({
  title,
  description,
  ServicesData,
  showPreviewOnly = false,
}: {
  title?: string;
  description?: string;
  ServicesData: ServicesArrayInterface[];
  showPreviewOnly?: boolean;
}) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  useScrollReveal();
  const visibleServices = showPreviewOnly
    ? ServicesData.slice(0, PREVIEW_COUNT)
    : ServicesData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <CommanSectionHeader
          title={title || "Services"}
          description={
            description ||
            "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
        {visibleServices?.map((services, index) => (
          <div
            key={services?.id}
            className="w-full h-full flex items-center justify-center cursor-pointer rounded-[15px] md:rounded-4xl transition-all duration-500 group hover:shadow-2xl odd:bg-[#B9FF66]! even:bg-[#F3F3F3] scroll-reveal card-hover">
            <div
              className={classNames(`w-full p-8 rounded-[15px] md:rounded-4xl border border-b-8 border-[#191A23]`, {
                "md:bg-[#B9FF66]": !getServiceBg(index),
                "md:bg-[#F3F3F3]": getServiceBg(index),
              })}>
              <div className="flex items-stretch justify-start gap-4">
                <div className="grow">
                  <div className="w-full h-full flex flex-col items-start justify-between gap-sm-20">
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
                      title={services?.services_title}
                      aria-label={`Learn more about ${services?.services_title}`}
                      className="gap-2 bg-[#191A23] rounded-full w-12 h-12 flex items-center justify-end flex-nowrap transition-all duration-500 group-hover:w-48 overflow-hidden group/button">
                      {/* Keep service title visible for SEO but hidden visually */}
                      <span className="sr-only">{`Learn more about ${services?.services_title}`}</span>
                      <span className="-translate-x-full opacity-0 group-hover:-translate-x-1/2 group-hover:opacity-100 text-white font-medium text-lg transition-all duration-300 text-nowrap">
                        Learn More
                      </span>
                      <HiArrowRight className="-translate-x-1/2 min-w-6 min-h-6 group-hover/button:-rotate-45 transition-all duration-300 text-white" />
                    </Link>
                  </div>
                </div>
                <div className="min-w-[210px] min-h-[210px] w-[210px] h-[210px] d-sm-block">
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

      {/* Preview mode: show "View All Services" link */}
      {showPreviewOnly && ServicesData.length > PREVIEW_COUNT && (
        <div className="w-full flex justify-center mt-16">
          <Link
            href="/services"
            className="px-8 py-4 bg-[#191A23] text-white rounded-full font-semibold transition-all border-2 border-[#191A23] hover:bg-white hover:text-[#191A23] cursor-pointer font-space-grotesk text-lg">
            View All Services
          </Link>
        </div>
      )}

      {/* Load More mode: for non-preview usage */}
      {!showPreviewOnly && visibleCount < ServicesData.length && (
        <div className="w-full flex justify-center mt-16">
          <button
            onClick={handleLoadMore}
            className="px-8 py-4 bg-[#191A23] text-white rounded-full font-semibold transition-all border-2 border-[#191A23] hover:bg-white hover:text-[#191A23] cursor-pointer">
            Load More Services
          </button>
        </div>
      )}
    </div>
  );
}

export default OurServices;
