import React from "react";
import { Footer, GradientLayer, Header } from "../organisms";
import { HeroSection } from "../organisms";

const HomeTemplate = () => {
  return (
    <div>
      <GradientLayer>
        <Header />
        <HeroSection />
      </GradientLayer>
      <Footer />
    </div>
  );
};

export { HomeTemplate };
