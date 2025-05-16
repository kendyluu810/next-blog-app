import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="logo_light" width={120} />
      <p className="text-sm text-white">All right reserved. Copyright @K</p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="facebook_icon" />
        <Image src={assets.twitter_icon} alt="twitter_icon" />
        <Image src={assets.googleplus_icon} alt="googleplus_icon" />
      </div>
    </div>
  );
};

export default Footer;
