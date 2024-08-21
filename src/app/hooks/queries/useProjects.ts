import ProjectsApi from "../../api/projects.api";
import { Project } from "../../types/projects-types";

export const useGetProjects = (): { projects: Project[] } => {
  const data = ProjectsApi.getProjects();
  return {
    projects: data,
  };
};
