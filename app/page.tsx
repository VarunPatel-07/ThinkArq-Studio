import Navbar from "@/app/Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";
import GetProposalCard from "./Components/GetProposalCard";
import OurWorkingProcess from "./Components/OurWorkingProcess";

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
    </div>
  );
}
