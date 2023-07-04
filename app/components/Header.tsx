"use client";
import Image from "next/image";
import Link from "next/link";
import PageList from "../data/PageList";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

const styles = {
  main: "w-full h-20 shadow-xl z-[100]",
  name: "text-[#fffff2] text-2xl ml-4",
  flex: "flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#81559B]",
  ul: "hidden md:flex",
  li: "ml-10 text-white text-lg border-b-2 border-[#C9ABD9BF] hover:border-b-2 hover:border-white hover:ease-in hover:duration-500",
  sidebar: "md:hidden",
};

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((oldNav) => !oldNav);
  };

  return (
    <div className={styles.main}>
      <div className={styles.flex}>
        <div className="flex items-center">
          <Image
            src="/logo.png"
            height={50}
            width={50}
            alt="logo"
            priority={true}
          />
          <p className={styles.name}>Dessy Dusichka</p>
        </div>
        <ul className={styles.ul}>
          {PageList.map((page) => (
            <Link href={"/../" + page} key={page}>
              <li className={styles.li} key={page}>
                {page}
              </li>
            </Link>
          ))}
        </ul>

        <div className={styles.sidebar} onClick={handleNav}>
          <AiOutlineMenu color="white" size="1.5em" />
        </div>
      </div>

      <Sidebar isOpen={nav} handleNav={handleNav} />
    </div>
  );
};

export default Header;
