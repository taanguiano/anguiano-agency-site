"use client";

import Link from "next/link";
import React from "react";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center text-md" href="/">
          <Logo /> Sick
        </Link>
        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
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
