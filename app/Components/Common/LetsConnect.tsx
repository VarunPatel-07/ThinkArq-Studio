"use client";
import React from "react";

import dynamic from "next/dynamic";

// Dynamically import with SSR disabled
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact), {
  ssr: false,
});

function LetsConnect() {
  return (
    <div className="rounded-[30px] lg:rounded-[45px] border border-[#191A23] p-6 lg:p-12 border-b-8">
      <div className="flex items-stretch justify-start gap-8">
        <div className="flex flex-col items-start justify-between gap-5 md:gap-10 w-full lg:w-1/2">
          <div className="flex flex-col gap-8 w-full">
            <h2 className="font-space-grotesk text-xl md:text-2xl lg:text-3xl font-semibold">
              Ready To Elevate Your Side With{" "}
            </h2>
            <span className="w-full h-[2px] inline-flex bg-[#191a23]"></span>
            <p className="font-space-grotesk text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum porro unde quasi eius reiciendis fugit
              suscipit, quo odit distinctio nesciunt itaque aspernatur voluptas quis ad iusto provident optio hic. Vero
              ex aliquam officiis harum nemo, impedit soluta tempore necessitatibus saepe architecto ut nostrum, fuga
              non similique dignissimos nobis placeat, at sed nihil libero sequi. Ut qui omnis nemo totam sequi ratione
              eius
            </p>
          </div>
          <div className="flex flex-col items-start justify-around gap-5 md:gap-10 grow">
            <h6 className="font-space-grotesk text-xl font-bold text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h6>
            <button className="w-fit md:w-fit font-space-grotesk text-base lg:text-lg pt-3 pb-3.5 px-8 text-black bg-[#B9FF66] rounded-lg border-0 cursor-pointer text-nowrap">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:flex">
          <DotLottieReact src="/Lottie/lets-connect.lottie" loop autoplay className="w-full h-full hidden md:flex" />
        </div>
      </div>
    </div>
  );
}

export default LetsConnect;
