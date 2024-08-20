"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { useAnchorClick } from "../hooks/useAnchorClick";
import Image from "next/image";
import tanguianoLogo from "../../../public/tanguianoLogo.svg";
import { useRouter } from "next/navigation";
import Routes from "../utils/routes";

const navItems = [
  { title: "Our work", anchor: "our-work" },
  { title: "About Us", anchor: "why-us" },
  { title: "Contact Us", anchor: "contact-us" },
];

export const Header = () => {
  const { handleAnchorClick } = useAnchorClick();
  const router = useRouter();

  return (
    <>
      <header className="mt-9 z-10">
        <Container className="">
          <nav className="text-info w-full flex justify-between">
            <Link className="" href="/">
              <Image src={tanguianoLogo} height={50} width={50} alt="logo" />
            </Link>
            <button
              onClick={() => router.push(Routes.contactUs)}
              className="bg-hero-title-gradient text-white py-3 px-4 rounded-xl"
            >
              <span className="text-3xl">Hire Me</span>
            </button>
          </nav>
        </Container>
      </header>
    </>
  );
};
