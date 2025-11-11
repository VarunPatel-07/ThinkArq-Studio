"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import countryData from "@/app/data/country-info.json";
import Input from "./Common/Input";
import TextArea from "./Common/TextArea";
import Image from "next/image";
import ContactFormVector from "@/app/Assets/Images/contact-form-vector.svg";
import BlackStarVector from "@/app/Assets/Images/black-star.svg";
import GreenStarVector from "@/app/Assets/Images/green-star.svg";
import SearchDrop from "./Common/SearchDrop";
import CommanSectionHeader from "./Common/CommanSectionHeader";
import { ServicesArray } from "../Constant/ServicesArray";
import { useSearchParams } from "next/navigation";
import { formateAndVerifyPhoneNumber, isValidEmail, verifyPhoneNumberLength } from "../Helper/Helper";
import { countryObject } from "../interface/interface";
import { HirePageArray } from "../Constant/HirePagesArray";
type FormDataType = {
  name: string;
  email: string;
  phone_number: string;
  your_message: string;
  service?: string; // ✅ optional
  country_info?: countryObject;
};

const BASE_URL = process.env.NEXT_PUBLIC_ORBIT_CONTACT_FORM_BASE_URL;
const ORBIT_API_KEY = process.env.NEXT_PUBLIC_ORBIT_API_KEY;
const ORBIT_API_SECRETE = process.env.NEXT_PUBLIC_ORBIT_API_SECRETE;
const ORBIT_SAY_HI_FORM_ID = process.env.NEXT_PUBLIC_ORBIT_SAY_HI_FORM_ID;
const ORBIT_GET_QUOTE_FORM_ID = process.env.NEXT_PUBLIC_ORBIT_GET_QUOTE_FORM_ID;

