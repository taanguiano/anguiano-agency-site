"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { useAnchorClick } from "../hooks/useAnchorClick";
import Image from "next/image";
import elmwareFullLogo from "../../../public/elmwareFullLogo.svg";
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
      <header className=" w-full fixed backdrop-blur-glass bg-transparent z-10">
        <Container className="flex justify-between items-center h-[var(--navigation-height)] py-[30px]">
          <nav className="text-info">
            <ul className="flex h-full [&_a]:text-sm [&_li]:ml-3 [&_li]:mr-3 items-center">
              <li>
                <Link className="" href="/">
                  <Image
                    src={elmwareFullLogo}
                    height={125}
                    width={125}
                    alt="logo"
                  />
                </Link>
              </li>
              {navItems.map((navItem, index) => {
                return (
                  <li
                    key={`${navItem.anchor}-${index}`}
                    className="pt-[4px] hover:text-sunglow"
                  >
                    <Link
                      href=""
                      onClick={() => handleAnchorClick(navItem.anchor)}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            onClick={() => router.push(Routes.contactUs)}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
        </Container>
        <div className="h-[1px] bg-nav-border"></div>
      </header>
    </>
  );
};
