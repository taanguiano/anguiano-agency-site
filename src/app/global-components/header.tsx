"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { useAnchorClick } from "../hooks/useAnchorClick";
import Image from "next/image";
import pohpiwareFullLogo from "../../../public/pohpiwareFullLogo.svg";

const navItems = [
  { title: "Process", anchor: "process" },
  { title: "Services", anchor: "services" },
  { title: "Why Us", anchor: "why-us" },
  { title: "Pricing", anchor: "pricing" },
  { title: "FAQs", anchor: "faqs" },
];

export const Header = () => {
  const { handleAnchorClick } = useAnchorClick();

  return (
    <>
      <header className=" w-full fixed backdrop-blur-glass bg-transparent border-b border-b-glass z-10">
        <Container className="flex justify-between items-center h-[var(--navigation-height)] py-[30px]">
          <nav className="text-info">
            <ul className="flex h-full [&_a]:text-sm [&_li]:ml-3 [&_li]:mr-3 items-center">
              <li>
                <Link className="" href="/">
                  <Image
                    src={pohpiwareFullLogo}
                    height={155}
                    width={155}
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
            type="button"
            onClick={() => handleAnchorClick("contact")}
            className="text-background bg-emphasized-hero-gradient hover:opacity-80 font-medium rounded-2xl text-sm px-5 py-2.5"
          >
            Contact Us
          </button>
        </Container>
      </header>
    </>
  );
};
