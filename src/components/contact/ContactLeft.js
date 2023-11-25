import React from 'react'
import  contactImg  from "../../assets/contact/contactImg.png";
import SocialLinks from '../../constants/SocialLinks';


const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
    <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-designColor">Rohit Panwar</h3>
        <p className="text-lg font-normal text-gray-400">
        MERN Stack Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        ipsam autem cumque, accusantium dicta odio.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
        Phone: <span className="text-lightText">+91 7417470339</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
        Email: <span className="text-lightText">Rohitpanwar9014rp@gmail.com</span>
        </p>
    </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
          </h2>
          <SocialLinks/>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft

/*
            <div className=' w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
                <img className=' w-full h-64 object-cover rounded-lg mb-4'
                    src={contactImg} alt="Img" 
                />
                 <div className=' flex flex-col gap-4'>
                    <h3 className=' text-3xl font-bold text-white'>Rohit Panwar</h3>
                    <p className=' text-lg font-normal text-gray-400'>
                        MERN Stack Developer
                    </p>
                    <p className=' text-base text-gray-400 tracking-wide'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, fuga.
                    </p>
                    <p className=' text-base text-gray-400 flex items-center gap-2'>
                        Phone: <span className=' text-lightText'>+917417470339</span>
                    </p>
                    <p className=' text-base text-gray-400 flex items-center gap-2'>
                        Email: <span className=' text-lightText'>Rohitpanwar9014rp@gmail.com</span>
                    </p>
                 </div>
                 <div className='flex flex-col gap-2'>
                    <div className=' text-base font-titleFont uppercase mb-4'>
                        Find me in
                    </div>
                    <div className=' flex gap-12'>
                        <span className={`${bannerIcon}`}> <FaFacebook/> </span>
                        <span className={`${bannerIcon}`}> <FaTwitter/> </span>
                        <span className={`${bannerIcon}`}> <FaLinkedin/> </span>
                    </div>
                 </div>
            </div>
*/