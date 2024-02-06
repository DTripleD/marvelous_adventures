"use client";

import Image from "next/image";
import Link from "next/link";
import MediaQuery from "react-responsive";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <MediaQuery maxWidth={767}>
          <Image
            className="w-[98px] h-[15px]"
            width={98}
            height={15}
            src="/icons/logo.svg"
            alt="logo"
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Image
            className="w-[202px] h-[31px]"
            width={202}
            height={31}
            src="/icons/logo.svg"
            alt="logo"
          />
        </MediaQuery>
        {/* <Image
          className="w-[202px] h-[31px]"
          width={202}
          height={31}
          src="/icons/logo.svg"
          alt="logo"
        /> */}
      </div>
    </Link>
  );
};

export default Logo;
