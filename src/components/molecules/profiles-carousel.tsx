"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { ProfileCard } from "./profile-card";
import { Flex } from "../atoms";

const ProfilesCarousel = () => {
  return (
    <Flex className="h-fit w-full max-w-[600px] m-auto">
      <Swiper
        speed={700}
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={1.75}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
          scale: 1,
        }}
        initialSlide={1}
        navigation
        modules={[Pagination, Navigation, EffectCoverflow]}
      >
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProfileCard {...profile} />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

const profile = {
  experience: "마케팅 · 2y+",
  name: "Abhishek Gupta",
  picture: "/profile.png",
  skills: [
    "마케팅 콘텐츠 제작",
    "인스타그램 관리",
    "트위터 관리",
    "블로그 글 작성",
  ],
  tooltipTitle: "월 100만원",
};
export { ProfilesCarousel };
