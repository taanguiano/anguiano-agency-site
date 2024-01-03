"use client";

import React from "react";
import { DundeeButton } from "../components/dundee-button";
import { useAnchorClick } from "../hooks/useAnchorClick";

export const Hero = () => {
  const { handleAnchorClick } = useAnchorClick();

  return (
    <section className="text-center h-[calc(100vh-var(--navigation-height))] pt-[125px]">
      <span className="text-[72px] my-5 bg-info bg-clip-text text-transparent leading-tight">
        Wix? Wordpress? No. Your Business Deserves{" "}
        <span className="bg-primary bg-clip-text text-transparent font-extrabold italic">
          Custom.
        </span>
      </span>
      <p className="text-lg my-8">
        {`Crafted with care, not just clicked together. Experience the impact of
        the Elmwood Engineers' custom software, mobile, and web development solutions
        for your brand.`}
      </p>
      <button
        type="button"
        onClick={() => handleAnchorClick("contact")}
        className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Treat Your Brand Now
      </button>
    </section>
  );
};
