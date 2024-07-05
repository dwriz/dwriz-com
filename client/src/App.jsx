import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

function App() {
  const [backgroundMode, setBackgroundMode] = useState("dark");

  function toggleBackgroundMode() {
    if (backgroundMode === "dark") {
      setBackgroundMode("light");
    } else {
      setBackgroundMode("dark");
    }
  }

  return (
    <>
      <div className={backgroundMode === "light" ? "bg-white text-black" : "bg-black text-white"}>
        <div className="flex flex-col items-center justify-center h-screen font-montserrat">
          <h1 className="text-6xl font-extralight mb-4">Dwiky Rizkya</h1>
          <ReactTyped
            className="text-4xl font-extralight"
            strings={["Software Developer", "Front-End Developer", "Back-End Developer", "Web Developer", "Mobile Developer", "Data Scientist", "Data Analyst", "Data Engineer", "DevOps Engineer"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1500}
            loop
          />
          <div className="flex mt-20 space-x-4">
            <a href="https://github.com/dwriz" target="_blank">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://linkedin.com/in/dwikyrizkya" target="_blank">
              <FaLinkedin className="text-3xl" />
            </a>
            <button onClick={toggleBackgroundMode}>
              <MdOutlineLightMode className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
