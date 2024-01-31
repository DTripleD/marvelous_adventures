"use client";

import Image from "next/image";
import React from "react";
import { useSwiper } from "swiper/react";

interface SwiperNavButtonsProps {
  disabledPrev: boolean;
  disabledNext: boolean;
}

export const SwiperNavButtons = ({
  disabledPrev,
  disabledNext,
}: SwiperNavButtonsProps) => {
  const swiper = useSwiper();

  console.log(disabledPrev);

  return (
    <div className="swiper-nav-btns flex gap-4 justify-center">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={disabledPrev}
        className="py-4 px-[13px]"
      >
        <Image
          className="rotate-180"
          width={12}
          height={18}
          src="/icons/arrow.svg"
          alt="search"
        />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={disabledNext}
        className="py-4 px-[13px]"
      >
        <Image width={12} height={18} src="/icons/arrow.svg" alt="search" />
      </button>
    </div>
  );
};
