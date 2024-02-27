"use client";

import { Container } from "./global-components/container";
import { Faqs } from "./faqs/faqs";
import { Hero } from "./hero/hero";
import { Pricing } from "./pricing/pricing";
import { Process } from "./process/process";
import { OurServices } from "./our-services/services";
import { WhyUsHome } from "./why-us/why-us-home";
import { CLientLogos } from "./global-components/client-logos";
import { OurWorkHome } from "./our-work/components/our-work-home";
// import { ServicesBanner } from "./components/services-banner";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <CLientLogos />
        <Container>
          <WhyUsHome />
          <OurWorkHome />
          <OurServices />
        </Container>
      </main>
    </div>
  );
}
