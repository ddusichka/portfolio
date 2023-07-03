import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const iconStyle: string =
  "shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500";

const Icons = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/dessy-dusichka/" target="_blank">
        <div className={iconStyle}>
          <FaLinkedinIn color="black" />
        </div>
      </a>
      <a href="https://github.com/ddusichka" target="_blank">
        <div className={iconStyle}>
          <FaGithub color="black" />
        </div>
      </a>
      <a href="mailto:ddusichka@gmail.com" target="_blank">
        <div className={iconStyle}>
          <AiOutlineMail color="black" />
        </div>
      </a>
    </>
  );
};

export default Icons;
