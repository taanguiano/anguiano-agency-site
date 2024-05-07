import Image from "next/image";
import BuildertrendProjectImg from "../../../public/buildertrendProject.jpg";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const projects = [
  {
    title: "Marketplace by Fusion Medical Staffing",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Crack Crew Mobile",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ciro by Medical Solutions",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Buildertrend",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
