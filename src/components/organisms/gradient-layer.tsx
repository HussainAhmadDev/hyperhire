import { PropsWithChildren } from "react";

const GradientLayer = ({ children }: PropsWithChildren) => {
  return <div className="bg-hero-bg bg-cover">{children}</div>;
};

export { GradientLayer };
