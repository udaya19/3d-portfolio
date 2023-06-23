import { useState } from "react";
import logo from "../assets/uk-logo.png";
import navLinks from "../data/navLinks";

const NavBar = () => {
  const [active, setActive] = useState("");
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

        <ul className="text-white flex gap-5 absolute right-40 font-medium text-xl">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={
                active === link.title ? "text-red-500" : "text-navColor"
              }
              onClick={() => setActive(link.title)}
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
