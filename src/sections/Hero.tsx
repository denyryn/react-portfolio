import React from "react";
import { UserProps } from "../interfaces/UserProps";
import Title from "../components/Title";
import Button from "../components/Button";
import TypedTexts from "../components/TypedTexts";

interface HeroProps extends UserProps {
  portrait: string;
}

const gotoContact = () => {
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  }
}

const downloadCV = () => {
  // Path to the file in the public folder
  const filePath = "/Deny-Rianto_Year-of-Experience_Resume_2024.pdf";

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = filePath;
  link.download = "Deny-Rianto_Year-of-Experience_Resume_2024.pdf";
  link.style.display = "none";

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up and remove the link from the document
  document.body.removeChild(link);
};

const Hero: React.FC<HeroProps> = ({
  fullname,
  shortname,
  username,
  portrait,
  role = [],
}) => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center p-10 lg:items-center lg:grid lg:grid-cols-3 min-h-screen w-svw bg-theme"
    >
      <div className="flex pb-1 lg:px-1 flex-col max-w-prose items-center justify-center text-[2.5rem] lg:text-[4rem] leading-none font-bold text-center duration-150 lg:items-start lg:text-left text-pretty line-clamp-3">
        <span className="block leading-tight hover-target text-theme-invert">{fullname}.</span>
        <div className="w-1/3 h-2 my-4 bg-theme-invert"></div>
        <div className="flex flex-row gap-x-2 px-1">
          <Button text={`Contact ${username}`} onClick={gotoContact} className="leading-4 duration-150 size-fit btn hover-target" />
          <Button text={`Download Resume`} onClick={downloadCV} className="leading-4 duration-150 size-fit btn hover-target" />
        </div>
      </div>

      <div className="relative flex flex-col items-center place-items-center justify-center m-10 duration-150 size-fit">
        <img
          tabIndex={2}
          className="z-20 object-cover antialiased peer max-h-svh hover-target place"
          src={portrait}
          alt={fullname}
        />
        <div className="z-20 w-full h-2 bg-theme-invert"></div>
        <div
          tabIndex={0}
          className="absolute z-10 duration-150 bg-theme-invert rounded-full size-2 peer-hover:size-52 lg:peer-hover:size-64"
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center text-xl leading-loose text-center duration-150 lg:px-1 lg:items-baseline lg:text-left text-pretty line-clamp-3">
        <Title text="Introduction" />
        <span className="block text-2xl font-semibold hover-target">
          My self-proclaimed role is&nbsp;
          <TypedTexts className="text-blue-500 " texts={role} />.
        </span>
        <span className="block my-4 text-base lg:text-lg hover-target ">
          Hi, I’m {fullname}—{shortname ?? 'Rian'} for short! As an undergraduate at Semarang State Polytechnic, I’m driven by a love for learning, a hunger for challenges, and a passion for helping others. Let’s grow and achieve great things together!
        </span>
      </div>
    </section>
  );
};

export default Hero;
