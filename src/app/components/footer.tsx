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
      <div className="flex items-center justify-between py-16 px-16 w-[1440px] mx-auto">
        <Logo />
        <p className="font-normal text-base text-neutral-50 leading-[18px]">
          Comics
        </p>
        <div className="flex gap-4">
          {socLinks.map(({ name, link }) => (
            <div className="cursor-pointer" key={name}>
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
      <div className="bg-[#34387F] py-[18px] flex justify-center">
        <a
          href=""
          className="text-neutral-50 text-opacity-40 font-normal text-sm leading-[18px]"
        >
          Privacy Policy Public Offering Agreement
        </a>
      </div>
    </footer>
  );
};

export default Footer;
