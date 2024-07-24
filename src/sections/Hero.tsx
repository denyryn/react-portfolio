import React from "react";
import { UserProps } from "../interfaces/UserProps";
import Title from "../components/Title";
import TypedTexts from "../components/TypedTexts";

interface HeroProps extends UserProps {
  portrait: string;
}

const Hero: React.FC<HeroProps> = ({
  fullname,
  username,
  portrait,
  role = [],
}) => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center px-10 md:items-stretch md:grid md:grid-cols-3 h-svh w-svw"
    >
      <div className="flex flex-col max-w-prose w-[20vw] items-center justify-center text-[4rem] leading-none font-bold text-center duration-150 md:items-baseline md:text-left text-pretty line-clamp-3">
        <span className="block leading-relaxed hover-target">{fullname}.</span>
        <div className="w-1/3 h-2 my-4 bg-white mix-blend-difference"></div>
        <button className="w-1/2 leading-4 duration-150 rounded-none size-fit btn hover:invert">
          <span>Contact {username}</span>
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center my-10 duration-150 place-self-end size-fit">
        <img
          tabIndex={2}
          className="z-20 object-cover mx-10 antialiased peer max-h-svh hover-target place"
          src={portrait}
          alt={fullname}
          // Ensure no additional `hover:pee` class unless defined elsewhere
        />
        <div className="z-20 w-full h-2 bg-white mix-blend-difference"></div>
        <div
          tabIndex={0}
          className="absolute z-10 duration-150 bg-white rounded-full mix-blend-difference size-2 peer-hover:size-64"
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center text-xl leading-loose text-center duration-150 ps-10 md:items-baseline md:text-left text-pretty line-clamp-3">
        <Title text="Introduction" />
        <span className="block text-2xl font-semibold hover-target">
          My role is&nbsp;
          <TypedTexts className="text-blue-500 " texts={role} />.
        </span>
        <span className="block my-4 text-lg hover-target">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          reprehenderit repudiandae ipsum? Velit facere tenetur sed dolores
          nulla ipsam aliquam eius, nobis, quo mollitia quae assumenda, sit modi
          at cupiditate officia quam?
        </span>
      </div>
    </section>
  );
};

export default Hero;
