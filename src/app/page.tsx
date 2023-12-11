import { Container } from "./components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./components/hero";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              From Ideas to Code... Turbocharged Implementation.
            </HeroTitle>
            <HeroSubtitle>
              Fueling Tech Dreams with Custom Software, Web, and AI Solutions.
            </HeroSubtitle>
          </Hero>
        </Container>
      </main>
    </div>
  );
}
