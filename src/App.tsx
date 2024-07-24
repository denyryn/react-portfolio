// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Portrait from "./assets/anime-portrait-transparent.png";
import "./App.css";

function App() {
  const user = {
    fullname: "Deny Rianto",
    username: "denyryn",
    role: ["Frontend Developer", "Backend Developer", "Batman"],
  };
  return (
    <>
      <Navbar username={user.username} />
      <CustomCursor className="hidden md:block" />
      <Hero
        username={user.username}
        fullname={user.fullname}
        role={user.role}
        portrait={Portrait}
      />
      <AboutMe username={user.username} />
    </>
  );
}

export default App;
