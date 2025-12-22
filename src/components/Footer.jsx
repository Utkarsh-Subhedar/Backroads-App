import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer class="flex flex-col bg-grey-dark-1 *:text-white">
        <ul class="flex justify-center">
          <li>
            <a href="#home" class="footer-link">
              home
            </a>
          </li>
          <li>
            <a href="#about" class="footer-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" class="footer-link">
              services
            </a>
          </li>
          <li>
            <a href="#featured" class="footer-link">
              featured
            </a>
          </li>
        </ul>
        <ul class="flex justify-center">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <p class="flex justify-center">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
