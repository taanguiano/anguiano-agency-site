import { Project } from "../Types/projects-types";

export default class ProjectsApi {
  static getProjects(): Project[] {
    return [{ name: "BuilderTrend", url: "", img: "" }];
  }
}
