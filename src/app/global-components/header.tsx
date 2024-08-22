"use client";

import Image from "next/image";
import Link from "next/link";
import tanguianoLogo from "../../../public/tanguianoLogo.svg";
import { Container } from "./container";
import { useDownloadFile } from "../hooks/useDownloadFile";
import { resumeUri } from "../utils/constants";

export const Header = () => {
  const { downloadURI } = useDownloadFile();

  return (
    <header className="md:px-0 z-1 h-10 border-red-100 bg-transparent py-10">
      <Container className="px-5">
        <nav className="text-info w-full flex justify-between ">
          <Link className="" href="/">
            <Image src={tanguianoLogo} height={50} width={50} alt="logo" />
          </Link>
          <button
            onClick={() => downloadURI(resumeUri, "Resume")}
            className="bg-hero-title-gradient text-white py-2 px-4 rounded-xl"
          >
            <span className="text-3xl">Download My resume</span>
          </button>
        </nav>
      </Container>
    </header>
  );
};
