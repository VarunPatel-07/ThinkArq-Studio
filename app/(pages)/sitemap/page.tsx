import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import { SitemapItem } from "@/app/Components/SitemapItem";
import { HirePageArray } from "@/app/Constant/HirePagesArray";
import { NavbarLinks } from "@/app/Constant/NavbarConstant";
import { AiMlServicesDataArray } from "@/app/Constant/Services/Ai-Ml-Services";
import { DataEngineeringServiceArray } from "@/app/Constant/Services/DataEngineeringService";
import { DigitalMarketingServices } from "@/app/Constant/Services/DigitalMarketingServices";

export default function SitemapPage() {
  const services = NavbarLinks.find((item) => item.id === "services")?.dropDown;

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-[90px]">
        <div className="py-5 lg:py-12 xl:py-16">
          {/* Title */}
          <h1 className="mb-16 text-center text-5xl font-bold">Sitemap</h1>
        </div>

        {/* Data Engineering */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">Digital Marketing Services</h2>

          <div className="flex flex-wrap gap-4">
            {DigitalMarketingServices.map((item) => (
              <SitemapItem key={item.id} label={item.text} href={item.href} />
            ))}
          </div>
        </div>

        {/* AI / ML Services */}
        <div className="w-full mb-20">
          <h2 className="mb-8 text-3xl font-semibold">Data Services</h2>

          <div className="flex flex-wrap gap-4">
            {DataEngineeringServiceArray.map((item) => (
              <SitemapItem key={item.id} label={item.text} href={item.href} />
            ))}
          </div>
        </div>

        <div className="w-full mb-20">
          <h2 className="mb-8 text-3xl font-semibold">AI/ML Services</h2>

          <div className="flex flex-wrap gap-4">
            {AiMlServicesDataArray.map((item) => (
              <SitemapItem key={item.id} label={item.text} href={item.href} />
            ))}
          </div>
        </div>
        <div className="w-full mb-20">
          <h2 className="mb-8 text-3xl font-semibold">Hire</h2>

          <div className="flex flex-wrap gap-4">
            {HirePageArray.map((item) => (
              <SitemapItem key={item.id} label={item.text} href={item.href} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
