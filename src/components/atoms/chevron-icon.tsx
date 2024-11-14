import { SVGProps } from "react";

const ChevronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_9001_34)">
        <path
          d="M7.906 11.333a.514.514 0 01-.353-.14L2.806 6.44a.5.5 0 11.707-.707l4.4 4.4 4.58-4.406a.507.507 0 01.707 0 .5.5 0 010 .706l-4.934 4.754a.48.48 0 01-.36.146z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_9001_34">
          <path fill="white" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { ChevronIcon };
