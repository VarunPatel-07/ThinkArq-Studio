import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import OurServices from "@/app/Components/OurServices";
import ThinkArqContactForm from "@/app/Components/ThinkArqContactForm";
import { HirePageArray } from "@/app/Constant/HirePagesArray";
import { Metadata } from "next";
import { Suspense, useMemo } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Hire Expert Developers & Designers | Think Arq",
  description:
    "Hire expert developers, designers, and digital specialists from Think Arq to build scalable, high-performance web and mobile solutions.",
  openGraph: {
    title: "Hire Expert Developers & Designers | Think Arq",
    description:
      "Hire expert developers, designers, and digital specialists from Think Arq to build scalable, high-performance web and mobile solutions.",
    url: `https://thinkarq.com/hire`,
    images: "/meta-images/think-arq.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Developers & Designers | Think Arq",
    description:
      "Hire expert developers, designers, and digital specialists from Think Arq to build scalable, high-performance web and mobile solutions.",
    images: "/meta-images/think-arq.jpg",
  },
  alternates: {
    canonical: `${BASE_URL}/hire`,
  },
};
function page() {
  const HirePageOptions = useMemo(() => {
    return [...HirePageArray];
  }, [HirePageArray]);
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="pt-25 xl:pt-35">
        <div className="think-arq-container h-full">
          <OurServices
            ServicesData={HirePageOptions}
            description="At Think Arq, we craft meaningful digital experiences through UI/UX design, web and software development, AI-powered systems, data intelligence, and growth-driven marketing — building smarter brands for the connected world."
          />
        </div>
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container">
          <Suspense>
            <ThinkArqContactForm />
          </Suspense>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default page;
