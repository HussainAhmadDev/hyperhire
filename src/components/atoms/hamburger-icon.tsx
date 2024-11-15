import { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="3"
      viewBox="0 0 16 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.46802H15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { HamburgerIcon };
