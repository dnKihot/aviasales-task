/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "aviasales-blue": "#2196F3",
        "aviasales-gray": "#4A4A4A",
        "aviasales-light-gray": "#A0B0B9",
        "aviasales-bg": "#F3F7FA",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
