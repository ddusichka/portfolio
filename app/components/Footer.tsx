import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="ml-4">
      <hr className="h-px my-2 bg-gray-400 border-0" />
      <div className="flex justify-between tablet:justify-normal text-lg pb-2">
        <p>
          © 2023 | Built by
          <a href="mailto:dusichka.d@northeastern.edu" target="_blank">
            <span className="ml-1 font-bold text-[#81559b]">
              Dessy Dusichka
            </span>
          </a>
        </p>
        <div className="ml-2 tablet:ml-6 mr-4 mt-1 flex gap-2 laptop:gap-4 justify-center">
          <Icons color="black" size="1em" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
