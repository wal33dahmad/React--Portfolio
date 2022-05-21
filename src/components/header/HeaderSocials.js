import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCodepenCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/wal33dahmad"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/wal33dahmad" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://codepen.io/wal33dahmad" target="_blank" rel="noreferrer">
        <AiOutlineCodepenCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
