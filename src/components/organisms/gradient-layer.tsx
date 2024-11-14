// import Image from "next/image";
import { PropsWithChildren } from "react";

const GradientLayer = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-hero-gradient">
      {children}
      {/* <Image
        src="/bg-layer.jpg"
        width="100"
        height="100"
        className="w-full h-full inset-0 absolute opacity-20"
        alt=""
      /> */}
    </div>
  );
};

export { GradientLayer };
