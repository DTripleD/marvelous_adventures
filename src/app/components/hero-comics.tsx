import Link from "next/link";
import Container from "./container";

const HeroComics = () => {
  return (
    <section className="pt-[278px] bg-[url(/images/avengers-marvel.png)] bg-no-repeat max-w-[1440px] my-0 mx-auto pb-[251px] bg-auto bg-right relative">
      <div className="px-5 my-0 mx-auto w-[1440px]">
        {/* <div className="flex h-screen bg-[url(/images/avengers-marvel.png)] bg-no-repeat bg-right-bottom bg-contain"> */}
        <div className="my-auto w flex flex-col gap-4 w-fit">
          <p className="text-neutral-50/70 font-normal text-lg leading-7 uppercase">
            Web-based platform
          </p>
          <h1 className="text-neutral-50 font-medium text-[150px] leading-[150px]">
            Comics
          </h1>
          <p className="text-neutral-50 font-normal text-base leading-5 w-[469px] ml-auto">
            Comics is a medium used to express ideas with images, often combined
            with text or other visual information.
          </p>
        </div>
        <div className="py-3 px-6 border border-neutral-50/50 rounded-full mt-auto w-fit absolute bottom-16 right-8">
          <Link href="/" className="text-neutral-50">
            Back home
          </Link>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroComics;
