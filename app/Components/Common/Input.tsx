import clsx from "clsx";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
function Input({
  label,
  placeHolder,
  isRequiredField,
  type,
  className,
}: {
  label?: string;
  placeHolder?: string;
  isRequiredField?: boolean;
  type: "text" | "email" | "password" | "number";
  className?: string;
}) {
  return (
    <div className="w-full h-fit">
      {label?.trim() != "" && (
        <label htmlFor="" className="pb-2.5 inline-block font-space-grotesk text-xl font-medium">
          <span className="flex gap-1">
            <span>{label}</span>
            {isRequiredField && <FaStarOfLife className="w-1.5 text-red-700" />}
          </span>
        </label>
      )}

      <input
        type={type}
        className={twMerge(
          clsx(
            "border border-gray-500 rounded-xl px-7 py-3 bg-white w-full placeholder:text-[#898989] text-black focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-[#191A23] font-space-grotesk text-lg",
            className
          )
        )}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default Input;
