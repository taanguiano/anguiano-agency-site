import React from "react";
import { BentoGrid } from "../global-components/bento-grid/bento-grid";
import { cn } from "../utils/cn";
import { BentoGridItem } from "../global-components/bento-grid/bento-grid-item";

const whyUsItems = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <div>Yoooo</div>,
    className: "md:col-span-1",
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <div>Yoooo</div>,
    className: "md:col-span-1",
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <div>Yoooo</div>,
    className: "md:col-span-1",
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <div>Yoooo</div>,
    className: "md:col-span-2",
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <div>Yoooo</div>,
    className: "md:col-span-1",
  },
];

export const WhyUsHome = () => {
  return (
    <>
      <div id="why-us" className="t-[var(--navigation-height)] pt-[190px]">
        <div className="flex flex-col">
          <div className="w-fit mx-auto text-center">
            <div className="w-fit mx-auto border border-gray-100 py-[4px] px-[12px] rounded-xl font-semibold text-2xl bg-black shadow-lg">
              Why Us
            </div>
            <h2 className="text-[5rem] leading-[1.2] font-semibold my-5 bg-hero-title-gradient bg-clip-text text-transparent">
              Transforming Visions <br /> into Reality
            </h2>
            <p className="text-pText text-3xl">
              A partnership approach to bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {whyUsItems.map((whyUsItem, i) => (
          <BentoGridItem
            key={i}
            title={whyUsItem.title}
            description={whyUsItem.description}
            header={whyUsItem.header}
            className={cn("[&>p:text-lg]", whyUsItem.className)}
          />
        ))}
      </BentoGrid>
    </>
  );
};
