import React from 'react'
import SocialLinks from '../../constants/SocialLinks';
import {QuickLinks,Resources,Developers} from '../../constants/FooterLinks.js'
import FooterListItems from './FooterListItems';


const Footer = () => {
  return (
    <section
      id='footer'
    >
      <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 px-14 mx-auto">
      <div className="w-full h-full flex flex-col gap-8">
        <h3 className="text-3xl font-bold text-designColor">Rohit Panwar</h3>
        <div>
          <SocialLinks/>
        </div>
      </div>
      <FooterListItems listData = {QuickLinks} Title = {"Quick Link"}/>
      {/* <FooterListItems listData={Resources} Title={"Resources"}/> */}
      {/* <FooterListItems listData={Developers} Title={"Developers"}/> */}
    </div>
    </section>
  );
}

export default Footer