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
    <header className="md:px-0 z-1 border-red-100 bg-transparent pt-6">
      <Container className="px-5">
        <nav className="text-info w-full flex justify-between items-center align-center">
          <Link className="" href="/">
            <Image src={tanguianoLogo} height={40} width={40} alt="logo" />
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => downloadURI(resumeUri, "Resume")}
              className="bg-hero-title-gradient text-white py-1 px-3 rounded-xl text-2xl"
            >
              Download My Resume
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
