import React from "react";
import { PinContainer } from "@/app/global-components/3d-pin/3d-pin";
import { projects } from "../our-work.utils";

export const OurWorkHome = () => {
  return (
    <div
      id="our-work"
      className="t-[var(--navigation-height)] pt-[190px] h-screen"
    >
      <div className="flex flex-col">
        <div className="w-fit mx-auto text-center pb-6">
          <div className="w-fit mx-auto border border-gray-100 py-[1px] px-[12px] rounded-xl font-medium text-2xl bg-black shadow-lg">
            Our Work
          </div>
          <h2 className="text-[5rem] leading-[1.2] font-semibold my-5">
            Our Design Philosophy: <br /> Aesthetic Meets Function
          </h2>
          <p className="text-pText text-3xl">
            {`We streamline your business's complexity into User-Friendly Interfaces.`}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="p-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"
            >
              <PinContainer
                key="asfasdf"
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] select-none">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Aceternity UI
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};
