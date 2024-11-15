import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn var(--tw-duration, 1s) ease both",
        "fade-in-up": "fadeInUp var(--tw-duration, 1s) ease both",
      },
      colors: {
        background: "var(--background)",
        gradientStart: "var(--hero-gradient-start)",
        gradientEnd: "var(--hero-gradient-end)",
        brand: "var(--brand-color)",
        "brand-gray-100": "#C1C5CF",
        "brand-gray-200": "#5E626F",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
