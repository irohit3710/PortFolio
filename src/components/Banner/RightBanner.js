import React from 'react'
import programming from '../../assets/animation/programming.json'
import Lottie from 'lottie-react';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/3 flex justify-center items-center -translate-y-10 translate-x-5">
      {/* <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src="https://i.postimg.cc/x1KkknS3/3628748-628.jpg"
        alt="bannerImg"
      /> */}
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
        <Lottie animationData={programming} loop={true} />
    </div>
  );
}

export default RightBanner