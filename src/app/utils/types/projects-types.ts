import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  url: string;
  img: StaticImageData;
  description: string;
  skills: string[];
};
