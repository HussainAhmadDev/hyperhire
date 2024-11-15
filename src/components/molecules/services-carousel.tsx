"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard } from "./service-card";
import { BoxIcon, CallIcon, ImageIcon, MarketingIcon } from "../atoms";
import { TargetIcon } from "../atoms/target-icon";

const ServicesCarousel = () => {
  return (
    <section className="w-full max-w-[1348px] bg-red-200">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {services.map(({ icon: Icon, title }, index) => (
          <SwiperSlide key={index}>
            <ServiceCard icon={<Icon />} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const services = [
  {
    icon: MarketingIcon,
    title: "해외 마케팅",
  },
  {
    icon: ImageIcon,
    title: "퍼블리셔",
  },
  {
    icon: BoxIcon,
    title: "캐드원(제도사)",
  },
  {
    icon: TargetIcon,
    title: "해외 세일즈",
  },
  {
    icon: CallIcon,
    title: "해외 CS",
  },
];
export { ServicesCarousel };
