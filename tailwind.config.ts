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
        "fade-in": "fadeIn 500ms ease both",
        "fade-in-up": "fadeInUp 500ms ease both",
        "fade-in-with-delay": "fadeIn 500ms ease 800ms both",
        "grow-in": "growIn 300ms ease-in-out forwards",
      },
      colors: {
        background: "var(--background)",
        gradientStart: "var(--hero-gradient-start)",
        gradientEnd: "var(--hero-gradient-end)",
        brand: "var(--brand-color)",
        "brand-cyan-100": "var(--brand-cyan-100)",
        "brand-gray-100": "var(--brand-gray-100)",
        "brand-gray-200": "var(--brand-gray-200)",
        "brand-gray-300": "var(--brand-gray-300)",
        "brand-gray-400": "var(--brand-gray-400)",
        "brand-blue-100": "var(--brand-blue-100)",
        "brand-green-100": "var(--brand-green-100)",
        "brand-green-200": "var(--brand-green-200)",
      },
      backgroundImage: {
        "hero-bg":
          "url('/hero-gradient-bg.jpg'),linear-gradient(90deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)",
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
        growIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
