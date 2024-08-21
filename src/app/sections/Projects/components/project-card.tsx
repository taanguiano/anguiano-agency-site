import { IconExternalLink } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ProjectCardProps = {
  name: string;
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
  return (
    <a href={url} target="_blank" className="group">
      <div
        className={`md:flex-row md:mx-0 flex flex-col mx-5 bg-secondary rounded-xl hover:bg-tertiary ${
          index % 2 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 md:p-20 p-5">
          <Image className="rounded-xl w-full h-full" alt="" src={img} />
        </div>
        <div className="md:w-1/2 md:p-20 flex flex-col gap-4 p-5">
          <div className="text-4xl">{name}</div>
          <div className="text-2xl text-gray-400">{description}</div>
          <div className="flex gap-2 flex-wrap">
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
