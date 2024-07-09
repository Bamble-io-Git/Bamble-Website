import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#45A6FF',
        },
        yellow: {
          primary: '#F2E205',
        },
        gray: {
          text: '#323130',
        },
        white: {
          primary: '#FAF9F8',
        },
        darkYellow: {
          primary: '#D0C710',
        },
      },
      backgroundColor: {
        gray: {
          primary: '#F1F3F7',
        },
        yellow: {
          primary: '#F2E205',
        },
        purple: {
          primary: '#000040',
        },
      },
      fontFamily: {
        primary: ['var(--font-noto-sans)'],
        secondary: ['var(--font-montserrat)'],
      },
      borderColor: {
        primary: '#323130',
      },
      backgroundImage: {
        'gradient-black':
          'linear-gradient(0deg, #000 0%, rgba(130, 130, 130, 0.00) 49.41%)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
