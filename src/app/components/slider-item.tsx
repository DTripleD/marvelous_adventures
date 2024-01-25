"use client";

import clsx from "clsx";
import { StaticImageData } from "next/image";

interface SlideItemProps {
  hero: {
    name: string;
    description: string;
    color: string;
    imageName: string;
  };
}

const SliderItem = ({ hero }: SlideItemProps) => {
  console.log(hero);
  return (
    <div className="flex">
      <div
        style={{
          backgroundImage: `url(/images/${hero.imageName}.png)`,
          backgroundColor: hero.color,
        }}
        className={`w-[352px] h-[540px] bg-center bg-no-repeat object-cover`}
      ></div>
      <div>
        <div className="bg-neutral-900 w-[352px] h-[540px] relative">
          <div
            className={clsx(
              "w-[144px] h-[144px] rounded-full flex justify-center items-center py-12 px-7 absolute bottom-4 left-4",
              hero.name === "Hulk" && "bg-radial-gradient-hulk",
              hero.name === "Black Panther" && "bg-radial-gradient-panther",
              hero.name === "Spider man" && "bg-radial-gradient-spider"
            )}
          >
            <p className="text-neutral-50 uppercase font-medium text-2xl leading-[24px]">
              {hero.name}
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-neutral-50 text-[12px] leading-[14px]">
            Characters
          </h4>
          <p className="text-neutral-50 opacity-50 text-[12px] leading-[14px] w-[195px]">
            {hero.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
