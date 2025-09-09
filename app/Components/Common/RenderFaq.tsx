"use client";
import { classNames } from "@/app/Helper/Helper";
import { WorkingProcessArrayInterface } from "@/app/interface/interface";
import React from "react";

function RenderFaq({ data }: { data: WorkingProcessArrayInterface[] }) {
  const [currentOpen, setCurrentOpen] = React.useState<number>(1);

  const toggleFAQ = (index: number) => {
    setCurrentOpen(index === currentOpen ? -1 : index);
  };

  return (
    <div className="w-full grid grid-cols-1 gap-8">
      {data.map((faq) => (
        <div
          key={faq?.id}
          className={classNames(
            "overflow-hidden rounded-[45px] border border-b-8 border-[#191A23] transition-all duration-300 px-16",
            { "bg-[#F3F3F3]": currentOpen !== faq?.id, "bg-[#B9FF66]": currentOpen === faq?.id }
          )}>
          <button
            className="w-full flex justify-between items-center py-10 text-left font-medium text-gray-800 cursor-pointer"
            onClick={() => toggleFAQ(faq?.id)}>
            <span className="flex items-center justify-start gap-6 font-space-grotesk">
              <span className="text-5xl">{faq?.id > 9 ? faq?.id : `0${faq?.id}`}</span>
              <span className="text-2xl">{faq.question}</span>
            </span>
            <span className="ml-2">{currentOpen === faq?.id ? "−" : "+"}</span>
          </button>

          {/* Animated Answer */}
          <div
            className={classNames("transition-all duration-300 ease-in-out overflow-hidden text-gray-600", {
              "max-h-0": currentOpen !== faq?.id,
              "max-h-[500px] border-t border-t-black": currentOpen === faq?.id, // adjust this value if needed
            })}>
            <p className="py-10">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RenderFaq;
