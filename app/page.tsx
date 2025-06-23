"use client";

import Image from "next/image";
import TypingEffect from "./components/Home/TypingDescriptions";
import ClickableDesk from "./components/Home/ClickableDesk";

export default function Home() {
  return (
    <div className="w-screen flex-grow h-full flex justify-center py-12 laptop:pt-12 tablet:px-6 bg-primary">
      <div className=" tablet:mx-auto flex flex-col space-y-6 text-white overflow-x-hidden">
        <div className="flex flex-col tablet:flex-row justify-between items-center tablet:ml-8">
          <Image src={"/profile.png"} alt="Banner" width={100} height={100} />
          <h1 className="text-4xl laptop:text-6xl mb-4 ml-4 tablet:mb-6 laptop:w-full">
            {"Hi, I'm Dessy!"}
          </h1>
          <div className="tablet:w-full flex flex-col items-center tablet:items-end">
            <p className="text-3xl tablet:text-4xl tablet:w-full text-center tablet:text-right">
              <span className="font-bold">software engineer</span> &{" "}
            </p>
            <TypingEffect />
          </div>
        </div>
        <ClickableDesk />
      </div>
    </div>
  );
}
