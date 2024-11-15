"use client";
import { HeroDetails, ProfilesCarousel, ServicesCarousel } from "../molecules";
import { Container, Flex } from "../atoms";

const HeroSection = () => {
  return (
    <Flex gap={6} direction="col" className="pb-14">
      <Container className="flex max-lg:items-center max-lg:flex-col">
        <HeroDetails />
        <ProfilesCarousel />
      </Container>
      <ServicesCarousel />
    </Flex>
  );
};

export { HeroSection };
