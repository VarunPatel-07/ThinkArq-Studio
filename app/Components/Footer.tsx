"use client";
import React, { useState } from "react";
import ThinkArqWhiteLogo from "@/app/Assets/Images/thinkarq-white-logo.webp";
import Image from "next/image";
import { NavbarLinks } from "../Constant/NavbarConstant";
import Link from "next/link";
import { SocialMediaLinksArray } from "../Constant/SocialMediaConstant";
import { ContactUsSectionInfo } from "../Constant/CotactUsInfo";
import clsx from "clsx";

import Input from "./Common/Input";
function Footer() {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="pt-10 lg:pt-12 xl:pt-24">
      <div className="think-arq-container">
        <div className="w-full h-full rounded-t-[15px] md:rounded-t-[30px] lg:rounded-t-[45px] bg-[var(--theme-black-color)]  p-8 lg:p-10 xl:p-14">
          <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-between gap-5 flex-col md:flex-row">
              <Link href={"/"} className="w-fit h-fit -ml-1">
                <Image
                  src={ThinkArqWhiteLogo}
                  className="w-[180px] h-[50px]"
                  alt="ThinkArq Logo"
                  width={140}
                  height={40}
                />
              </Link>
              <div className="w-fit items-center justify-center gap-5 hidden md:flex">
                {NavbarLinks?.map((link) => (
                  <Link key={link.id} href={link.href} className="text-white font-space-grotesk text-lg font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="w-fit items-center justify-center gap-5 hidden md:flex">
                {SocialMediaLinksArray?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    aria-label={link.label}
                    className="text-[var(--theme-black-color)] bg-white font-space-grotesk text-lg font-medium flex items-center justify-center p-1.5 rounded-full">
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-stretch justify-start pt-14 gap-10 lg:gap-5 xl:gap-20">
              <div className="w-fit lg:max-w-[330px]">
                <span className="bg-[#B9FF66] font-space-grotesk text-base font-semibold px-1 pb-0.5 rounded-md capitalize inline-flex">
                  contact us:
                </span>
                <div className="flex flex-col items-start justify-start gap-2 pt-7">
                  {ContactUsSectionInfo?.map((item) => (
                    <div
                      key={item?.id}
                      className={clsx(
                        "w-full flex items-center justify-start gap-1 font-space-grotesk",
                        item?.className
                      )}>
                      <span className="inline-flex text-lg font-medium text-white">{item?.label}:</span>
                      {item?.link ? (
                        <Link href={item?.link} target={item?.target} className="text-base text-white/70">
                          {item?.value}
                        </Link>
                      ) : (
                        <p className="text-base text-white/70 mt-1 lg:mt-0">{item?.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grow bg-[#292A32] rounded-2xl p-6 lg:p-6 xl:p-8 flex items-center flex-sm-row justify-center gap-3 md:gap-3 xl:gap-5">
                <Input
                  type="email"
                  className="bg-white text-black rounded-lg text-sm md:text-base"
                  placeHolder="Enter Your Email"
                  value={email}
                  setValue={setEmail}
                />
                <button className="w-full md:w-fit font-space-grotesk text-sm lg:text-base pt-3 pb-3.5 px-2 lg:px-8 text-black bg-[#B9FF66] rounded-lg border-0 cursor-pointer text-nowrap ">
                  Subscribe to news
                </button>
              </div>
            </div>
            <div className="flex flex-sm-row gap-5 items-center justify-between grow w-full py-10 md:hidden">
              <div className="w-fit flex items-center justify-center gap-5">
                {NavbarLinks?.map((link) => (
                  <Link key={link.id} href={link.href} className="text-white font-space-grotesk text-lg font-medium">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="w-fit flex items-center justify-center gap-5">
                {SocialMediaLinksArray?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    aria-label={link.label}
                    className="text-[var(--theme-black-color)] bg-white font-space-grotesk text-lg font-medium flex items-center justify-center p-1.5 rounded-full">
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-t-white md:mt-14 pt-10">
              <div className="w-full flex items-center justify-between">
                <p className="font-space-grotesk text-base text-white/70">
                  © {new Date().getFullYear()} ThinkArq Studios. All Rights Reserved.
                </p>
                <Link href="/privacy-policy" className="text-white/70 transition-all hover:text-white hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
