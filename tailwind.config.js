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
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px ,#f5f5f5 8px , #f5f5f5 140px);",
        circularDark:
          "repeating-radial-gradient( #f5f5f5 2px ,#1b1b1b 8px , #1b1b1b 140px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px ,#f5f5f5 8px , #f5f5f5 80px);",
        circularDarkLg:
          "repeating-radial-gradient( #f5f5f5 2px ,#1b1b1b 8px , #1b1b1b 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 1px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 1px,#1b1b1b 5px,#1b1b1b 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) ,#f5f5f5 3px , #f5f5f5 40px);",
        circularDarkSm:
          "repeating-radial-gradient( #f5f5f5,#1b1b1b 3px , #1b1b1b 40px);",
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
