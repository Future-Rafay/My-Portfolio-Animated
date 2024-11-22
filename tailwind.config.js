/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion');
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      // colors: {
      //   dark: "#1b1b1b",
      //   light: "#f5f5f5",
      //   primary: "#B63E96", // 240,86,199
      //   primaryDark: "#58E6D9", // 80,230,217
      // },
      // colors: {
      //   dark: "#2C2C2C",  // (near-black for text/background contrast)
      //   light: "#FAFAFA", // (a slightly cooler off-white for a clean look)
      //   primary: "#FF6B6B",  // (a bold, warm red-pink hue)
      //   primaryDark: "#4ECDC4", //  (a soft, cool aqua tone for contrast)
      // },
      // colors: {
      //   dark: "#212529", // (a deep charcoal gray, for a refined dark tone without being pure black)
      //   light: "#E9ECEF", //(a warm, soft off-white that’s easy on the eyes)
      //   primary: "#FF5C8D", //(a vibrant coral pink, eye-catching but not overpowering)
      //   primaryDark: "#4DB6AC", // (a cool, muted teal for a refreshing contrast with the coral)
      // },
      colors: {
        dark: "#2E4057", //(Dusty Navy, for depth)
        light: "#FFF3E0", // (Soft Cream, a warm off-white)
        primary: "#F48FB1", // (Pastel Pink, soft yet attention-grabbing)
        primaryDark: "#81D4FA", // (Light Sky Blue for a refreshing contrast)
      },
      // colors:{
      //   dark: "#37474F",// (Deep Slate Blue)
      //   light: "#ECEFF1",// (Light Slate Gray)
      //   primary: "#FF8A65",// (Warm Coral/Salmon for a friendly touch)
      //   primaryDark: "#FFD54F",// (Soft Golden Yellow for a vibrant accent)
      // },

      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#212529 2px ,#E9ECEF 8px , #E9ECEF 140px);",
        circularDark:
          "repeating-radial-gradient( #E9ECEF 2px ,#212529 8px , #212529 140px);",
        circularLightLg:
          "repeating-radial-gradient(#212529 2px ,#E9ECEF 8px , #E9ECEF 80px);",
        circularDarkLg:
          "repeating-radial-gradient( #E9ECEF 2px ,#212529 8px , #212529 80px);",
        circularLightMd:
          "repeating-radial-gradient(#212529 1px,#E9ECEF 5px,#E9ECEF 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 1px,#212529 5px,#212529 60px)",
        circularLightSm:
          "repeating-radial-gradient(#212529 ,#E9ECEF 3px , #E9ECEF 40px);",
        circularDarkSm:
          "repeating-radial-gradient( #E9ECEF,#212529 3px , #212529 40px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
