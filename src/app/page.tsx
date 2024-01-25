import HeroInfo from "./components/hero-info";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className="flex">
      <HeroInfo />
      <Slider />
    </div>
  );
}
