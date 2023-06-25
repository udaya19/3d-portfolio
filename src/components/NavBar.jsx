import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../assets/uk-logo.png";
import navLinks from "../data/navLinks";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full fixed z-10 m-0 -mt-8">
      <div className="flex relative w-full items-center">
        <div>
          <a href="/">
            <img
              src={logo}
              alt=""
              className="w-24 h-30 m-2 ml-5 cursor-pointer rounded-full"
            />
          </a>
        </div>

        <div className="sm:w-[300px] sm:h-full  sm:z-9999 sm:bg-card">
          {toggle ? (
            <AiOutlineClose
              color="white"
              className="absolute right-10 top-5"
              size={25}
              onClick={handleClick}
            />
          ) : (
            <AiOutlineMenu
              color="white"
              className="absolute right-10 top-5"
              size={25}
              onClick={handleClick}
            />
          )}
          <ul
            className={`text-white ${
              !toggle ? "hidden" : "block"
            } flex-col lg:mt-0 lg:flex lg:flex-row lg:gap-5 absolute lg:right-40 right-10 font-medium text-xl`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={
                  active === link.title ? "text-red-500" : "text-navColor"
                }
                onClick={() => {
                  setActive(link.title);
                  setToggle(false);
                }}
              >
                <a href={link.id}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
