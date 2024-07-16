/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "#181819",
        white: "#fff",
        goldenrod: "#efb900",
        orangered: "#e4250b",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xs": "0.688rem",
      xs: "0.75rem",
      "3xs": "0.625rem",
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      "6xl": "1.563rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
