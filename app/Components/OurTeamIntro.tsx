import React from "react";
import TeamCommonCard from "./Common/TeamCommonCard";

function OurTeamIntro() {
  return (
    <div className="w-full h-full">
      <div className="flex gap-5 items-center justify-start">
        <h2 className="bg-[#B9FF66] font-space-grotesk text-5xl font-semibold p-1.5 pt-1 rounded-md">Team</h2>
        <p className="font-space-grotesk text-lg font-medium text-gray-600 max-w-[580px]">
          Meet the skilled and experienced team behind our <br />
          successful digital marketing strategies
        </p>
      </div>
      <div className="w-full pt-20 transition-all">
        <div className="w-full grid grid-cols-3 gap-10">
          {Array?.from({ length: 6 })?.map((_, index) => (
            <TeamCommonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamIntro;
