/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      ss: "450px",
      xs: "810px",
      md: "1180px",
      lg: "1100px",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};