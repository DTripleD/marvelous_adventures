import Link from "next/link";

const HeroInfo = () => {
  return (
    <div className="w-[538px]">
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
        className="bg-[#600404] text-neutral-50 uppercase py-3 px-6 rounded-full font-medium text-sm leading-[18px] inline-block"
      >
        All comics
      </Link>
    </div>
  );
};

export default HeroInfo;
