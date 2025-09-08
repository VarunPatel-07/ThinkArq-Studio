import Navbar from "@/app/Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[90px] w-full h-full xl:h-screen">
        <div className="think-arq-container h-full">
          <HeroSection />
        </div>
      </div>
      <div>
        <OurServices />
      </div>
    </div>
  );
}
