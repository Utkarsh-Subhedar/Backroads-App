import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col bg-grey-dark-1 *:text-white md:p-[4rem] p-[3rem] gap-4 tracking-[4px] font-sans capitalize ">
        <ul className="grid grid-cols-2 md:flex justify-items-center justify-center gap-2 2xl:text-xl md:text-sm text-xs">
          <li>
            <a href="#home" className="link-hover-effect md:gap-5 ">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="link-hover-effect">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="link-hover-effect">
              services
            </a>
          </li>
          <li>
            <a href="#featured" className="link-hover-effect">
              featured
            </a>
          </li>
        </ul>
        <ul className="flex justify-center gap-5 2xl:text-4xl xl:text-3xl md:text-2xl text-xl">
          <li>
            <a
              href="https://www.linkedin.com/in/utkarsh-subhedar-0ab111211/"
              target="_blank"
            >
              <FaLinkedin className="link-hover-effect" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Utkarsh-Subhedar" target="_blank">
              <IoLogoGithub className="link-hover-effect" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/utkarsh_subhedar"
              target="_blank"
            >
              <FaInstagram className="link-hover-effect" />
            </a>
          </li>
        </ul>
        <p className="text-center text-wrap 2xl:text-xl md:text-sm text-xs">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
