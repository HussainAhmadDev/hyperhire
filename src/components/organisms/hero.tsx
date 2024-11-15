import React from "react";
import { HeroDetails, ServicesCarousel } from "../molecules";
import { Container } from "../atoms";

const HeroSection = () => {
  return (
    <>
      <Container className="flex max-sm:flex-col">
        <HeroDetails />
        <div className="flex-1" />
      </Container>
      <ServicesCarousel />
    </>
  );
};

export default HeroSection;
