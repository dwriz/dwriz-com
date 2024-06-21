import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="bg-black text-white">
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
              <FaGithub className="text-white text-3xl" />
            </a>
            <a href="https://linkedin.com/in/dwikyrizkya" target="_blank">
              <FaLinkedin className="text-white text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
