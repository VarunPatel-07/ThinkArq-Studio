"use client";
import validator from "validator";
import Cleave from "cleave.js";

import { phoneFormats } from "../Constant/NumberFormate";
export const classNames = (defaultClass: string, conditionBasedClass: { [keys: string]: boolean }) => {
  return `${defaultClass} ${Object.keys(conditionBasedClass)
    .filter((key) => conditionBasedClass[key])
    .join(" ")}`;
};

export const IsOdd = (num: number) => num % 2 !== 0;

export function getServiceBg(index: number) {
  const pattern = index % 4; // cycles 0,1,2,3
  if (pattern === 0 || pattern === 3) return true;
  return false;
}
export const isValidEmail = (email: string): boolean => {
  const isValid = validator.isEmail(email);
  return isValid;
};
export const formateAndVerifyPhoneNumber = (number: string, countryCode: string) => {
  if (!countryCode) return number;

  const upperCountryCode = countryCode.toUpperCase();
  const format = phoneFormats[upperCountryCode];

  if (!format) return number;
  if (typeof window === "undefined" || typeof document === "undefined") {
    return number;
  }
  const dummyInput = document.createElement("input");

  const cleave = new Cleave(dummyInput, {
    delimiter: "-",
    blocks: format.split("-").map((x) => x.length),
    numericOnly: true, // Ensures only numbers are processed
    rawValueTrimPrefix: true,
    delimiterLazyShow: true,
  });

  cleave.setRawValue(number);

  // Prevent retention of formatting when clearing
  return cleave.getFormattedValue();
};

export const verifyPhoneNumberLength = (phoneNumber: string, countryCode: string): boolean => {
  if (!countryCode) return false;

  const upperCountryCode = countryCode.toUpperCase();
  const format = phoneFormats[upperCountryCode];

  if (!format) return true;

  // Extract lengths from format like 'XXX-XXX-XXXX' or '3-3-4'
  const blocks = format.split("-").map((block) => block.length);
  const expectedLength = blocks.reduce((sum, len) => sum + len, 0);
  const number = formateAndVerifyPhoneNumber(phoneNumber, countryCode);
  const rowPhoneNumber = number.replace(/-/g, "");

  return rowPhoneNumber.length == expectedLength ? true : false;
};
