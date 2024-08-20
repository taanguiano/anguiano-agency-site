"use client";

import React from "react";
import heroSection from "../../../../public/heroSection.svg";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="text-center mt-[75px]">
      <div className="mb-52">
        <div className="flex w-fit mx-auto border border-gray-100 py-[1px] px-[12px] rounded-xl font-medium text-2xl bg-black shadow-lg items-center">
          Now accepting clients. Contact Us&nbsp;
          <IconArrowRight />
        </div>
        <h1 className="text-[4rem] leading-[1.2] font-medium my-5 md:text-[6rem] flex-wrap">
          I Design. I Develop. I Deliver.
        </h1>
        <p className="text-2xl my-8 text-pText flex w-full justify-center mx-auto">
          {`Driven to deliver results for your team.`}
        </p>
      </div>
      <Image
        src={heroSection}
        alt="hero-img"
        className="rounded-xl mx-auto z-[1]"
        height={1500}
        width={1500}
      />
      <div className="absolute h-[10rem] blur-[120px] mx-auto w-[60%] bg-[#FD5244] z-[-1] top-[1000px] left-0 right-0" />
    </section>
  );
};
