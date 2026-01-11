import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import { SitemapItem } from "@/app/Components/SitemapItem";
import { HirePageArray } from "@/app/Constant/HirePagesArray";
import { AiMlServicesDataArray } from "@/app/Constant/Services/Ai-Ml-Services";
import { DataEngineeringServiceArray } from "@/app/Constant/Services/DataEngineeringService";
import { DigitalMarketingServices } from "@/app/Constant/Services/DigitalMarketingServices";
import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Sitemap | Think Arq - Think Build Disrupt",
  description:
    "Explore Think Arq Studios complete sitemap including services, solutions, technologies, work portfolio, about company and latest insights.",
  openGraph: {
    title: "Sitemap | Think Arq - Think Build Disrupt",
    description:
      "Explore Think Arq Studios complete sitemap including services, solutions, technologies, work portfolio, about company and latest insights.",
    url: `https://thinkarq.com/`,
    images: "/meta-images/think-arq.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Think Arq - Think Build Disrupt",
    description:
      "Explore Think Arq Studios complete sitemap including services, solutions, technologies, work portfolio, about company and latest insights.",
    images: "/meta-images/think-arq.jpg",
  },
  alternates: {
    canonical: `${BASE_URL}/sitemap`,
  },
};

export default function SitemapPage() {
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
