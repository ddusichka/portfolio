"use client";

import Image from "next/image";
import TypingEffect from "./components/Home/TypingDescriptions";
import ClickableDesk from "./components/Home/ClickableDesk";

export default function Home() {
  return (
    <div className="flex justify-center py-4 laptop:pt-12 bg-primary">
      <div className="tablet:w-[80%] flex flex-col space-y-6 text-white min-h-screen">
        <div className="flex flex-col tablet:flex-row justify-between items-center">
          <Image src={"/profile.png"} alt="Banner" width={100} height={100} />
          <h1 className="text-4xl tablet:text-6xl mb-4 ml-8 tablet:mb-6 w-full">
            {"Hi, I'm Dessy!"}
          </h1>
          <div className="w-full flex flex-col items-end">
            <p className="text-3xl tablet:text-4xl w-full text-right">
              <span className="font-bold">software engineer</span> and{" "}
            </p>
            <TypingEffect />
          </div>
        </div>
        {/* <div> */}
        <ClickableDesk />
        {/* </div> */}
      </div>
    </div>
  );
}
