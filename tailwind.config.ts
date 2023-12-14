import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#005FDF",
        },
        gray: {
          text: "#323130",
        },
      },
      backgroundColor: {
        gray: {
          primary: "#F3F2F1",
        },
      },
      fontFamily: {
        primary: ["var(--font-noto-sans)"],
        secondary: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
