"use client";
import Image from "next/image";
import Link from "next/link";
import PageList from "../PageList";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Icons from "./Icons";

const styles = {
  main: "fixed w-full h-20 shadow-xl z-[100]",
  flex: "flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#81559B]",
  ul: "hidden md:flex",
  li: "ml-10 text-white text-lg border-b-2 border-[#C9ABD9BF] hover:border-b-2 hover:border-white",
  sidebar: "md:hidden",
  sidebar_li: "py-4 text-lg text-[#fffff2]",
  sidebar_title: "text-[#fffff2] w-full sm:w-[80%]",
  sidebar_icon: "rounded-full cursor-pointer",
};

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((oldNav) => !oldNav);
  };

  return (
    <div className={styles.main}>
      <div className={styles.flex}>
        {/* Top nav bar */}
        <Image
          src="/logo.png"
          height={50}
          width={50}
          alt="logo"
          priority={true}
        />
        <div>
          <ul className={styles.ul}>
            {PageList.map((page) => (
              <Link href={"/../" + page} key={page}>
                <li className={styles.li} key={page}>
                  {page}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className={styles.sidebar} onClick={handleNav}>
          <AiOutlineMenu color="white" />
        </div>
      </div>

      {/* Side nav bar */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#81559B] p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/logo.png" alt="logo" height={35} width={35} />
              <div className={styles.sidebar_icon} onClick={handleNav}>
                <AiOutlineClose color="white" />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="">
              {PageList.map((page) => (
                <Link href={"/../" + page} key={page}>
                  <li className={styles.sidebar_li} key={page}>
                    {page}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="pt-40">
              <p className={styles.sidebar_title}>connect with me!</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
