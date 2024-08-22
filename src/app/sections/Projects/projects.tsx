import React from "react";
import { useGetProjects } from "../../hooks/queries/useProjects";
import { ProjectCard } from "./components/project-card";

export const Projects = () => {
  const { projects } = useGetProjects();
  return (
    <div
      id="our-projects"
      className="t-[var(--navigation-height)] pt-[190px] pb-[190px]"
    >
      <div className="flex flex-col">
        <div className="md:px-0 w-fit mx-auto text-center px-8">
          <div className="w-fit mx-auto border border-gray-100 py-[1px] px-[12px] rounded-xl font-medium text-2xl bg-black shadow-lg">
            Projects
          </div>
          <h2 className="md:text-[5rem] text-[4rem] leading-[1.2] font-semibold mt-5">
            What I&apos;ve Built:
          </h2>
          <p className="text-pText text-3xl mt-2">
            Projects that define my experience.
          </p>
        </div>
        <div className="gap-12 flex-col flex items-center mt-32">
          {projects.map((project, index) => {
            return (
              <ProjectCard key={project.name} {...project} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
