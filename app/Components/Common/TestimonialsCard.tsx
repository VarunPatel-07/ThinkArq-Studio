import React from "react";
import DefaultImage from "@/app/Assets/Images/Testimonials/demo.png";
import Image from "next/image";

export default function TestimonialsCard() {
  return (
    <div className="w-full h-full overflow-hidden rounded-[30px] lg:rounded-[45px] p-6 md:py-10 md:px-9 bg-[#191A23]">
      <div className="w-full">
        <div className="w-full pb-7 border-b border-b-white">
          <p className="font-space-grotesk text-base lg:text-lg text-white">
            We have been working with Positivus for the past year and have seen a significant increase in website
            traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about
            the success of our business. We highly recommend Positivus to any company looking to grow their online
            presence.
          </p>
        </div>
        <div className="w-full pt-7 flex items-center justify-between">
          <div className="w-full flex items-start justify-start gap-5">
            <div className="min-w-[50px] min-h-[50px]">
              <Image src={DefaultImage} alt="Default Image" width={50} height={50} />
            </div>
            <div className="flex flex-col items-start justify-start">
              <span className="font-space-grotesk text-lg font-semibold text-white">John Smith</span>
              <p className="font-space-grotesk text-xs text-white/70">CEO and Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
