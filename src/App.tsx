// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Portrait from "./assets/anime-portrait-transparent.png";
import "./App.css";

function App() {
  const user = {
    fullname: "Deny Rianto",
    shortname: "Rian",
    username: "denyryn",
    role: ["Frontend Developer", "Backend Developer"],
  };
  return (
    <>
      <Navbar username={user.username} />
      <Hero
        username={user.username}
        fullname={user.fullname}
        shortname={user.shortname}
        role={user.role}
        portrait={Portrait}
      />
      <Experiences username={user.username} />
      <Skills />
      <Contact username={user.username} />
      <CustomCursor />
    </>
  );
}

export default App;
