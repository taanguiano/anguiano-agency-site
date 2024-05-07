"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { useAnchorClick } from "../hooks/useAnchorClick";
import Image from "next/image";
import elmwareFullLogo from "../../../public/elmwareBearLogo.svg";
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
      <header className=" mt-5 z-10">
        <Container className="">
          <nav className="text-info w-full flex justify-between">
            <Link className="" href="/">
              <Image
                src={elmwareFullLogo}
                height={175}
                width={175}
                alt="logo"
              />
            </Link>
            <button
              onClick={() => router.push(Routes.contactUs)}
              className="bg-hero-title-gradient text-white py-2 px-4 rounded"
            >
              Get Started
            </button>
          </nav>
        </Container>
      </header>
    </>
  );
};
