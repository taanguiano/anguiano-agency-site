import { Contact } from "./pages/contact-us/contact";
import { Container } from "./components/container";
import { Faqs } from "./pages/faqs/faqs";
import { Hero } from "./pages/hero";
import { Pricing } from "./pages/pricing/pricing";
import { Process } from "./pages/process/process";
import { Services } from "./pages/services/services";
import { WhyUs } from "./pages/why-us/why-us";
// import { ServicesBanner } from "./components/services-banner";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero />
        </Container>
        {/* <ServicesBanner /> */}
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
