import React from "react";
import { HeroDetails } from "../molecules";
import { Container } from "../atoms";

const HeroSection = () => {
  return (
    <Container className="flex">
      <HeroDetails />
      <div className="flex-1" />
    </Container>
  );
};

export default HeroSection;
