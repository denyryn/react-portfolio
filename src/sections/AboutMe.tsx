import React from "react";
import Title from "../components/Title";
import { UserProps } from "../interfaces/UserProps";
import RunningTexts from "../components/RunningTexts";
import LogoBNW from "../assets/Polines-bnw.png";
import LogoColored from "../assets/Polines-colored.png";

interface AboutProps extends UserProps {}

const AboutMe: React.FC<AboutProps> = ({ username }) => {
  return (
    <section id="about" className="flex flex-col justify-between w-svw h-svh ">
      <div className="flex flex-col justify-between w-full py-1 bg-white h-fit mix-blend-difference">
        <RunningTexts text={username} />
      </div>

      <div className="flex flex-col items-center justify-center text-xl leading-loose text-center duration-150 ps-10 md:items-baseline md:text-left text-pretty line-clamp-3">
        <Title text="About Me" />
        <div className="relative flex mt-2 duration-150 place-self-start group hover-target">
          <img
            className="z-20 size-32 group-hover:z-10"
            src={LogoBNW}
            alt="Politeknik Negeri Semarang"
          />
          <img
            className="absolute size-1 left-[3.9rem] group-hover:left-0 group-hover:z-20 group-hover:size-32"
            src={LogoColored}
            alt="Politeknik Negeri Semarang"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between w-full py-1 bg-white h-fit mix-blend-difference">
        <RunningTexts text={username} />
      </div>
    </section>
  );
};

export default AboutMe;
