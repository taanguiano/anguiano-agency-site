import { ProjectNames } from "@/app/utils/types/projects-types";
import { IconExternalLink } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";

type ProjectCardProps = {
  name: ProjectNames;
  url: string;
  img: StaticImageData;
  description: string;
  skills: string[];
  index: number;
};

export const ProjectCard = ({
  name,
  url,
  img,
  description,
  skills,
  index,
}: ProjectCardProps) => {
  const isReversed = index % 2;

  const projectColor = useMemo((): string => {
    switch (name) {
      case ProjectNames.Buildertrend:
        return `#0276cc`;
      case ProjectNames.CiroMedSol:
        return `#e17c58`;
      case ProjectNames.FusionMedStaff:
        return `#8bd4bb`;
      default:
        return `#7a5499`;
    }
  }, [name]);

  return (
    <a href={url} target="_blank" className="group">
      <div
        className={`md:flex-row md:mx-0 flex flex-col mx-8 bg-secondary rounded-xl hover:bg-tertiary relative overflow-hidden ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-[350px] ${
            isReversed ? "left-0" : "right-0"
          } bottom-1 absolute h-[20rem] w-[40rem] blur-[120px] bg-[${projectColor}] z-1`}
        />
        <div className="md:w-1/2 md:p-20 p-5">
          <Image
            className="rounded-xl w-full h-full z-[100] drop-shadow-2xl"
            alt=""
            src={img}
          />
        </div>
        <div className="md:w-1/2 md:p-20 flex flex-col gap-4 p-5">
          <div className="text-4xl z-[2]">{name}</div>
          <div className="text-2xl text-gray-400 z-[2]">{description}</div>
          <div className="flex gap-2 flex-wrap z-[2]">
            {skills.map((skill, index) => {
              return (
                <div
                  key={skill + index}
                  className="text-xl bg-tertiary w-fit rounded-full p-2 group-hover:bg-secondary"
                >
                  {skill}
                </div>
              );
            })}
          </div>
          <IconExternalLink className="mt-3" />
        </div>
      </div>
    </a>
  );
};

// <div className="rounded-lg shadow bg-secondary h-fit w-1/4 max-w-1/4">
//   <a href={url} target="_blank">
//     <Image
//       width={300}
//       height={300}
//       className="rounded-t-lg"
//       alt=""
//       src={img}
//     />
//   </a>
//   <div className="p-5">
//     <a href="#">
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         {name}
//       </h5>
//     </a>
//   </div>
// </div>
