"use client";

import React from "react";
import heroSection from "../../../../public/Group-1.png";
import Image from "next/image";
import { BackgroundGradient } from "@/app/global-components/background-gradient";
import { IconArrowRight } from "@tabler/icons-react";
import { useDownloadFile } from "@/app/hooks/useDownloadFile";
import { resumeUri } from "@/app/utils/constants";
import Link from "next/link";

export const Hero = () => {
  const { downloadURI } = useDownloadFile();
  return (
    <section className="md:mt-64 text-center relative mt-32">
      <div className="md:mb-44 mb-28 relative">
        <h1 className="text-[4rem] leading-[1.2] font-medium mt-5 mb-3 md:text-[6rem] flex-wrap whitespace-break-spaces px-5">
          Design. Develop. Deliver.
        </h1>
        <p className="md:px-0 text-pText text-3xl mt-0 px-8">{`I am a front-end focused Full Stack Software Engineer w/ 5+ years of experience, and I will provide results for your team.`}</p>
        <Link href="/contact-me">
          <button className="bg-hero-title-gradient text-white py-2 px-4 rounded-xl mt-8">
            <span className="text-2xl flex items-center gap-2">
              {`Let's Talk`} <IconArrowRight size={20} />
            </span>
          </button>
        </Link>
      </div>
      <div className="md:mx-0 mx-4">
        <BackgroundGradient className="md:mx-auto rounded-2xl p-0.5 shadow-lg">
          <Image
            src={heroSection}
            alt="hero-img"
            width={1125}
            height={709}
            className="rounded-2xl z-[1] p-0.5"
          />
        </BackgroundGradient>
      </div>
    </section>
  );
};
