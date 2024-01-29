import Container from "./components/container";
import HeroInfo from "./components/hero-info";
import LastComics from "./components/last-comics";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex h-screen relative">
          <HeroInfo />
          <Slider />
        </div>
      </Container>
      <LastComics />
    </>
  );
}
