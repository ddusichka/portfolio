import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Icons from "./Icons";
import content from "../content/content";

const Sidebar = ({
  isOpen,
  handleNav,
}: {
  isOpen: boolean;
  handleNav: () => void;
}) => {
  return (
    <div
      className={
        isOpen
          ? "tablet:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]"
          : "z-[100]"
      }
    >
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-[80%] bg-[#81559B] p-10 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 p-10 w-[80%] ease-in duration-300"
        }
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] relative">
              <Image src="/logo.png" alt="logo" fill />
            </div>
            <p className="text-white text-md ml-4">Dessy Dusichka</p>
          </div>
          <div className="rounded-full cursor-pointer" onClick={handleNav}>
            <AiOutlineClose color="white" />
          </div>
        </div>

        <div className="py-4 flex flex-col">
          <ul>
            {content.pages.map((page) => (
              <Link href={"/../" + page} key={page}>
                <li
                  className="py-4 text-offwhite text-lg hover:text-xl border-b-2 border-[#C9ABD9BF]"
                  key={page}
                  onClick={handleNav}
                >
                  {page}
                </li>
              </Link>
            ))}
          </ul>

          <div className="pt-20">
            <div className="flex items-center justify-around my-4 w-full">
              <Icons color="white" size="2em" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
