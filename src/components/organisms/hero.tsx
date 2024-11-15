"use client";
import {
  HeroDetails,
  ProfilesCarousel,
  ServiceCheckboxs,
  ServicesCarousel,
} from "../molecules";
import { Container, Flex } from "../atoms";

const HeroSection = () => {
  return (
    <Flex gap={6} direction="col" className="py-28">
      <Container className="flex max-lg:items-center max-lg:flex-col max-lg:gap-6 gap-3">
        <HeroDetails />
        <ProfilesCarousel />
      </Container>
      <ServiceCheckboxs />
      <ServicesCarousel />
    </Flex>
  );
};

export { HeroSection };
