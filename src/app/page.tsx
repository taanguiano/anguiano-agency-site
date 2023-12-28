import { Contact } from "./components/contact-us/contact";
import { Container } from "./components/container";
import { Hero } from "./components/hero";
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
          <Contact />
        </Container>
      </main>
    </div>
  );
}
