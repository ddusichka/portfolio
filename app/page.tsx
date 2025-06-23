"use client";

import Image from "next/image";
import TypingEffect from "./components/Home/TypingDescriptions";
import ClickableDesk from "./components/Home/ClickableDesk";

export default function Home() {
  return (
    <div className="flex justify-center py-4 laptop:pt-12 bg-primary">
      <div className="max-w-screen-mobile w-full tablet:max-w-[90%] tablet:mx-auto flex flex-col space-y-6 text-white min-h-screen overflow-x-hidden">
        <div className="flex flex-col tablet:flex-row justify-between items-center  ml-8">
          <Image src={"/profile.png"} alt="Banner" width={100} height={100} />
          <h1 className="text-4xl tablet:text-6xl mb-4 tablet:mb-6 tablet:w-full">
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
