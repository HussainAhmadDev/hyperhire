"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { ProfileCard } from "./profile-card";
import { Flex } from "../atoms";
import { useState } from "react";

const ProfilesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

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
        className="max-sm:!p-10 max-sm:!py-20 !py-20"
        onSlideChange={handleSlideChange}
      >
        {[...Array(3)].map((_, key) => (
          <SwiperSlide key={key}>
            <ProfileCard {...profile} active={key === activeIndex} />
          </SwiperSlide>
        ))}
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
