import Image from "next/image";
import React from "react";
import ProposalIllustration from "../Assets/Images/proposal-illustration.png";

function GetProposalCard() {
  return (
    <div className="w-full h-full bg-[#F3F3F3] rounded-[15px] md:rounded-[20px] p-8 lg:p-16 relative">
      <div className="flex flex-col items-start justify-start gap-6 w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center">Let’s make things happen</h2>
        <p className="text-start text-lg text-gray-600">
          Contact us today to learn more about how our digital marketing services can help your business grow and
          succeed online.
        </p>
        <button className="font-space-grotesk text-xl pt-2.5 pb-3 px-8 text-white bg-[#191A23] rounded-lg border-0 cursor-pointer">
          Get Your Free Proposal
        </button>
      </div>
      <div className="absolute right-1/12 top-1/2 -translate-y-1/2 hidden lg:flex">
        <Image src={ProposalIllustration} alt="Proposal Illustration" width={360} height={400} />
      </div>
    </div>
  );
}

export default GetProposalCard;
