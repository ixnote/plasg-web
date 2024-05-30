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

      fontFamily: {
        geistsans: ["var(--font-geist-sans)"],
        geistmono: ["var(--font-geist-mono)"],
      },
    },

    colors: {
      brand: {
        dark: "#000000",
        white: "#FFFFFF",
        main: "#0E3E40",
        secondary: "#B1D362",
        lightYellow: "#FCFF45",
      },
    },
  },
  plugins: [],
};
export default config;
