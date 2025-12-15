import React from "react";

function CommanSectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-5 items-start justify-start md:flex-row md:items-center ">
      <div className="min-w-fit">
        <h2 className="bg-[#B9FF66] font-space-grotesk text-2xl lg:text-3xl leading-12  font-semibold p-1.5 pt-0.5 pb-1 md:pb-2 rounded-md flex-nowrap  break-all w-fit lg:max-w-[620px] lg:text-wrap overflow-hidden">
          {title}
        </h2>
      </div>
      <p className="font-space-grotesk text-base lg:text-lg font-medium text-gray-600 text-justify">{description}</p>
    </div>
  );
}

export default CommanSectionHeader;
