import React from "react";
import { MyButton } from "./my-button";

const turboChargedText = () => {
  return <span className="italic font-extrabold">TURBOCHARGE</span>;
};

export const Hero = () => {
  return (
    <div className="text-center h-[100vh] mt-[125px]">
      <span className="text-[72px] my-5 leading-tight">
        Wix? Wordpress? Nah. Your Business Deserves Better.
        <span className="italic font-extrabold bg-turbocharged-gradient bg-clip-text text-transparent bg-contain inline-block"></span>
      </span>
      <p className="text-lg my-8">
        Crafted with care, not just clicked together. Experience the impact of
        our custom software, mobile, and web development solutions for your
        brand.
      </p>
      <MyButton>Treat Your Brand Now</MyButton>
    </div>
  );
};
