import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="ml-4">
      <hr className="h-px my-2 bg-gray-400 border-0" />
      <div className="flex flex-row text-sm">
        <p>
          © 2023 | Designed and built by
          <a href="mailto:dusichka.d@northeastern.edu" target="_blank">
            <span className="ml-1 font-bold text-[#81559b]">
              Dessy Dusichka
            </span>
          </a>
        </p>
        <div className="ml-6 mt-0.5 laptop:mt-1 flex gap-2 laptop:gap-4 justify-center">
          <Icons color="black" size="1em" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
