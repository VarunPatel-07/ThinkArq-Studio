import React from "react";
import TeamCommonCard from "./Common/TeamCommonCard";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { OurTeamIntroSection } from "../Constant/OurTeamIntro";

function OurTeamIntro() {
  return (
    <div className="w-full h-full">
      <CommanSectionHeader
        title="Meet Our Team"
        description="Behind Think Arq is a passionate team of AI engineers, software developers, data scientists, designers, and digital marketers — united by a shared mission to Think, Build, and Disrupt."
      />

      <div className="w-full pt-8 lg:pt-14 xl:pt-20 transition-all">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
          {OurTeamIntroSection?.map((data, index) => (
            <TeamCommonCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamIntro;
