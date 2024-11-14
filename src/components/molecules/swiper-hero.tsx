"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperHero = () => {
  const slides = [
    { label: "해외 마케팅", icon: "📊" },
    { label: "퍼블리셔", icon: "📄" },
    { label: "게토존 (제조사)", icon: "📦" },
    { label: "해외 세일즈", icon: "🌍" },
    { label: "해외 세일즈", icon: "🌍" },
    { label: "해외 세일즈", icon: "🌍" },
    { label: "게토존 (제조사)", icon: "📦" },
    { label: "게토존 (제조사)", icon: "📦" },
  ];

  return (
    <div className=" pl-28 py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4.5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-2 bg-teal-500 text-white rounded-lg p-5 min-h-[100px]">
              <div className="text-3xl">{slide.icon}</div>
              <div className="mt-2">{slide.label}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export { SwiperHero };
