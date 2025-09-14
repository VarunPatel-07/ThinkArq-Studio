import CommanHeroSection from "@/app/Components/Common/CommanHeroSection";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import OurCoreValue from "@/app/Components/OurCoreValue";
import OurImpact from "@/app/Components/OurImpact";
import OurTeamIntro from "@/app/Components/OurTeamIntro";

import React from "react";

function page() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[90px]">
        <CommanHeroSection
          heroImage="/lottie/together-for-success.lottie"
          title="Together For Success"
          descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos totam nostrum blanditiis consequuntur nulla aliquam, ullam dolores saepe voluptate debitis voluptatibus adipisci nesciunt fugit et consequatur ea assumenda sed perferendis molestias, fugiat, qui aperiam neque. Natus similique doloribus iste placeat adipisci, repudiandae non ratione."
        />
      </div>
      <div className="py-10 lg:py-12 xl:py-24">
        <OurImpact />
      </div>
      <div className="pb-10 lg:pb-12 xl:pb-24">
        <OurCoreValue />
      </div>
      <div className="py-10 lg:py-12 xl:py-24">
        <div className="think-arq-container">
          <OurTeamIntro />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default page;
