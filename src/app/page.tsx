"use client";

import { Container } from "./global-components/container";
import { Header } from "./global-components/header";
import { ClientLogos } from "./sections/ClientLogos/client-logos";
import { Hero } from "./sections/Hero/hero";
import { Projects } from "./sections/Projects/projects";
import { Services } from "./sections/Services/services";

export default function Home() {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <ClientLogos />
        <Container>
          <Services />
          <Projects />
        </Container>
      </main>
    </div>
  );
}
