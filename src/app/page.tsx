"use client";

import { Contact } from "./pages/contact-us/contact";
import { Container } from "./global-components/container";
import { Faqs } from "./pages/faqs/faqs";
import { Hero } from "./pages/hero/hero";
import { Pricing } from "./pages/pricing/pricing";
import { Process } from "./pages/process/process";
import { Services } from "./pages/services/services";
import { WhyUs } from "./pages/why-us/why-us";
import { CLientLogos } from "./global-components/client-logos";
// import { ServicesBanner } from "./components/services-banner";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero />
        </Container>
        <CLientLogos />
        <Container>
          <Process />
          <Services />
          <WhyUs />
          <Pricing />
          <Faqs />
          <Contact />
        </Container>
      </main>
    </div>
  );
}
