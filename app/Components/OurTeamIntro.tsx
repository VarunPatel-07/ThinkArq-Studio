import React from "react";
import TeamCommonCard from "./Common/TeamCommonCard";
import CommanSectionHeader from "./Common/CommanSectionHeader";

function OurTeamIntro() {
  return (
    <div className="w-full h-full">
      <CommanSectionHeader
        title="Team"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
     
      <div className="w-full pt-20 transition-all">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array?.from({ length: 6 })?.map((_, index) => (
            <TeamCommonCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeamIntro;
