"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import { searchByTitleStartsWith } from "@/lib/api";
import { useRef } from "react";
import clsx from "clsx";

const Header = () => {
  const [input, setInput] = useState("");
  const [dropData, setDropData] = useState([]);

  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    if (input.length > 0) {
      searchByTitleStartsWith(input)
        .then((data) => setDropData(data.data.results))
        .catch((error) => console.log(error));
    }
  }, [input]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "fixed z-50 transition-all duration-300 w-full",
        scrolled ? "bg-[#0C0B0B]/100" : "bg-[#0C0B0B]/0"
      )}
    >
      <div className="flex justify-between p-5 md:py-6 md:px-8 w-[375px] md:w-[768px] lg:w-[1440px] mx-auto items-center">
        <Logo />
        <div className="revative">
          <label className="py-[6px] px-[18px] md:py-3 md:px-6 border border-zinc-500 border-opacity-30 rounded-full flex items-center gap-2 w-[108px] md:w-[130px] focus-within:border-opacity-100 transition">
            <Image
              className="w-4 h-4 md:w-[18px] md:h-[18px]"
              width={18}
              height={18}
              src="/icons/search.svg"
              alt="search"
            />
            <input
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent text-neutral-50 placeholder:text-neutral-50 placeholder:uppercase placeholder:font-medium outline-none font-medium text-xs leading-[14px] md:text-sm md:leading-[18px] w-full"
              type="text"
              placeholder="search"
            />
          </label>

          {dropData.length > 0 && input.length > 0 && (
            <ul className="absolute z-50 bg-neutral-900 rounded-2xl max-h-[232px] overflow-y-scroll max-w-[108px] md:max-w-[130px] py-[14px] md:py-4 px-6 flex flex-col gap-2">
              {dropData.map((item: any) => (
                <li key={item.id} className="cursor-pointer">
                  <p className="text-neutral-50 opacity-30 hover:opacity-100 font-normal truncate text-xs leading-[14px] md:text-sm md:leading-[18px] lg:text-base lg:leading-[18px]">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
