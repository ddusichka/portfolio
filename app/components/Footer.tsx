import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="ml-4 flex-col flex items-center bg-[#fffff2]">
      <p className="mt-2">© 2023 | Designed and coded by Dessy Dusichka</p>
      <div className="ml-6 flex gap-4">
        <Icons colorString="black" />
      </div>
    </div>
  );
};

export default Footer;
