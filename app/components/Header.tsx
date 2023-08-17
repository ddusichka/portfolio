"use client";
import Image from "next/image";
import Link from "next/link";
import content from "../content/content";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((oldNav) => !oldNav);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const closeSidebarOnClickOutside = (even: MouseEvent) => {
      if (nav) {
        setNav(false);
      }
    };

    document.addEventListener("click", closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener("click", closeSidebarOnClickOutside);
    };
  }, [nav]);

  return (
    <div className="HEADER w-full h-20 shadow-xl z-[100]">
      <div className="HEADER-FLEX flex justify-between items-center w-full h-full px-6 laptop:px-10 bg-[#81559B]">
        <Link href="/">
          <div className="LOGO-NAME flex items-center">
            <Image
              src="/logo.png"
              height={50}
              width={50}
              alt="logo"
              priority={true}
            />
            <p className="text-offwhite text-2xl ml-4">Dessy Dusichka</p>
          </div>
        </Link>
        <ul className="HEADER-PAGES hidden tablet:flex">
          {content.pages.map((page) => (
            <Link href={"/../" + page} key={page}>
              <li
                className="ml-10 text-white text-lg border-b-2 border-[#C9ABD9BF] hover:border-b-2 hover:border-white hover:ease-in hover:duration-500"
                key={page}
              >
                {page}
              </li>
            </Link>
          ))}
        </ul>

        <div className="tablet:hidden" onClick={handleNav}>
          <AiOutlineMenu color="white" size="1.5em" />
        </div>
      </div>

      <Sidebar isOpen={nav} handleNav={handleNav} />
    </div>
  );
};

export default Header;
