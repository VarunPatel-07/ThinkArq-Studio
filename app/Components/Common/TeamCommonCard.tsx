import React from "react";
// import DemoImage from "@/app/Assets/Images/Team-Member-Images/demo.webp";
import Image from "next/image";
import { TfiLinkedin } from "react-icons/tfi";
import Link from "next/link";
import { TeamInfoInterface } from "@/app/interface/interface";

function TeamCommonCard({ data }: { data: TeamInfoInterface }) {
  const { imagePath, description, designation, linkedinUrl, name } = data;
  return (
    <div className="w-full h-full overflow-hidden rounded-[15px] md:rounded-[30px] lg:rounded-[45px] border border-b-8 border-[#191A23] p-6 lg:py-10 lg:px-9 cursor-pointer transition-all duration-500 hover:shadow-2xl">
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full flex items-stretch justify-start gap-5 pb-7 border-b-2 border-b-[#191A23]">
          <Image src={imagePath} alt={name} width={120} height={120} />
          <div className="flex flex-col items-start justify-between grow">
            <div className="w-full flex items-end justify-end">
              <Link
                href={linkedinUrl}
                target="_blank"
                aria-label="LinkedIn Icon"
                className="flex items-center justify-center rounded-full min-w-9 min-h-9 max-w-9 max-h-9 bg-[#191A23]">
                <TfiLinkedin className="text-[#B9FF66] min-w-5 min-h-5 max-w-5 max-h-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <span className="font-space-grotesk text-xl font-semibold">{name}</span>
              <p className="font-space-grotesk text-base text-black/60">{designation}</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-7">
          <p className="font-space-grotesk text-base font-medium text-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCommonCard;
