import React from 'react'
import {FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import SocialLinks from '../../constants/SocialLinks';

const property = 'w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-300';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between items-center px-10">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
          </h2>
          <SocialLinks/>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className={`${property} hover:text-blue-600`}>
              <FaReact />
            </span>
            <span className={`${property} hover:text-green-600`}>
              <FaNodeJs />
            </span>
            <span className={`${property} hover:text-blue-500`}>
              <SiTailwindcss />
            </span>
            <span className={`${property} hover:text-green-800`}>
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media