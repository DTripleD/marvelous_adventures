import HeroInfo from "./components/hero-info";
import LastComics from "./components/last-comics";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <div className="flex">
        <HeroInfo />
        <Slider />
      </div>
      <LastComics />
    </>
  );
}
