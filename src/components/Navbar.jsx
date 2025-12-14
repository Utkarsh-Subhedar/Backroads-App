import logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <div>
      <nav className="h-16 shadow-lg shadow-black/20  w-full fixed z-30 bg-white">
        <div className="md:flex justify-between mx-2 md:mx-14 items-center h-full">
          <div className="flex justify-around py-4">
            <img src={logo} className="" alt="backroads" />
            <button type="button" className="inline-block md:hidden text-2xl">
              <TiThMenu />
            </button>
          </div>
          <ul className="md:flex hidden gap-3 *:text-grey-dark-1 capitalize text-md tracking-[4px] font-normal ">
            <li>
              <a href="#home" className="link-hover-effect">
                {" "}
                home{" "}
              </a>
            </li>

            <li>
              <a href="#about" className="link-hover-effect">
                {" "}
                about{" "}
              </a>
            </li>

            <li>
              <a href="#services" className="link-hover-effect">
                {" "}
                services{" "}
              </a>
            </li>

            <li>
              <a href="#tours" className="link-hover-effect">
                {" "}
                tours
              </a>
            </li>
          </ul>

          <ul className="md:flex hidden gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/utkarsh-subhedar-0ab111211/"
                target="_blank"
                className="text-xl link-hover-effect"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Utkarsh-Subhedar"
                target="_blank"
                className="link-hover-effect text-xl"
              >
                <IoLogoGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/utkarsh_subhedar"
                target="_blank"
                className="link-hover-effect text-xl"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