function ThinkArqContactForm() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = React.useState<"contact" | "quote">("contact");
  const [showError, setShowError] = useState<boolean>(false);
  const [mobileVerified, setMobileVerified] = useState<boolean>(true);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone_number: "",
    service: "",
    your_message: "",
  });
  const [dropDownSelectedValue, setDropDownSelectedValue] = useState<string | number>("");
  const [countryOptionsDataArray, setCountryOptionsDataArray] = useState<Array<countryObject>>([]);
  const CountryDataRef = useRef(false);

  const ServicesArrayOptions = useMemo(() => {
    return [...ServicesArray, ...HirePageArray];
  }, [ServicesArray, HirePageArray]);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleClickOnInquiryFormId = (data: string | object) => {
    if (typeof data === "string") {
      setFormData((prev) => ({ ...prev, service: data }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const is_verified = verifyPhoneNumberLength(
      formData.phone_number?.trim(),
      dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
    );
    if (!is_verified) {
      setMobileVerified(false);
    } else {
      setMobileVerified(true);
    }
    if (
      !isValidEmail(formData?.email) ||
      formData?.name == "" ||
      formData?.phone_number == "" ||
      formData?.your_message == ""
    ) {
      setShowError(true);
    } else {
      e.preventDefault();

      const requestData: FormDataType = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
        your_message: formData.your_message,
      };

      if (dropDownSelectedValue !== "") {
        requestData.country_info = JSON.parse(dropDownSelectedValue as string);
      }

      if (formType == "quote") requestData.service = formData.service;

      try {
        const response = await fetch(
          `${BASE_URL}?api_key=${ORBIT_API_KEY}&api_secret=${ORBIT_API_SECRETE}&form_id=${
            formType == "quote" ? ORBIT_GET_QUOTE_FORM_ID : ORBIT_SAY_HI_FORM_ID
          }`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const fetchAndFilterUserCountry = async () => {
    try {
      // Step 1: Get user country info from ipapi
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Failed to fetch IP info");

      const data = await response.json();
      const countryCode = data?.country_code?.toUpperCase() || "IN";

      // Step 2: Filter from local data.json
      const matchedCountry =
        countryData.find((country) => country.country_code.toUpperCase() === countryCode) ||
        countryData.find((c) => c.country_code.toUpperCase() === "IN");

      // Step 3: Return both all countries and filtered one
      return {
        success: true,
        countryOptionsData: countryData,
        filteredCountry: matchedCountry,
      };
    } catch (error) {
      console.error("Error fetching country:", error);
      const fallback = countryData.find((c) => c.country_code.toUpperCase() === "IN");
      return {
        success: true,
        countryOptionsData: countryData,
        filteredCountry: fallback,
      };
    }
  };

  useEffect(() => {
    const loadCountryData = async () => {
      if (CountryDataRef.current) return;
      CountryDataRef.current = true;

      if (countryOptionsDataArray.length === 0) {
        const response = await fetchAndFilterUserCountry();
        if (response?.success) {
          setCountryOptionsDataArray(response.countryOptionsData);
          setDropDownSelectedValue(JSON.stringify(response.filteredCountry));
        }
      }
    };
    loadCountryData();
  }, [countryOptionsDataArray]);
  useEffect(() => {
    const serviceId = searchParams.get("service-id");
    if (serviceId) {
      setFormType("quote");
      const data = ServicesArrayOptions.find((item) => item.id === serviceId);
      if (data) setFormData((previousData) => ({ ...previousData, service: data.text }));
    }
  }, [searchParams]);

  return (
    <div className="w-full h-full" id="contact-us">
      <CommanSectionHeader
        title="Contact Us"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="w-full pt-20 transition-all">
        <div className="w-full h-full rounded-t-[15px] md:rounded-t-[30px] lg:rounded-t-[45px] bg-[#F3F3F3] overflow-hidden relative">
          <form onSubmit={handleSubmit} className="w-full h-full p-7 md:py-16 md:px-24 transition-all relative z-10">
            <div className="w-full lg:max-w-[600px] transition-all">
              {/* Radio Buttons */}
              <div className="flex items-center justify-start gap-10 mb-10">
                <button
                  type="button"
                  className="flex items-center justify-start gap-3"
                  onClick={() => setFormType("contact")}>
                  <span className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full border border-black flex items-center justify-center">
                    {formType === "contact" && (
                      <span className="min-w-4 min-h-4 max-w-4 max-h-4 bg-[#B9FF66] rounded-full transition-all"></span>
                    )}
                  </span>
                  <span className="font-space-grotesk text-lg font-medium">Say Hi</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-start gap-3"
                  onClick={() => setFormType("quote")}>
                  <span className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full border border-black flex items-center justify-center">
                    {formType === "quote" && (
                      <span className="min-w-4 min-h-4 max-w-4 max-h-4 bg-[#B9FF66] rounded-full transition-all"></span>
                    )}
                  </span>
                  <span className="font-space-grotesk text-lg font-medium">Get a Quote</span>
                </button>
              </div>

              {/* Inputs */}
              <div className="w-full grid grid-cols-1 gap-8 transition-all">
                <Input
                  label="Name"
                  placeHolder="Name"
                  className="border border-black/30 text-black rounded-lg"
                  type="text"
                  isRequiredField={true}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  showError={showError}
                  errorMessage={showError && formData?.name !== "" ? "this is an required field" : ""}
                />

                <Input
                  label="Email"
                  placeHolder="Email"
                  className="border border-black/30 text-black rounded-lg"
                  type="email"
                  isRequiredField={true}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  showError={showError}
                  errorMessage={
                    showError
                      ? formData?.email.trim() === ""
                        ? "This field is required."
                        : !isValidEmail(formData?.email)
                        ? "Please enter a valid email address."
                        : ""
                      : ""
                  }
                />

                <Input
                  type="number"
                  className="border border-black/30 text-black rounded-lg rounded-l-none"
                  label="Phone Number"
                  placeHolder="Phone Number"
                  isRequiredField={true}
                  value={formateAndVerifyPhoneNumber(
                    formData?.phone_number,
                    dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_code : "IN"
                  )}
                  onChange={(e) => handleInputChange("phone_number", e.target.value)}
                  showError={(showError && formData.phone_number?.trim() == "") || !mobileVerified}
                  countryDropDownPosition="bottom"
                  dropDownSelectedValue={
                    dropDownSelectedValue ? JSON.parse(dropDownSelectedValue as string)?.country_number_code : "+91"
                  }
                  setDropDownSelectedValue={setDropDownSelectedValue}
                  errorMessage={
                    showError && mobileVerified
                      ? formData?.phone_number?.trim() === ""
                        ? "This field is required."
                        : ""
                      : !mobileVerified
                      ? "Please Enter valid Phone No"
                      : ""
                  }
                  countryOptionsData={countryOptionsDataArray}
                />

                {formType === "quote" && (
                  <div className="w-full grid grid-cols-1 gap-8">
                    <SearchDrop
                      searchKey=""
                      selectedValue={formData?.service}
                      position="bottom"
                      emptyDataMessage="No services found"
                      options={ServicesArrayOptions?.map((item) => item?.text)}
                      label="Select Service"
                      isRequiredField
                      onSelectValBtn={handleClickOnInquiryFormId}
                    />
                  </div>
                )}

                <TextArea
                  label="Your Message"
                  placeHolder="Your Message"
                  isRequiredField={true}
                  value={formData.your_message}
                  onChange={(e) => handleInputChange("your_message", e.target.value)}
                />

                <button
                  type="submit"
                  className="font-space-grotesk text-xl pt-2.5 pb-3 px-8 text-white bg-[#191A23] rounded-lg border-0 cursor-pointer">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          {/* Right Side Vector */}
          <div className="min-w-[550px] min-h-[550px] max-w-[550px] max-h-[500px] absolute -right-1/5 top-1/2 -translate-y-1/2 hidden lg:block">
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
