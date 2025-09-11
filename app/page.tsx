import Navbar from "@/app/Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";
import GetProposalCard from "./Components/GetProposalCard";
import OurWorkingProcess from "./Components/OurWorkingProcess";
import ThinkArqContactForm from "./Components/ThinkArqContactForm";
import OurTeamIntro from "./Components/OurTeamIntro";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[90px] w-full h-full xl:h-screen">
        <div className="w-full h-full overflow-hidden">
          <HeroSection />
        </div>
      </div>
      <div className="pt-24">
        <div className="think-arq-container h-full">
          <OurServices />
        </div>
      </div>
      <div className="py-28">
        <div className="think-arq-container">
          <GetProposalCard />
        </div>
      </div>
      <div className="py-28">
        <div className="think-arq-container">
          <OurWorkingProcess />
        </div>
      </div>

      <div className="py-28">
        <div className="think-arq-container">
          <OurTeamIntro />
        </div>
      </div>
      <div className="py-28 bg-[#F3F3F3]">
        <Testimonials />
      </div>
      <div className="py-28">
        <div className="think-arq-container">
          <ThinkArqContactForm />
        </div>
      </div>
    </div>
  );
}
