"use client";
import { classNames } from "@/app/Helper/Helper";
import { RenderLinkDropDownInterface } from "@/app/interface/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";

function RenderNavbarDropDown(props: RenderLinkDropDownInterface) {
  const { data: link, className, isParentOpen = false } = props;
  const pathname = usePathname();

  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close dropdown if parent opens another one
  useEffect(() => {
    if (isParentOpen) setIsDropDownOpen(false);
  }, [isParentOpen]);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropDownOpen(false);
      }
    }

    if (isDropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropDownOpen]);

  return (
    <div
      ref={dropdownRef}
      className={classNames("w-full flex items-start justify-start flex-col relative px-2.5 py-0.5 pb-1 rounded-md", {
        "md:bg-[var(--highlight-color)]": Boolean(link?.dropDown?.find((item) => item?.href == pathname)),
      })}>
      <div className="flex items-center justify-start md:justify-center gap-1.5">
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
            "mx-2 md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2 z-10 md:mt-12  bg-white  md:border  border-gray-200 md:rounded-md md:shadow-lg overflow-hidden transition-all duration-500",
            { "max-h-[0px] md:max-h-max md:hidden": !isDropDownOpen, "max-h-[500px] mt-2": isDropDownOpen }
          )}>
          {link.dropDown.map((item, index) => {
            if (item?.dropDown?.length > 0) {
              return (
                <RenderNavbarDropDown data={item} key={item?.id} className="py-3" isParentOpen={!isDropDownOpen} />
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={classNames(
                    "px-5 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 font-space-grotesk flex items-center justify-between gap-4 w-full flex-nowrap overflow-hidden group",
                    { "bg-[var(--highlight-color)]": pathname === item?.href }
                  )}
                  style={{
                    borderBottom: index === link.dropDown.length - 1 ? "none" : "1px solid #eee",
                  }}
                  onClick={() => setIsDropDownOpen(false)} // ✅ Close after clicking a link
                >
                  <span className="text-nowrap grow flex">{item.label}</span>
                  <HiArrowNarrowUp className="w-5 h-5 min-w-5 min-h-5 self-center rotate-45 group-hover:rotate-90 transition-transform duration-500 group-hover:text-orange-500" />
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
