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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
