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
        <div className="w-fit mx-auto text-center pb-6">
          <div className="w-fit mx-auto border border-gray-100 py-[1px] px-[12px] rounded-xl font-medium text-2xl bg-black shadow-lg">
            My Work
          </div>
          <h2 className="text-[5rem] leading-[1.2] font-semibold mt-5">
            Projects:
          </h2>
          <p className="text-pText text-3xl">{`Even cooler subtitle here.`}</p>
        </div>
        <div className="md:gap-12 gap-6 flex-col flex items-center mt-12">
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
