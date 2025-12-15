import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import ThinkArqContactForm from "@/app/Components/ThinkArqContactForm";
import { OwnerInformation, PrivacyPolicyData } from "@/app/Constant/PrivacyPolicy";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense} from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Think Arq - Think Build Disrupt",
  description:
    "At Think Arq, we prioritize the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and protect your personal information in compliance with applicable data protection laws.",
  openGraph: {
    title: "Privacy Policy | Think Arq - Think Build Disrupt",
    description:
      "At Think Arq, we prioritize the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and protect your personal information in compliance with applicable data protection laws.",
    url: `https://thinkarq.com/`,
    images: "/meta-images/think-arq.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Think Arq - Think Build Disrupt",
    description:
      "At Think Arq, we prioritize the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and protect your personal information in compliance with applicable data protection laws.",
    images: "/meta-images/think-arq.jpg",
  },
};
function page() {
  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="pt-[72px]">
        <div className="w-full bg-[#F3F3F3] py-10 xl:py-16">
          <div className="think-arq-container">
            <div className="flex flex-col items-center justify-center gap-1.5 max-w-[500px] mx-auto">
              <h1 className="font-space-grotesk font-black text-[50px] text-center">Our Privacy Policy</h1>
              <p className="font-space-grotesk font-normal text-xl text-center">
                We love our customers and their privacy is our topmost priority as it is most valuable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="think-arq-container h-full">
          <div className="lg:max-w-[80%] xl:max-w-[65%] mx-auto">
            <div className="flex flex-col items-start justify-start gap-4">
              <p className="font-space-grotesk font-normal text-lg text-pretty flex items-center justify-start gap-2">
                <strong>Effective Date:</strong>
                <span>25/10/2025</span>
              </p>
              <p className="font-space-grotesk font-normal text-lg text-pretty">
                At <strong>Think Arq</strong>, we prioritize the privacy and security of our clients, partners, and
                website visitors. This Privacy Policy outlines how we collect, use, and protect your personal
                information in compliance with applicable data protection laws.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 gap-10 pt-10">
              {PrivacyPolicyData?.map((data, index) => (
                <div className="w-full" key={data?.id}>
                  <span className="font-space-grotesk font-bold text-2xl text-black">
                    {index + 1}. {data?.title}
                  </span>
                  <p className="font-space-grotesk font-normal text-lg pt-1 text-gray-800">{data?.description}</p>
                  {data?.bulletPoints?.length > 0 && (
                    <ul className="list-disc list-inside text-gray-800 space-y-2 pl-10 pt-4">
                      {data?.bulletPoints?.map((item, _index) => (
                        <li
                          key={_index}
                          className="font-space-grotesk font-normal text-lg text-gray-800"
                          dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full grid grid-cols-1 gap-5 pt-12">
              {OwnerInformation?.map((data) => (
                <div key={data?.id} className="w-full flex items-center justify-start gap-4">
                  {data?.value?.trim()?.length > 0 && (
                    <>
                      <p className="font-space-grotesk text-base xl:text-lg pt-1 text-black font-black">
                        {data?.label}:
                      </p>

                      <Link
                        href={
                          data?.label === "Email"
                            ? `mailto:${data?.value}`
                            : data?.label === "Phone"
                            ? `tel:${data?.value}`
                            : data?.label === "Address"
                            ? `https://www.google.com/maps/search/${encodeURIComponent(data?.value)}`
                            : data?.value
                        }
                        target={data?.label === "Email" || data?.label === "Phone" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="font-space-grotesk font-normal text-base xl:text-lg pt-1 text-gray-800 hover:text-green-600 transition-colors">
                        {data?.value}
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
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
