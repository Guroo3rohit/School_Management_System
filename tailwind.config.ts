import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        rkSky:"#C3EBFA",
        rkSkyLight:"#EDF9FD",
        rkPurple:"#CFCEFF",
        rkPurlpleLight:"#F1F0FF",
        rkYellow:"#FAE27C",
        rkYellowLight:"#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
