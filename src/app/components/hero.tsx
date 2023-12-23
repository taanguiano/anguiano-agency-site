"use client";

import React from "react";
import { DundeeButton } from "./dundee-button";
import { useAnchorClick } from "../hooks/useAnchorClick";

export const Hero = () => {
  const { handleAnchorClick } = useAnchorClick();

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
      <button
        className="btn btn-lg btn-primary"
        onClick={() => handleAnchorClick("contact")}
      >
        Treat Your Brand Now
      </button>
    </section>
  );
};
