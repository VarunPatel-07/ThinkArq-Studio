import React from "react";
import { FaStarOfLife } from "react-icons/fa";

function TextArea({
  label,
  placeHolder,
  isRequiredField,
  cols = 30,
  rows = 5,
  value,
  onChange,
  setValue,
}: {
  label?: string;
  placeHolder?: string;
  isRequiredField?: boolean;
  cols?: number;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setValue?: (value: string) => void;
}) {
  const handelOnChangeFunction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (!setValue) return;
    setValue(val);
  };
  return (
    <div className="w-full">
      {label?.trim() != "" && (
        <label
          htmlFor=""
          className="pb-2.5 inline-block font-space-grotesk text-sm md:text-base lg:text-xl font-medium">
          <span className="flex gap-1">
            <span>{label}</span>
            {isRequiredField && <FaStarOfLife className="w-1.5 text-red-700" />}
          </span>
        </label>
      )}

      <textarea
        value={typeof value == "string" ? value : ""}
        onChange={setValue ? handelOnChangeFunction : onChange}
        className="border border-gray-500 rounded-lg md:rounded-xl px-7 py-3 bg-white w-full placeholder:text-[#898989] text-black focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-[#191A23] font-space-grotesk text-lg resize-none"
        placeholder={placeHolder}
        cols={cols}
        rows={rows}></textarea>
    </div>
  );
}

export default TextArea;
