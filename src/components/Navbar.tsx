import React from "react";
import AppearanceButton from "./AppearanceButton";
import SectionButton from "./SectionButton";
import Kebab from "../assets/kebab.svg";
import { UserProps } from "../interfaces/UserProps";

interface NavbarProps extends UserProps { }

const Sections = ["home", "experience", "skills", "contact"];

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="flex flex-row items-center justify-between w-full p-5 h-fit dark:border-1 dark:border-b-2 bg-theme">
      <div className="text-3xl font-bold text-pretty hover-target">{username ? `${username}` : "Guest"}.</div>
      <div className="items-center hidden sm:flex space-x-14">
        <div className="space-x-10 font-semibold justify-evenly">
          {Sections.map((section) => (
            <SectionButton
              key={section}
              destination={section}
              destinationName={section[0].toUpperCase() + section.slice(1)}
            />
          ))}
        </div>

        <div>
          <AppearanceButton />
        </div>
      </div>
      <div className="flex fixed right-5 sm:hidden dropdown dropdown-end z-50">
        <div className="flex items-center bg-theme-invert p-5 rounded-full">
          <div tabIndex={0} role="button">
            <img className="size-5 hover-target invert dark:invert-0 " src={Kebab} alt="Dropdown" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-theme rounded-box z-[1] w-96 p-2 shadow"
        >
          <li className="absolute right-1 top-1 z-[100]">
            <AppearanceButton />
          </li>
          {Sections.map((section) => (
            <li>
              <SectionButton
                key={section}
                destination={section}
                destinationName={section[0].toUpperCase() + section.slice(1)}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
