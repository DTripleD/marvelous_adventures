"use client";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

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
    // <div className="flex flex-row items-end gap-8 absolute right-0 top-[-210px]">
    //   <Image
    //     src={`/images/${hero.imageName}.png`}
    //     alt="hero panther"
    //     width={237}
    //     height={343}
    //     className="w-[352px] h-[540px] rounded-[4px]"
    //   />
    //   <div className="relative z-10 self-end mt-0 pb-[78px]">
    //     <Image
    //       src={`/images/${hero.imageName}.png`}
    //       alt="hero black"
    //       width={237}
    //       height={343}
    //     />
    //     <button className="absolute top-[380px] left-[14px] inline-block w-[144px] h-[144px] border-transparent rounded-full bg-red-500 text-inherit cursor-pointer">
    //       {hero.name}
    //     </button>

    //     <div className="fleg gap-[68px]">
    //       <h2>Characters</h2>
    //       <p className="description-hero">{hero.description}</p>
    //     </div>
    //     <div className="df absolute z-[-1] right-0 bottom-0 w-[332px] h-[300px] rounded-full" />
    //   </div>
    // </div>

    <div className="flex gap-8 pl-0 h-full">
      <Image
        src={`/images/${hero.imageName}-1.jpg`}
        width={352}
        height={540}
        alt={hero.name}
        className={`${hero.color} bg-center bg-no-repeat object-cover w-[352px] h-[540px] relative rounded-md self-end mb-10`}
      />
      <div className="relative z-10 mt-0 flex gap-8 flex-col">
        <div className="bg-neutral-900 w-[352px] h-[540px] relative rounded-[4px]">
          <Image
            src={`/images/${hero.imageName}-2.jpg`}
            width={352}
            height={540}
            alt={hero.name}
            className={`${hero.color} bg-center bg-no-repeat object-cover w-[352px] h-[540px] relative rounded-md self-end`}
          />
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
          style={{ filter: "blur(47px)" }}
          className={`${hero.color} absolute z-[-1] right-0 rounded-[200000px] w-[332px] h-[300px] bottom-16`}
        />
      </div>
    </div>
  );
};

export default SliderItem;
