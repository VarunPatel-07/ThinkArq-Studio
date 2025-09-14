"use client";
import { classNames } from "@/app/Helper/Helper";
import { RenderLinkDropDownInterface } from "@/app/interface/interface";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";

function RenderNavbarDropDown(props: RenderLinkDropDownInterface) {
  const { data: link, className, isParentOpen = false } = props;

  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  useEffect(() => {
    if (isParentOpen) setIsDropDownOpen(false);
  }, [isParentOpen]);

  return (
    <div className="w-full h-full relative px-2.5 py-0.5 pb-1 rounded-md">
      <div className="flex items-center justify-center gap-1.5">
        <button
          key={link.id}
          className={`font-space-grotesk font-medium text-lg hover:text-orange-500 flex items-center justify-center cursor-pointer ${className}`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {link.label}
        </button>
        <span
          className={classNames(
            "w-3 h-3 flex items-center justify-center min-w-2.5 min-h-2.5 transition-transform duration-200 mt-1",
            {
              "rotate-180": isDropDownOpen,
            }
          )}>
          <FaChevronDown className="w-2.5 h-2.5 flex items-center justify-center min-w-3 min-h-3" />
        </span>
      </div>
      {link?.dropDown?.length > 0 && (
        <div
          className={classNames(
            "absolute left-1/2 -translate-x-1/2 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg",
            { hidden: !isDropDownOpen }
          )}>
          {link.dropDown.map((item, index) => {
            if (item?.dropDown?.length > 0) {
              return (
                <RenderNavbarDropDown data={item} key={item?.id} className={"py-3"} isParentOpen={!isDropDownOpen} />
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-5 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 font-space-grotesk flex items-center justify-between gap-4 w-full flex-nowrap overflow-hidden group"
                  style={{ borderBottom: index === link.dropDown.length - 1 ? "none" : "1px solid #eee" }}>
                  <span className="text-nowrap grow flex">{item.label}</span>
                  <HiArrowNarrowUp className="w-5 h-5 min-w-5 min-h-5 self-center rotate-45  group-hover:rotate-90 transition-transform duration-500 group-hover:text-orange-500" />
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default RenderNavbarDropDown;
