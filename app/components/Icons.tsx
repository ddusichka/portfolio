import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const iconStyle: string = "cursor-pointer hover:scale-105 ease-in duration-500";
const size: string = "2em";

const Icons = ({ colorString }: { colorString: string }) => {
  return (
    <>
      <a href="https://www.linkedin.com/in/dessy-dusichka/" target="_blank">
        <div className={iconStyle}>
          <FaLinkedinIn color={colorString} size={size} />
        </div>
      </a>
      <a href="https://github.com/ddusichka" target="_blank">
        <div className={iconStyle}>
          <FaGithub color={colorString} size={size} />
        </div>
      </a>
      <a href="mailto:ddusichka@gmail.com" target="_blank">
        <div className={iconStyle}>
          <AiOutlineMail color={colorString} size={size} />
        </div>
      </a>
    </>
  );
};

export default Icons;
