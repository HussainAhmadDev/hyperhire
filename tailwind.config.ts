import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        gradientStart: "var(--hero-gradient-start)",
        gradientEnd: "var(--hero-gradient-end)",
        brand: "var(--brand-color)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
