import Image from "next/image";

import Logo from "./logo";

const socLinks = [
  { name: "facebook", link: "" },
  { name: "instagram", link: "" },
  { name: "linkedin", link: "" },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="grid grid-cols-2 gap-5 md:gap-0 md:flex items-center md:justify-between py-10 px-5 md:py-16 md:px-8 lg:px-16 w-[375px] md:w-[768px] lg:w-[1440px] mx-auto">
        <Logo />
        <p className="font-normal text-sm leading-[18px] md:text-base md:leading-[18px] text-neutral-50 text-end md:text-start">
          Comics
        </p>
        <div className="flex gap-[14px] md:gap-4">
          {socLinks.map(({ name, link }) => (
            <div className="cursor-pointer h-8 w-8 md:h-10 md:w-10" key={name}>
              <Image
                className=""
                width={40}
                height={40}
                src={`/icons/${name}.svg`}
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#34387F] py-4 md:py-[18px] flex justify-center">
        <a
          href=""
          className="text-neutral-50 text-opacity-40 font-normal text-[10px] leading-3 md:text-sm md:leading-[18px]"
        >
          Privacy Policy Public Offering Agreement
        </a>
      </div>
    </footer>
  );
};

export default Footer;
