import Link from "next/link";
import Container from "./container";

const HeroComics = () => {
  return (
    <Container>
      <div className="flex h-screen bg-[url(/images/avengers-marvel.png)] bg-no-repeat bg-right-bottom bg-contain">
        <div className="my-auto">
          <p className="text-neutral-50/70 font-normal text-lg leading-7 uppercase">
            Web-based platform
          </p>
          <h1 className="text-neutral-50 font-medium text-[150px] leading-[150px]">
            Comics
          </h1>
          <p className="text-neutral-50 font-normal text-base leading-5">
            Comics is a medium used to express ideas with images, often combined
            with text or other visual information.
          </p>
        </div>
        <Link
          href="/"
          className="text-neutral-50 py-3 px-6 border border-neutral-50/50 rounded-full mt-auto"
        >
          Back home
        </Link>
      </div>
    </Container>
  );
};

export default HeroComics;
