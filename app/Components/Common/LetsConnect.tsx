"use client";
import React from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import with SSR disabled
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), {
  ssr: false,
});

function LetsConnect({
  data,
  service_id,
}: {
  data: {
    title: string;
    description: string;
    sub_title: string;
    cta_button: string;
    lottieIcon: string;
  };
  service_id: string;
}) {
  return (
    <div className="rounded-[15px] md:rounded-[30px] lg:rounded-[45px] border border-[#191A23] p-6 lg:p-12 border-b-8">
      <div className="flex items-stretch justify-start gap-8">
        <div className="flex flex-col items-start justify-center gap-5 md:gap-10 xl:gap-14 w-full lg:w-1/2">
          <div className="flex flex-col gap-8 w-full">
            <h2 className="font-space-grotesk text-xl md:text-2xl lg:text-3xl font-semibold">
              {data?.title || "Ready To Elevate Your Side With"}
            </h2>
            <span className="w-full h-0.5 inline-flex bg-[#191a23]"></span>
            {data?.description && (
              <p
                className="font-space-grotesk text-base"
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}></p>
            )}
          </div>
          <div className="flex flex-col items-start justify-around gap-5 md:gap-10 w-full">
            {data?.sub_title && (
              <span className="font-space-grotesk text-xl font-bold text-black wrap-break-word">
                {data?.sub_title || `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`}
              </span>
            )}

            <a
              href={`/contact?service-id=${service_id}`}
              className="w-full md:w-fit font-space-grotesk text-sm pt-3 pb-3.5 px-8 text-black bg-[#B9FF66] text-start 2xl:text-center rounded-lg border-0 cursor-pointer xl:text-base">
              {data?.cta_button || `Subscribe to news`}
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:flex">
          <DotLottieReact
            src={data?.lottieIcon || "/Lottie/lets-connect.lottie"}
            loop
            autoplay
            className="w-full h-full hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default LetsConnect;
