import React from "react";

export const OurServices = () => {
  return (
    <div id="our-services" className="t-[var(--navigation-height)] pt-[190px]">
      <div className="flex flex-col">
        <div className="w-fit mx-auto text-center">
          <div className="w-fit mx-auto border border-gray-100 py-[4px] px-[12px] rounded-xl font-semibold text-2xl bg-black shadow-lg">
            Services
          </div>
          <h2 className="text-[5rem] leading-[1.2] font-semibold my-5 bg-hero-title-gradient bg-clip-text text-transparent">
            Any Software <br /> Your Business Requires
          </h2>
          <p className="text-pText text-3xl">
            {`Think of Elmware as a problem solving service. We crave solutions.`}
          </p>
        </div>
      </div>
    </div>
  );
};
