import React from "react";
import DemoImage from "@/app/Assets/Images/Team-Member-Images/demo.png";
import LinkedIn from "@/app/Assets/Images/linkedin.svg";
import Image from "next/image";
import { TfiLinkedin } from "react-icons/tfi";

function TeamCommonCard() {
  return (
    <div className="w-full h-full overflow-hidden rounded-[45px] border border-b-8 border-[#191A23] py-10 px-9">
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full flex items-stretch justify-start gap-5 pb-7 border-b-2 border-b-[#191A23]">
          <Image src={DemoImage} alt="Demo Image" width={120} height={120} />
          <div className="flex flex-col items-start justify-between grow">
            <div className="w-full flex items-end justify-end">
              <a
                href=""
                className="flex items-center justify-center rounded-full min-w-9 min-h-9 max-w-9 max-h-9 bg-[#191A23]">
                <TfiLinkedin className="text-[#B9FF66] min-w-5 min-h-5 max-w-5 max-h-5" />
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="font-space-grotesk text-xl font-semibold">John Smith</span>
              <p className="font-space-grotesk text-base text-black/60">CEO and Founder</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-7">
            <p className="font-space-grotesk text-base font-medium text-black/70">
                10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
            </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCommonCard;
