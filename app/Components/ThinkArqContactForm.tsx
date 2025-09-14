"use client";
import React from "react";
import Input from "./Common/Input";
import TextArea from "./Common/TextArea";
import Image from "next/image";
import ContactFormVector from "@/app/Assets/Images/contact-form-vector.svg";
import BlackStarVector from "@/app/Assets/Images/black-star.svg";
import GreenStarVector from "@/app/Assets/Images/green-star.svg";
import SearchDrop from "./Common/SearchDrop";
import CommanSectionHeader from "./Common/CommanSectionHeader";

function ThinkArqContactForm() {
  const [formType, setFormType] = React.useState<"contact" | "quote">("contact");
  return (
    <div className="w-full h-full">
      <CommanSectionHeader
        title="Contact Us"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="w-full pt-20 transition-all">
        <div className="w-full h-full rounded-[45px]  bg-[#F3F3F3] overflow-hidden relative">
          <div className="w-full h-full py-16 px-24 transition-all relative z-10">
            <div className="w-full max-w-[600px] transition-all">
              <div className="flex items-center justify-start gap-10 mb-10">
                <button className="flex items-center justify-start gap-3" onClick={() => setFormType("contact")}>
                  <span className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full border border-black cursor-pointer flex items-center justify-center">
                    {formType == "contact" && (
                      <span className="min-w-4 min-h-4 max-w-4 max-h-4 bg-[#B9FF66] rounded-full transition-all"></span>
                    )}
                  </span>
                  <span className="font-space-grotesk text-lg font-medium">Say Hi</span>
                </button>
                <button className="flex items-center justify-start gap-3" onClick={() => setFormType("quote")}>
                  <span className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full border border-black cursor-pointer flex items-center justify-center">
                    {formType == "quote" && (
                      <span className="min-w-4 min-h-4 max-w-4 max-h-4 bg-[#B9FF66] rounded-full transition-all"></span>
                    )}
                  </span>
                  <span className="font-space-grotesk text-lg font-medium">Get a Quote</span>
                </button>
              </div>
              <div className="w-full grid grid-cols-1 gap-8 transition-all">
                <Input label="Name" placeHolder="Name" type="text" isRequiredField={true} />
                <Input label="Email" placeHolder="Email" type="email" isRequiredField={true} />
                <Input label="Phone Number" placeHolder="Phone Number" type="number" isRequiredField={true} />
                {formType == "quote" && (
                  <div className="w-full grid grid-cols-2 gap-8">
                    <SearchDrop
                      searchKey=""
                      position="bottom"
                      emptyDataMessage="test"
                      options={["test", "test"]}
                      label="Select Service"
                      isRequiredField
                    />

                    <Input label="Phone Number" placeHolder="Phone Number" type="number" isRequiredField={true} />
                  </div>
                )}
                <TextArea label="Your Message" placeHolder="Your Message" isRequiredField={true} />
                <button className="font-space-grotesk text-xl pt-2.5 pb-3 px-8 text-white bg-[#191A23] rounded-lg border-0 cursor-pointer">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="min-w-[550px] min-h-[550px] max-w-[550px] max-h-[500px] absolute  -right-1/5 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-full h-full relative">
              <Image
                src={ContactFormVector}
                alt="Contact Form Vector"
                width={550}
                height={550}
                className="animate-spin [animation-duration:30s] w-full h-full"
              />
              <Image
                src={BlackStarVector}
                alt="Black Star Vector"
                width={150}
                height={150}
                className="absolute top-1/2 left-0 -translate-y-1/2 animate-bounce [animation-duration:3s]"
              />
              <Image
                src={GreenStarVector}
                alt="Green Star Vector"
                width={90}
                height={90}
                className="absolute bottom-0 -left-7 animate-bounce [animation-duration:2s]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThinkArqContactForm;
