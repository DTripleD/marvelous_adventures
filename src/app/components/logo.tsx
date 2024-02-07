import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          className="w-[97px] h-[15px] md:w-[202px] md:h-[31px]"
          width={202}
          height={31}
          src="/icons/logo.svg"
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
