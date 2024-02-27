import { BentoGrid } from "@/app/global-components/bento-grid/bento-grid";
import { BentoGridItem } from "@/app/global-components/bento-grid/bento-grid-item";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import React from "react";
import BuildertrendProjectImg from "../../../../public/buildertrendProject.jpg";
import FMPProjectImg from "../../../../public/fmpProject.jpg";
import Image from "next/image";

const projects = [
  {
    title: "Marketplace by Fusion Medical Staffing",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Image
        height={900}
        width={900}
        src={FMPProjectImg}
        alt="fmp-project-img"
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Crack Crew Mobile",
    description: "Dive into the transformative power of technology.",
    header: <div />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ciro by Medical Solutions",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <div />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Buildertrend",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image width={900} src={BuildertrendProjectImg} alt="bt-project-img" />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export const OurWorkHome = () => {
  return (
    <div id="our-work" className="t-[var(--navigation-height)] pt-[190px]">
      <div className="flex flex-col">
        <div className="w-fit mx-auto text-center pb-6">
          <div className="w-fit mx-auto border border-gray-100 py-[4px] px-[12px] rounded-xl font-semibold text-2xl bg-black shadow-lg">
            Our Work
          </div>
          <h2 className="text-[5rem] leading-[1.2] font-semibold my-5 bg-hero-title-gradient bg-clip-text text-transparent">
            Our Design Philosophy: <br /> Aesthetic Meets Function
          </h2>
          <p className="text-pText text-3xl">
            {`We streamline your business's complexity into User-Friendly Interfaces.`}
          </p>
        </div>
      </div>
      <BentoGrid className="mx-auto mt-10">
        {projects.map((project) => {
          return (
            <BentoGridItem
              key=""
              title={project.title}
              description={project.description}
              header={project.header}
              className={project.className}
            />
          );
        })}
      </BentoGrid>
    </div>
  );
};
