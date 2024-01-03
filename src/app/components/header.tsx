"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { useAnchorClick } from "../hooks/useAnchorClick";
import gradientEllipse from "../../../public/gradientEllipse.svg";
import Image from "next/image";
import Elmware from "../../../public/elmwareSvgOrange.svg";

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
      <Image
        className="absolute top-[-700px] left-[500px] z-[-1]"
        src={gradientEllipse}
        width={1100}
        alt="radial-gradient"
      />
      <header className=" w-full fixed backdrop-blur-glass bg-transparent border-b border-b-glass z-10">
        <Container className="flex justify-between items-center h-[var(--navigation-height)] py-[26px]">
          <nav className="text-info">
            <ul className="flex h-full [&_a]:text-sm [&_li]:ml-3 [&_li]:mr-3">
              <li>
                <Link className="" href="/">
                  <Image src={Elmware} height={100} width={100} alt="logo" />
                </Link>
              </li>
              {navItems.map((navItem, index) => {
                return (
                  <li
                    key={`${navItem.anchor}-${index}`}
                    className="pt-[4px] hover:text-primary"
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
            className="text-white bg-primary hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Contact Us
          </button>
        </Container>
      </header>
    </>
  );
};
