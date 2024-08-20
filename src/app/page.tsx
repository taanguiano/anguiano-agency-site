"use client";

import { Container } from "./global-components/container";
import { Hero } from "./hero/hero";
import { OurServices } from "./our-services/services";
import { CLientLogos } from "./global-components/client-logos";
import { OurWorkHome } from "./our-work/our-work-home";
// import { ServicesBanner } from "./components/services-banner";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <CLientLogos />
        <Container>
          <OurServices />
          <OurWorkHome />
        </Container>
      </main>
    </div>
  );
}
