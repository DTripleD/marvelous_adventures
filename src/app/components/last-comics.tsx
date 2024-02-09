"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getComics } from "@/lib/api";
import Container from "./container";
import { SwiperNavButtons } from "./swiper-nav-button";

const LastComics = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isStartBtnActive, setStartBtnActive] = useState(true);
  const [isEndBtnActive, setIsEndBtnActive] = useState(false);

  useEffect(() => {
    getComics()
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  function isButtonActive(e: any) {
    e.isBeginning ? setStartBtnActive(true) : setStartBtnActive(false);
    e.isEnd ? setIsEndBtnActive(true) : setIsEndBtnActive(false);
  }

  return (
    <Container>
      <div>
        <h2 className="text-neutral-50 uppercase font-medium text-[28px] leading-8 md:text-[44px] md:leading-[44px] mb-11 md:mb-16">
          Last Comics
        </h2>
        <Swiper
          // navigation={true}
          modules={[Navigation]}
          className="carousel custom-swiper-slide "
          slidesPerView={"auto"}
          spaceBetween={16}
          onSlideChange={isButtonActive}
        >
          <ul>
            {data.map((comics: any) => (
              <SwiperSlide key={comics.id} className="custom-swiper-slide">
                <li className="flex flex-col w-[323px] md:w-[448px]">
                  <div className="max-w-[323px] h-[374px] md:max-w-[448px] md:h-[519px] rounded-lg overflow-hidden">
                    <Image
                      className="block w-full h-full"
                      src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                      width={448}
                      height={519}
                      alt={comics.title}
                    />
                  </div>
                  <div className="pt-[14px] md:pt-4 flex-grow flex flex-col gap-1 md:gap-2">
                    <h3 className="font-medium text-lg leading-[24px] md:text-2xl md:leading-[24px] text-neutral-50">
                      {comics.title}
                    </h3>
                    <p className="text-neutral-50/50 font-normal text-sm leading-[18px] md:text-base md:leading-[18px]">
                      {comics.creators.items[0]?.name || "marvel"}
                    </p>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </ul>
          <SwiperNavButtons
            disabledPrev={isStartBtnActive}
            disabledNext={isEndBtnActive}
          />
        </Swiper>
      </div>
    </Container>
  );
};

export default LastComics;
