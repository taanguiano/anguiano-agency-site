"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { DundeeButton } from "./dundee-button";
import { useAnchorClick } from "../hooks/useAnchorClick";

export const Header = () => {
  const { handleAnchorClick } = useAnchorClick();

  return (
    <header className="w-fit backdrop-blur-glass bg-glass shadow-glass rounded-box p-2 mt-5 ml-auto mr-auto sticky">
      <Container className="flex justify-between items-center h-[var(--navigation-height)] py-[26px]">
        {/* <Link className="flex items-center text-md" href="/">
          <Logo height={175} width={175} />
        </Link> */}
        <nav className="">
          <ul className="flex h-full [&_a]:text-sm [&_li]:ml-3 [&_li]:mr-3">
            <li>
              <Link href="" onClick={() => handleAnchorClick("process")}>
                Process
              </Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Why Us</Link>
            </li>
            <li>
              <Link href="">Projects</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
            <li>
              <Link href="">FAQs</Link>
            </li>
          </ul>
        </nav>
        <button
          className="btn btn-primary"
          onClick={() => handleAnchorClick("contact")}
        >
          Schedule Now
        </button>
      </Container>
    </header>
  );
};
