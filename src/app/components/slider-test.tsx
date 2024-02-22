"use client";

import { useEffect, useState } from "react";
import SliderItemTest from "./slider-item-test";
import { characters } from "@/lib/characters";

const SliderTest = ({ onScreen, setOnScreen }: any) => {
  const [position, setPosition] = useState("translate-y-[0%]");

  useEffect(() => {
    let timerId = setInterval(() => {
      console.log(onScreen);
      if (onScreen === "panter") {
        setOnScreen("spider");
      }

      if (onScreen === "spider") {
        setOnScreen("hulk");
      }

      if (onScreen === "hulk") {
        setOnScreen("panter");
      }
    }, 10000);

    return () => {
      clearInterval(timerId);
    };
  }, [onScreen, setOnScreen]);

  return (
    <div className="h-full lg:mr-[-32px] lg:h-auto pb-10 flex gap-16">
      <div className="flex flex-col my-auto gap-[14px]">
        <button
          className={`w-1 h-[100px] transition-all duration-1000 ${
            onScreen === "panter" ? "bg-[#34387F]" : "bg-[#171717CC]"
          }`}
          onClick={() => setOnScreen("panter")}
        ></button>
        <button
          className={`w-1 h-[100px] transition-all duration-1000 ${
            onScreen === "spider" ? "bg-[#600404]" : "bg-[#171717CC]"
          }`}
          onClick={() => setOnScreen("spider")}
        ></button>
        <button
          className={`w-1 h-[100px] transition-all duration-1000 ${
            onScreen === "hulk" ? "bg-[#5B7F3C]" : "bg-[#171717CC]"
          }`}
          onClick={() => setOnScreen("hulk")}
        ></button>
      </div>
      <div className="max-h-[780px] overflow-y-hidden">
        {characters.map((character) => (
          <SliderItemTest
            key={character.name}
            position={position}
            character={character}
            onScreen={onScreen}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderTest;
