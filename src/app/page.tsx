"use client";

import { useState } from "react";
import Container from "./components/container";
import HeroInfo from "./components/hero-info";
import LastComics from "./components/last-comics";
import Slider from "./components/slider";
import SliderTest from "./components/slider-test";

export default function Home() {
  const [onScreen, setOnScreen] = useState("panter");

  return (
    <>
      <Container>
        <div className="flex relative flex-col lg:flex-row lg:justify-between">
          <HeroInfo onScreen={onScreen} />
          {/* <Slider /> */}
          <SliderTest onScreen={onScreen} setOnScreen={setOnScreen} />
        </div>
      </Container>
      <LastComics />
    </>
  );
}
