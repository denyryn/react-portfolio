import React from "react";
import AppearanceButton from "./AppearanceButton";
import SectionButton from "./SectionButton";
import Kebab from "../assets/kebab.svg";
import { UserProps } from "../interfaces/UserProps";

interface NavbarProps extends UserProps {}
const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="flex flex-row items-center justify-between w-full p-5 h-fit dark:border-1 dark:border-b-2">
      <div className="text-3xl font-bold text-pretty">{username}.</div>
      <div className="items-center hidden sm:flex space-x-14">
        <div className="space-x-10 font-semibold justify-evenly">
          <SectionButton destination="home" destinationName="Home" />
          <SectionButton destination="about" destinationName="About Me" />
          <button className="duration-100 hover:text-white hover:mix-blend-difference hover-target hover:animate-pulse hover:scale-110">
            Skills
          </button>
          <button className="duration-100 hover:text-white hover:mix-blend-difference hover-target hover:animate-pulse hover:scale-110">
            Projects
          </button>
        </div>
        <div>
          <AppearanceButton />
        </div>
      </div>
      <div className="flex sm:hidden dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <img className="invert size-5" src={Kebab} alt="Dropdown  " />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content  bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
