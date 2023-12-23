"use client";

import React from "react";
import { DundeeButton } from "./dundee-button";

export const Hero = () => {
  return (
    <section className="text-center h-[calc(100vh-var(--navigation-height))] pt-[125px]">
      <span className="text-[72px] my-5 bg-hero-title-gradient bg-clip-text text-transparent leading-tight italic">
        Wix? Wordpress? Nah. Your Business{" "}
        <span className="bg-emphasized-hero-gradient bg-clip-text text-transparent font-extrabold">
          Deserves Better.
        </span>
      </span>
      <p className="text-lg my-8">
        {`Crafted with care, not just clicked together. Experience the impact of
        the Dundee Devs' custom software, mobile, and web development solutions
        for your brand.`}
      </p>
      <DundeeButton>Treat Your Brand Now</DundeeButton>
    </section>
  );
};
