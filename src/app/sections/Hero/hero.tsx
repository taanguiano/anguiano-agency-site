"use client";

import React from "react";
import heroSection from "../../../../public/heroSection.svg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="md:mt-64 text-center relative mt-44">
      <div className="md:mb-44 mb-28 relative">
        <div className="top-[200px] md:w-[700px] md:h-[200px] w-[250px] h-[160px] right-0 left-0 mx-auto absolute blur-[160px] bg-[#FD5244] z-[-1]" />
        <h1 className="text-[5rem] leading-[1.2] font-medium mt-5 mb-3 md:text-[6rem] flex-wrap whitespace-break-spaces px-5">
          Design. Develop. Deliver.
        </h1>
        <p className="md:px-0 text-pText text-3xl mt-0 px-8">{`I am a Software Engineer w/ 5+ years of experience.`}</p>
      </div>
      <div className="relative">
        <Image
          src={heroSection}
          alt="hero-img"
          className="rounded-xl mx-auto z-[1] px-8"
          height={1500}
          width={1500}
        />
      </div>
    </section>
  );
};
