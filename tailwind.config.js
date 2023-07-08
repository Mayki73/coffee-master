/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        festive: ["'Comfortaa', cursive"],
      },
      variants: {
        display: ["responsive", "group-hover", "group-focus"],
      },
    },
  },
  plugins: [],
};
