import clsx from "clsx";
import Image from "next/image";

const SliderItemTest = ({
  position,
  character,
  onScreen,
}: {
  position: string;
  character: any;
  onScreen: string;
}) => {
  return (
    <div
      className={clsx(
        "flex gap-8 relative transition-all duration-1000 h-full",
        onScreen === "panter"
          ? "translate-x-[0%] translate-y-[0%] lg:translate-y-[0%] lg:translate-x-[0%]"
          : "",
        onScreen === "spider"
          ? "translate-x-[-100%] translate-y-[0%] lg:translate-y-[-100%] lg:translate-x-[0%]"
          : "",
        onScreen === "hulk"
          ? "translate-x-[-200%] translate-y-[0%] lg:translate-y-[-200%] lg:translate-x-[0%]"
          : ""
      )}
    >
      <Image
        src={`/images/${character.imageName}-1.jpg`}
        width={352}
        height={540}
        alt="Black Panther"
        className="bg-[#34387F] bg-center bg-no-repeat object-cover w-[352px] h-[540px] relative rounded-md self-end"
      />
      <div className="relative z-10 mt-0 flex gap-8 flex-col">
        <div className="bg-neutral-900 w-[352px] h-[540px] relative rounded-[4px]">
          <Image
            src={`/images/${character.imageName}-2.jpg`}
            width={352}
            height={540}
            alt="Black Panther"
            className="bg-[#34387F] bg-center bg-no-repeat object-cover w-[352px] h-[540px] relative rounded-md self-end"
          />
          <div
            className={clsx(
              "w-[144px] h-[144px] rounded-full flex justify-center items-center py-12 px-7 absolute bottom-4 left-4",
              character.name === "Hulk" && "bg-radial-gradient-hulk",
              character.name === "Black Panther" &&
                "bg-radial-gradient-panther",
              character.name === "Spider man" && "bg-radial-gradient-spider"
            )}
          >
            <p className="text-neutral-50 uppercase font-medium text-2xl leading-[24px]">
              {character.name}
            </p>
          </div>
        </div>
        <div className="flex gap-[68px]">
          <h4 className="text-neutral-50 text-[12px] leading-[14px]">
            Characters
          </h4>
          <p className="text-neutral-50 opacity-50 text-[12px] leading-[14px] w-[195px]">
            {character.description}
          </p>
        </div>
        <div
          style={{ filter: "blur(47px)" }}
          className={`${character.color} absolute z-[-1] right-0 rounded-[200000px] w-[332px] h-[300px] bottom-16`}
        />
      </div>
    </div>
  );
};

export default SliderItemTest;
