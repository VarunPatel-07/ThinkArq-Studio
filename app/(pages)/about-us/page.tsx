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
          heroImage="/Lottie/together-for-success.lottie"
          title="At Think Arq, we architect ideas into reality."
          descriptions="Whether it’s a sleek web app, a smart AI solution, or a bold marketing campaign — we design, develop, and deliver digital products that leave an impression. We think ahead, code with precision, and market with purpose."
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
