"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { ProfileCard } from "./profile-card";

const ProfilesCarousel = () => {
  return (
    <section className="h-fit max-w-[600px] w-full">
      <Swiper
        loop={false}
        speed={1000}
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 10,
          stretch: 100,
          depth: 210,
          modifier: 1,
          slideShadows: true,
          scale: 0.9,
        }}
        initialSlide={1}
        navigation
        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
        className="px-6"
      >
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const profile = {
  experience: "마케팅 · 2y+",
  name: "Abhishek Gupta",
  picture: "https://via.placeholder.com/150",
  skills: [
    "마케팅 콘텐츠 제작",
    "인스타그램 관리",
    "트위터 관리",
    "블로그 글 작성",
  ],
};
export { ProfilesCarousel };
