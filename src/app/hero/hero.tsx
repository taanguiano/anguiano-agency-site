"use client";

import React from "react";
import { useAnchorClick } from "../hooks/useAnchorClick";
import heroImage from "../../../public/heroImage2.png";
import Image from "next/image";
import { Boxes } from "../global-components/background-boxes/background-boxes";

export const Hero = () => {
  const { handleAnchorClick } = useAnchorClick();

  return (
    <section className="text-center mt-[125px]">
      <div className=" mb-52">
        <h1 className="text-[6rem] leading-[1.2] font-semibold my-5 bg-hero-title-gradient bg-clip-text text-transparent">
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
          className="text-white bg-emphasized-hero-gradient hover:opacity-80 font-medium rounded-2xl text-sm px-5 py-3"
        >
          Get Started
        </button>
      </div>
      <Image
        src={heroImage}
        alt="hero-img"
        className="rounded-xl mx-auto z-[1]"
      />
      <div className="absolute h-[10rem] blur-[120px] mx-auto w-[60%] bg-grape z-[-1] top-[1050px] left-0 right-0" />
    </section>
  );
};
