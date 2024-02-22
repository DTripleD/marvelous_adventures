import clsx from "clsx";
import Link from "next/link";

const HeroInfo = ({ onScreen }: { onScreen: string }) => {
  return (
    <div className="w-[538px] mt-[255px] mb-[185px]">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-white text-opacity-70 text-[18px] leading-[29px] uppercase">
          Web-based platform
        </h2>
        <h1 className="text-neutral-50 font-medium text-[80px] leading-[80px]">
          Marvelous Adventures
        </h1>
        <p className="text-neutral-50 text-[16px] leading-[18px]">
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
      </div>

      <Link
        href="/comics"
        className={clsx(
          "text-neutral-50 uppercase py-3 px-6 rounded-full font-medium text-sm leading-[18px] inline-block transition-all duration-1000",
          onScreen === "panter" ? "bg-[#34387F]" : "",
          onScreen === "spider" ? "bg-[#600404]" : "",
          onScreen === "hulk" ? "bg-[#5B7F3C]" : ""
        )}
      >
        All comics
      </Link>
    </div>
  );
};

export default HeroInfo;
