import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  name: string;
  url: string;
  img: string;
};

export const ProjectCard = ({ name, url, img }: ProjectCardProps) => {
  return (
    <div className="w-fit rounded-lg shadow bg-secondary">
      <a href="#">
        <Image
          className="rounded-t-lg"
          alt=""
          src={img}
          height={500}
          width={500}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
};
