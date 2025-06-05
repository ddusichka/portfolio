"use client";
import Image from "next/image";
import Link from "next/link";
import content from "../content/content";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

export default function Header() {
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
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/profile.png"
              height={50}
              width={50}
              alt="logo"
              priority={true}
            />
            <p className={styles.logoText}>Dessy Dusichka</p>
          </div>
        </Link>
        <ul className={styles.navList}>
          {content.pages.map((page) => (
            <Link href={"/../" + page} key={page}>
              <li className={styles.navItem}>{page}</li>
            </Link>
          ))}
        </ul>

        <div className={styles.menuIcon} onClick={handleNav}>
          <AiOutlineMenu color="white" size="1.5em" />
        </div>
      </div>

      <Sidebar isOpen={nav} handleNav={handleNav} />
    </div>
  );
}

const styles = {
  headerContainer: "w-full h-20 shadow-xl z-[100]",
  headerContent:
    "flex justify-between items-center w-full h-full px-6 laptop:px-10 bg-[#4b1261]",
  logoContainer: "LOGO-NAME flex items-center",
  logoText: "text-offwhite text-2xl ml-4",
  navList: "hidden tablet:flex",
  navItem:
    "ml-10 text-white text-lg border-b-2 border-[#C9ABD9BF] hover:border-b-2 hover:border-white hover:ease-in hover:duration-500",
  menuIcon: "tablet:hidden",
};
