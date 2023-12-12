import { Container } from "./components/container";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
    </div>
  );
}
