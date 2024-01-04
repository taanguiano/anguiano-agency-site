"use client";

import React from "react";
import { useAnchorClick } from "../../hooks/useAnchorClick";
import heroImage from "../../../../public/heroImage2.png";
import Image from "next/image";

export const Hero = () => {
  const { handleAnchorClick } = useAnchorClick();

  return (
    <section className="text-center pt-[125px]">
      <div className=" mb-52">
        <h1 className="text-[6rem] leading-[1.2] font-semibold my-5 bg-emphasized-hero-gradient bg-clip-text text-transparent">
          Wix? Wordpress? No.
          <br /> Your Business Deserves Custom.
        </h1>
        <p className="text-md my-8 text-pText">
          {`Crafted with care, not just clicked together. Experience the impact of
        the Elmwood Engineers' custom software, mobile, and web development solutions
        for your brand.`}
        </p>
        <button
          type="button"
          onClick={() => handleAnchorClick("contact")}
          className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Treat Your Brand Now
        </button>
      </div>
      <Image
        src={heroImage}
        alt="hero-img"
        className="rounded-xl mx-auto z-[1]"
      />
      <div className="absolute h-[10rem] blur-[120px] mx-auto w-[60%] bg-[#ce4bb0] z-[-1] top-[1050px] left-0 right-0" />
    </section>
  );
};
