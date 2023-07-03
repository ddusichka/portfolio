import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import PageList from "../PageList";
import Icons from "./Icons";

const styles = {
  sidebar: "md:hidden",
  sidebar_li:
    "py-4 text-[#fffff2] text-lg hover:text-xl border-b-2 border-[#C9ABD9BF]",
  sidebar_title: "text-[#fffff2] w-full sm:w-[80%]",
  sidebar_icon: "rounded-full cursor-pointer",
};

const Sidebar = ({
  isOpen,
  handleNav,
}: {
  isOpen: boolean;
  handleNav: () => void;
}) => {
  return (
    <div
      className={isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
    >
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#81559B] p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 w-[75%] sm:w-[60%] md:w-[45%] ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
            <p className="text-white text-xl ml-4">Dessy Dusichka</p>
          </div>
          <div className={styles.sidebar_icon} onClick={handleNav}>
            <AiOutlineClose color="white" />
          </div>
        </div>

        <div className="py-4 flex flex-col">
          <ul>
            {PageList.map((page) => (
              <Link href={"/../" + page} key={page}>
                <li className={styles.sidebar_li} key={page}>
                  {page}
                </li>
              </Link>
            ))}
          </ul>

          <div className="pt-20">
            <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
