import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import CommanHeroSection from "@/app/Components/Common/CommanHeroSection";
import Footer from "@/app/Components/Footer";
import { ServicesArray } from "@/app/Constant/ServicesArray";
import OurServices from "@/app/Components/OurServices";
import LetsConnect from "@/app/Components/Common/LetsConnect";
import HowWeWork from "@/app/Components/HowWeWork";

export async function generateStaticParams() {
  return ServicesArray.map((item) => ({
    "service-slug": item.id, // must match your dynamic folder name
  }));
}

export default function Page({ params }: { params: { "service-slug": string } }) {
  const slug = params["service-slug"];
  const data = ServicesArray.find((item) => item.id === slug);

  if (!data) return null;

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-[90px]">
        <CommanHeroSection
          heroImage={data?.lottieIcon}
          title={data?.services_title}
          descriptions={data?.services_description}
        />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <h2 className="hidden">{data?.shadow_title}</h2>
        <HowWeWork
          data={data?.how_we_work}
          comanSectionTitle={data?.how_we_work_title}
          comanSectionDescription={data?.how_we_work_description}
        />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <OurServices
            title={data?.other_service_title}
            description={data?.other_service_description}
            ServicesData={ServicesArray.filter((item) => item.id !== slug)}
          />
        </div>
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <LetsConnect data={data?.lets_connect} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
