"use client";
import React from "react";
import ThinkArqLogo from "@/app/Assets/Images/think-arq-logo.png";
import Image from "next/image";
import { NavbarLinks } from "@/app/Constant/NavbarConstant";
import Link from "next/link";
import RenderNavbarDropDown from "../Common/RenderNavbarDropDown";

import { classNames } from "@/app/Helper/Helper";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full border-b border-b-black/10 fixed top-0 left-0 bg-white z-50">
      <div className="think-arq-container">
        <div className="w-full flex items-center justify-between py-4">
          <div className="w-fit h-fit -ml-1">
            <Image src={ThinkArqLogo} alt="ThinkArq Logo" width={140} height={50} />
          </div>
          <div className="w-fit h-fit flex gap-5 text-lg font-medium">
            {NavbarLinks.map((link) => {
              if (link?.dropDown?.length == 0) {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={classNames(
                      "font-space-grotesk font-medium text-lg hover:text-orange-500 flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md",
                      { "bg-[var(--highlight-color)]": pathname === link?.href }
                    )}>
                    {link.label}
                  </Link>
                );
              } else {
                return <RenderNavbarDropDown data={link} key={link?.id} isParentOpen={false} />;
              }
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
