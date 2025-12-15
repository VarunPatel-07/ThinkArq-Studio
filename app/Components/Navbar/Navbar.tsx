"use client";
import React, { useEffect, useState } from "react";
import ThinkArqLogo from "@/app/Assets/Images/think-arq-logo.webp";
import Image from "next/image";
import { NavbarLinks } from "@/app/Constant/NavbarConstant";
import Link from "next/link";
import RenderNavbarDropDown from "../Common/RenderNavbarDropDown";

import { classNames } from "@/app/Helper/Helper";
import { usePathname } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const pathname = usePathname();
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  const handelClickOnHamburgerMenu = () => {
    if (showMobileNavbar) {
      setShowMobileNavbar(false);
      if (document.getElementById("body")) {
        document.getElementById("body")?.classList.remove("fixed-body");
      }
    } else {
      setShowMobileNavbar(true);
      if (document.getElementById("body")) {
        document.getElementById("body")?.classList.add("fixed-body");
      }
    }
  };

  useEffect(() => {
    if (document.getElementById("body")) {
      if (document.getElementById("body")?.classList.contains("fixed-body")) {
        document.getElementById("body")?.classList.remove("fixed-body");
      }
    }
  }, []);
  return (
    <nav className="w-full border-b border-b-black/10 fixed top-0 left-0 bg-white z-50">
      <div className="think-arq-container">
        <div className="w-full flex items-center justify-between py-3">
          <Link href={"/"} title="ThinkArq Logo" aria-label="ThinkArq Logo" className="w-fit h-fit -ml-1">
            <Image src={ThinkArqLogo} alt="ThinkArq Logo" title="ThinkArq Logo" width={140} height={50} />
          </Link>
          <div
            className={classNames("w-fit h-fit flex gap-5 text-lg font-medium navbar-custom-css ", {
              active: showMobileNavbar,
            })}>
            <div className="w-fit h-fit flex gap-5 text-lg font-medium navbar-main-inner-wrapper">
              <div className="flex gap-5 navbar-inner-wrapper">
                <div className="w-full flex items-center justify-between md:hidden mobile-nav-logo-bar">
                  <div className="w-fit h-fit">
                    <Image title="ThinkArq Logo" src={ThinkArqLogo} alt="ThinkArq Logo" width={140} height={50} />
                  </div>
                  <button className="mt-1 cursor-pointer" onClick={handelClickOnHamburgerMenu}>
                    <IoIosCloseCircleOutline className="min-w-7 min-h-7" />
                  </button>
                </div>
                {NavbarLinks.map((link) => {
                  if (link?.dropDown?.length == 0) {
                    return (
                      <Link
                        key={link.id}
                        href={link.href}
                        title={link.label}
                        aria-label={link.label}
                        className={classNames(
                          "font-space-grotesk font-medium text-base md:text-lg hover:text-orange-500 flex items-center justify-center px-2.5 py-0.5 pb-1 rounded-md",
                          { "bg-(--highlight-color)": pathname === link?.href }
                        )}>
                        {link.label}
                      </Link>
                    );
                  } else {
                    return <RenderNavbarDropDown data={link} key={link?.id} isParentOpen={false} index={0} />;
                  }
                })}
              </div>
            </div>
          </div>
          <button className="mt-1 cursor-pointer md:hidden" onClick={handelClickOnHamburgerMenu}>
            <GiHamburgerMenu className="min-w-7 min-h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
