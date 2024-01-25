import Logo from "./logo";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between py-6 px-8">
      <Logo />
      <label className="py-3 px-6 border border-zinc-500 border-opacity-30 rounded-full flex gap-2">
        <Image
          className=""
          width={18}
          height={18}
          src="/icons/search.svg"
          alt="search"
        />
        <input
          className="bg-transparent text-neutral-50 placeholder:text-neutral-50 placeholder:uppercase placeholder:font-medium outline-none"
          type="text"
          placeholder="search"
        />
      </label>
    </header>
  );
};

export default Header;
