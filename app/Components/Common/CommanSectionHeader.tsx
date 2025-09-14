import React from "react";

function CommanSectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-5 items-center justify-start">
      <h2 className="bg-[#B9FF66] font-space-grotesk text-5xl leading-12  font-semibold p-1.5 pt-0.5 pb-2 rounded-md">{title}</h2>
      <p className="font-space-grotesk text-lg font-medium text-gray-600 max-w-[580px]">{description}</p>
    </div>
  );
}

export default CommanSectionHeader;
