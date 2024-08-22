"use client";

import React from "react";
// import Routes from "../utils/routes";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const SocialLinks = {
  GitHub: "https://github.com/taanguiano",
  LinkedIn: "https://linkedin.com/in/tristan-anguiano",
  X: "https://x.com/anguianodev",
};

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="overflow-visible">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:mb-64 mb-40 flex flex-col items-center">
          <h2 className="md:text-[5rem] text-[4rem] leading-[1.2] font-semibold my-5 flex justify-center text-center">
            Have an idea? <br /> {`Let's collaborate.`}
          </h2>
          {/* <button
            onClick={() => router.push(Routes.contactUs)}
            className="bg-hero-title-gradient text-white py-2 px-4 rounded-xl w-fit inline-text text-3xl mt-1"
          >
            Download My Resume
          </button> */}
        </div>
        <div className="md:flex-row md:justify-between flex flex-col w-full items-center px-5">
          <span className="text-2xl text-center text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Tristan Anguiano
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0">
            <a
              href={SocialLinks.GitHub}
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IconBrandGithub />
            </a>
            <a
              href={SocialLinks.LinkedIn}
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IconBrandLinkedin />
            </a>
            <a
              href={SocialLinks.X}
              target="_blank"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IconBrandX />
            </a>
          </div>
          <div className="absolute h-[10rem] blur-[120px] mx-auto w-[70%] bg-[#FD5244] z-[-1] left-0 right-0" />
        </div>
      </div>
    </footer>
  );
};
