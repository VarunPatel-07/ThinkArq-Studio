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
  showError,
  errorMessage,
  disabled,
}: {
  label?: string;
  placeHolder?: string;
  isRequiredField?: boolean;
  cols?: number;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setValue?: (value: string) => void;
  showError: boolean;
  errorMessage?: string;
  disabled?: boolean;
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
        className={`${
          showError && errorMessage !== "" ? "border border-red-500" : "border border-black/30"
        } rounded-lg md:rounded-xl px-7 py-3 bg-white w-full placeholder:text-[#898989] text-black focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-[#191A23] font-space-grotesk text-lg resize-none disabled:bg-[#7fab98]/15 disabled:border disabled:border-[#7fab98] disabled:cursor-not-allowed bg-white`}
        placeholder={placeHolder}
        cols={cols}
        rows={rows}
        disabled={disabled}></textarea>

      {showError && errorMessage && (
        <span className="text-rose-600  text-xs  mt-1 block px-1.5 font-inter">{errorMessage}</span>
      )}
    </div>
  );
}

export default TextArea;
