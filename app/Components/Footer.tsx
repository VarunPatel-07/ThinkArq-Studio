"use client";
import React from "react";
import ThinkArqWhiteLogo from "@/app/Assets/Images/thinkarq-white-logo.png";
import Image from "next/image";
import { NavbarLinks } from "../Constant/NavbarConstant";
import Link from "next/link";
import { SocialMediaLinksArray } from "../Constant/SocialMediaConstant";
import { ContactUsSectionInfo } from "../Constant/CotactUsInfo";
import clsx from "clsx";

import Input from "./Common/Input";
function Footer() {
  return (
    <div className="pt-10 lg:pt-12 xl:pt-24">
      <div className="think-arq-container">
        <div className="w-full h-full rounded-t-[45px] bg-[var(--theme-black-color)] p-14">
          <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-between gap-10">
              <div className="w-fit h-fit -ml-1">
                <Image src={ThinkArqWhiteLogo} alt="ThinkArq Logo" width={180} height={50} />
              </div>
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
                    className="text-[var(--theme-black-color)] bg-white font-space-grotesk text-lg font-medium flex items-center justify-center p-1.5 rounded-full">
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-stretch justify-start pt-14 gap-20">
              <div className="w-fit max-w-[330px]">
                <h6 className="bg-[#B9FF66] font-space-grotesk text-base font-semibold px-1 pb-0.5 rounded-md capitalize inline-flex">
                  contact us:
                </h6>
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
                        <a href={item?.link} className="text-base text-white/70">
                          {item?.value}
                        </a>
                      ) : (
                        <p className="text-base text-white/70">{item?.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grow bg-[#292A32] rounded-2xl p-8 flex items-center justify-center gap-5">
                <Input type="email" className="bg-transparent text-white" placeHolder="Enter Your Email" />
                <button className="font-space-grotesk text-xl pt-3 pb-3.5 px-8 text-black bg-[#B9FF66] rounded-lg border-0 cursor-pointer text-nowrap">
                  Subscribe to news
                </button>
              </div>
            </div>
            <div className="border-t border-t-white mt-14 pt-10">
              <div className="w-full flex items-center justify-between">
                <p className="font-space-grotesk text-base text-white/70">
                  © {new Date().getFullYear()} ThinkArq Studios. All Rights Reserved.
                </p>
                <Link href="" className="text-white/70 transition-all hover:text-white hover:underline">
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
