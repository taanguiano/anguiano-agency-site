"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header className="flex items-center top-0 left-0 w-full h-[136px]">
      <Container className="flex justify-center h-[var(--navigation-height)] backdrop-blur-[3px] border border-glass rounded-[16px] w-[fit-content] p-[10px] bg-glass-background shadow-glass">
        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-3 [&_li]:mr-3">
            <li>
              <Link className="flex items-center text-md" href="/">
                <Logo height={150} width={150} />
              </Link>
            </li>
            <li>
              <Link href="">Process</Link>
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
      </Container>
    </header>
  );
};
