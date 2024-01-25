"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import SliderItem from "./slider-item";

const characters = [
  {
    name: "Black Panther",
    description:
      "T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.",
    color: "#34387F",
    imageName: "black-panther",
  },
  {
    name: "Spider man",
    description:
      "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
    color: "#600404",
    imageName: "spider-man",
  },
  {
    name: "Hulk",
    description:
      "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
    color: "#5B7F3C",
    imageName: "hulk",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        direction={"vertical"}
        grabCursor={true}
        effect={"creative"}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, -400, 0],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper"
      >
        {characters.map((hero) => (
          <SwiperSlide key={hero.name}>
            <SliderItem hero={hero} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
