import { IconCode } from "@tabler/icons-react";
import React from "react";

export const OurServices = () => {
  return (
    <>
      <div
        id="our-services"
        className="t-[var(--navigation-height)] pt-[190px] pb-[190px]"
      >
        <div className="flex flex-col">
          <div className="w-fit mx-auto text-center">
            <div className="w-fit mx-auto border border-gray-100 py-[1px] px-[12px] rounded-xl font-medium text-2xl bg-black shadow-lg">
              Services
            </div>
            <h2 className="text-[5rem] leading-[1.2] font-semibold my-5">
              What Do I Do?
            </h2>
            <p className="text-pText text-3xl">
              {`Think of Elmware as a problem solving service. We crave solutions.`}
            </p>
          </div>
          <div className="mt-40 flex flex-col w-full md:justify-center md:gap-80 md:flex-row">
            {/* 1st Column */}
            <div className="flex flex-col w-full gap-40 h-full">
              {/* 1st Section */}
              <div className="flex flex-col w-full items-center h-1/2">
                <div className="flex items-center justify-center bg-web-design-dev-gradient w-28 h-28 rounded-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] mb-8">
                  <IconCode
                    size={40}
                    className="text-shadow-[_0_1px_0_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <span className="text-[4rem] mb-3 font-normal text-gray-200">
                  Custom Web Development
                </span>
                <span className="text-3xl text-center font-light text-gray-400">
                  I build responsive, high-performance web applications using
                  NextJS, React, and Tailwind. My focus is on creating apps that
                  not only look great but also deliver a seamless user
                  experience that aligns with the project’s goals.
                </span>
              </div>
              {/* 2nd Section */}
              <div className="flex flex-col w-full items-center h-1/2">
                <div className="flex items-center justify-center bg-app-design-dev-gradient w-28 h-28 rounded-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] mb-8">
                  <IconCode size={40} />
                </div>
                <span className="text-[4rem] mb-3 text-gray-200">
                  Full Stack Solutions
                </span>
                <span className="text-3xl text-center font-light text-gray-400">
                  {`With a foundation in both front-end and back-end development,
                  I handle the full stack to deliver solutions. I've leveraged
                  .NET and SQL for building back-end applications while using
                  React and Typescript for dynamic and responsive front-end applications.`}
                </span>
              </div>
            </div>
            {/* 2nd Column */}
            <div className="flex flex-col w-full gap-40">
              {/* 3rd Section */}
              <div className="flex flex-col w-full items-center">
                <div className="flex items-center justify-center bg-seo-gradient w-28 h-28 rounded-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.8)] mb-8">
                  <IconCode size={40} className="" />
                </div>
                <span className="text-[4rem] mb-3 text-gray-200">
                  Mobile App Development
                </span>
                <span className="text-3xl text-center font-light text-gray-400">
                  By using React Native, I create mobile applications that are
                  intuitive, engaging, and tailored to the needs of the
                  end-users. My focus is on delivering a consistent and
                  high-quality user experience across all devices.
                </span>
              </div>
              {/* 4th Section */}
              <div className="flex flex-col w-full items-center">
                <div className="flex items-center justify-center bg-ai-gradient w-28 h-28 rounded-3xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] mb-8">
                  <IconCode size={40} />
                </div>
                <span className="text-[4rem] mb-3 text-gray-200">
                  UI/UX Design Integration
                </span>
                <span className="text-3xl text-center font-light text-gray-400">
                  By collaborating with designers and using tools like Figma and
                  Storybook, I ensure that the final product is both functional
                  and aesthetically pleasing. My work aims to enhance user
                  engagement and satisfaction by prioritizing ease of use and
                  visual appeal.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
