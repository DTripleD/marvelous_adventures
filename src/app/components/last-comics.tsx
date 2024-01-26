"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Image from "next/image";
import { useEffect, useState } from "react";
var md5 = require("md5");

const LastComics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ts = Math.floor(new Date().getTime() / 1000); // текущий временной штамп в секундах
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as string; // ваш приватный ключ
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string; // ваш публичный ключ

    const hash = md5(ts + privateKey + publicKey);
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <div className="px-8">
        <h2 className="text-neutral-50 uppercase font-medium text-[44px] leading-[44px]">
          Last Comics
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={16}
        >
          <ul>
            {data.map((comics: any) => (
              <SwiperSlide key={comics.id}>
                <li>
                  <Image
                    className="w-[448px] h-[519px] bg-neutral-50 rounded-lg"
                    src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                    width={448}
                    height={519}
                    alt={comics.title}
                  />
                  <p className="text-neutral-50">{comics.title}</p>{" "}
                  <p className="text-neutral-50">
                    {comics.creators.items[0]?.name || "marvel"}
                  </p>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default LastComics;
