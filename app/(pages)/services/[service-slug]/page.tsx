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
          title="Together For Success"
          descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos totam nostrum blanditiis consequuntur nulla aliquam, ullam dolores saepe voluptate debitis voluptatibus adipisci nesciunt fugit et consequatur ea assumenda sed perferendis molestias, fugiat, qui aperiam neque. Natus similique doloribus iste placeat adipisci, repudiandae non ratione."
        />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <HowWeWork />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <OurServices ServicesData={ServicesArray.filter((item) => item.id !== slug)} />
        </div>
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <LetsConnect />
        </div>
      </div>
      <Footer />
    </div>
  );
}
