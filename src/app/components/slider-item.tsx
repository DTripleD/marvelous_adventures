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
  return (
    <div
      className="flex flex-row items-end gap-8 pl-0"
      onClick={() => console.log(hero.color)}
    >
      <div
        style={{
          backgroundImage: `url(/images/${hero.imageName}.png)`,
          backgroundColor: hero.color,
        }}
        className={`bg-center bg-no-repeat object-cover w-[352px] h-[540px] relative rounded-[4px]`}
      ></div>
      <div className="relative z-10 self-end mt-0 pb-10 flex gap-8 flex-col">
        <div className="bg-neutral-900 w-[352px] h-[540px] relative rounded-[4px]">
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
        <div className="flex gap-[68px]">
          <h4 className="text-neutral-50 text-[12px] leading-[14px]">
            Characters
          </h4>
          <p className="text-neutral-50 opacity-50 text-[12px] leading-[14px] w-[195px]">
            {hero.description}
          </p>
        </div>
        <div
          style={{ filter: "blur(47px)", backgroundColor: hero.color }}
          className="absolute z-[-1] right-0 rounded-[200000px] w-[332px] h-[300px] bottom-16"
        />
      </div>
    </div>
  );
};

export default SliderItem;
