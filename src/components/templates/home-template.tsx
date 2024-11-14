import React from "react";
import { Footer, GradientLayer, Header } from "../organisms";
import HeroSection from "../organisms/hero";

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
