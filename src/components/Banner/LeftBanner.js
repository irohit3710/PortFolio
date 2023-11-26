import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Problem Solver."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 pt-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-semibold text-white">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Rohit Panwar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          MERN stack developers are proficient in utilizing MongoDB, Express.js, React.js, and Node.js to build robust and scalable full-stack web applications. With expertise across both frontend and backend technologies, MERN stack developers excel in creating seamless, modern, and feature-rich digital experiences.
        </p>
      </div>
     {/* Media */}

     <Media />
    </div>
  );
}

export default LeftBanner