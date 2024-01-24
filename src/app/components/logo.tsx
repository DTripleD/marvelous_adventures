import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          className=""
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
