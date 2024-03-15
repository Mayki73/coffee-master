/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa"],
      },
      variants: {
        display: ["responsive", "group-hover", "group-focus"],
      },
    },
  },
  plugins: [],
};
