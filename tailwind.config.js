/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#4A4A4A", // Charcoal Gray
        light: "#F0F0F0", // Soft White Gray
        primary: "#FFC857", // Bright Yellow
        primaryDark: "#FF6F61", // Coral for warmth
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#4A4A4A 2px ,#F0F0F0 8px , #F0F0F0 140px);",
        circularDark:
          "repeating-radial-gradient( #F0F0F0 2px ,#4A4A4A 8px , #4A4A4A 140px);",
        circularLightLg:
          "repeating-radial-gradient(#4A4A4A 2px ,#F0F0F0 8px , #F0F0F0 80px);",
        circularDarkLg:
          "repeating-radial-gradient( #F0F0F0 2px ,#4A4A4A 8px , #4A4A4A 80px);",
        circularLightMd:
          "repeating-radial-gradient(#4A4A4A 1px,#F0F0F0 5px,#F0F0F0 60px)",
        circularDarkMd:
          "repeating-radial-gradient(#F0F0F0 1px,#4A4A4A 5px,#4A4A4A 60px)",
        circularLightSm:
          "repeating-radial-gradient(#4A4A4A ,#F0F0F0 3px , #F0F0F0 40px);",
        circularDarkSm:
          "repeating-radial-gradient( #F0F0F0 ,#4A4A4A 3px , #4A4A4A 40px);",
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