"use client";
import { classNames } from "@/app/Helper/Helper";
import { RenderLinkDropDownInterface } from "@/app/interface/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";

function RenderNavbarDropDown(props: RenderLinkDropDownInterface) {
  const { data: link, className, isParentOpen = false, index } = props;
  const pathname = usePathname();

  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if this dropdown has children with dropdowns
  const hasNestedDropdowns = link?.dropDown?.some((item) => item?.dropDown?.length > 0);

  useEffect(() => {
    if (isParentOpen) setIsDropDownOpen(false);
  }, [isParentOpen]);

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
      className={classNames("w-full flex items-start justify-start flex-col relative rounded-md", {
        "md:bg-(--highlight-color)": Boolean(link?.dropDown?.find((item) => item?.href == pathname)),
      })}>
      <div className="flex w-full items-center justify-start md:justify-center gap-1.5">
        <button
          key={link.id}
          className={`font-space-grotesk font-medium text-base md:text-lg  hover:text-orange-500 flex items-center justify-between cursor-pointer text-nowrap w-full hover:bg-gray-200 px-2.5 py-1.5 pb-2.5  rounded-sm ${className}`}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          <span className="w-full flex items-center justify-between gap-4">
            {link.label}
            <span
              className={classNames(
                "w-3 h-3 flex items-center justify-center min-w-2.5 min-h-2.5 transition-transform duration-200 mt-1",
                {
                  "rotate-180 ": isDropDownOpen,
                }
              )}>
              <FaChevronDown className="w-2.5 h-2.5 flex items-center justify-center min-w-3 min-h-3" />
            </span>
          </span>
        </button>
      </div>

      {link?.dropDown?.length > 0 && (
        <div
          className={classNames(
            "z-20 bg-white md:border border-gray-200 md:rounded-md md:shadow-lg transition-all duration-500 w-full md:w-auto px-2 md:px-0",
            {
              "max-h-0 md:max-h-max hidden": !isDropDownOpen,
              "md:max-h-[600px] mt-2": isDropDownOpen,
              "md:absolute": true,

              // Position centered below for top-level dropdowns without nested children
              "md:left-1/2 md:-translate-x-1/2 md:mt-14": !isParentOpen && !hasNestedDropdowns,

              // Position to the left for top-level dropdowns WITH nested children
              "md:left-0 md:translate-x-0 md:mt-14": !isParentOpen && hasNestedDropdowns,

              // Position to the left for nested dropdowns
              "md:right-full md:top-0 md:mt-0 md:translate-x-0 md:mr-1 bg-amber-200": isParentOpen,
            }
          )}>
          {link.dropDown.map((item, index) => {
            if (item?.dropDown?.length > 0) {
              return (
                <RenderNavbarDropDown
                  data={item}
                  key={item?.id}
                  className="py-3 min-w-[100px]"
                  index={index}
                  isParentOpen={isDropDownOpen}
                />
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={item.label}
                  aria-label={item.label}
                  className={classNames(
                    "px-5 py-2 pb-3.5 text-sm md:text-lg font-medium text-gray-900 hover:bg-gray-100 font-space-grotesk flex items-center justify-between gap-4 w-full min-w-[250px] rounded-sm",
                    { "bg-(--highlight-color)": pathname === item?.href }
                  )}
                  style={{
                    borderBottom: index === link.dropDown.length - 1 ? "none" : "1px solid #eee",
                  }}
                  onClick={() => setIsDropDownOpen(false)}>
                  <span className="md:text-nowrap grow flex">{item.label}</span>
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
