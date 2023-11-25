import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const property = 'w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all cursor-pointer duration-300';

const SocialLinks = () => {
  return (
    <>
        <div>
            <div className="flex gap-4">
                <span className={`${property} hover:text-blue-600`}>
                    <Link to={`https://www.linkedin.com/in/rohit-panwar-b4bba6242/`} target='_blank' rel='noopener'><FaLinkedinIn /></Link>
                </span>
                <span className={`${property} hover:text-blue-400`}>
                    <Link to={`https://twitter.com/RohitPa41273782`} target='_blank' rel='noopener'><FaTwitter /></Link>
                </span>
                <span className={`${property} hover:text-blue-800`}>
                    <Link to={`https://www.facebook.com/rohit.panwar.3710`} target='_blank' rel='noopener'><FaFacebookF /> </Link>
                </span>
            </div>
        </div>
    </>
  )
}

export default SocialLinks