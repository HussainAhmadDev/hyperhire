"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard } from "./service-card";
import {
  BoxIcon,
  CallIcon,
  Container,
  ImageIcon,
  MarketingIcon,
  TargetIcon,
} from "../atoms";

const ServicesCarousel = () => {
  return (
    <Container aligned="right" className="max-lg:hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          1280: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide>
          <ServiceCard icon={<MarketingIcon />} title="해외 마케팅" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard icon={<ImageIcon />} title="퍼블리셔" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard icon={<BoxIcon />} title="캐드원(제도사)" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard icon={<TargetIcon />} title="해외 세일즈" />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard icon={<CallIcon />} title="해외 CS" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export { ServicesCarousel };
