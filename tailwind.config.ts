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
        blue: '#788ae3',
        rose: '#EFB3DB',
        garden: '#8fd482',
        magic: '#A495DF',
        whitish: '#F5F6FE',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
};
export default config;
