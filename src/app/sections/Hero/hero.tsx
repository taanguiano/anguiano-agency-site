"use client";

import React from "react";
import heroSection from "../../../../public/heroSection.svg";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="text-center relative mt-64">
      <div className="mb-52 relative">
        <div className="top-[25%] md:w-[700px] w-[350px] right-0 left-0 mx-auto absolute h-[10rem] blur-[120px] bg-[#FD5244] z-[-1]" />
        <div className="flex w-fit mx-auto border border-gray-100 py-[3px] px-[12px] rounded-full font-medium text-2xl bg-black shadow-lg items-center">
          2024 resume is out now!&nbsp;
          <IconArrowRight />
        </div>
        <h1 className="text-[5rem] leading-[1.2] font-medium mt-5 mb-3 md:text-[6rem] flex-wrap whitespace-break-spaces px-5">
          Design. Develop. Deliver.
        </h1>
        <p className="text-pText text-3xl mt-0">{`I am a Software Engineer w/ 5+ years of experience.`}</p>
      </div>
      <div className="relative">
        <Image
          src={heroSection}
          alt="hero-img"
          className="rounded-xl mx-auto z-[1] px-5"
          height={1500}
          width={1500}
        />
      </div>
    </section>
  );
};
