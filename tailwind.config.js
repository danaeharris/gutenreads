/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ppwriter: ["PP Writer", "sans-serif"],
        ppbook: ["PP Writer Book", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#F8F8F8",
          200: "#E9E9E9",
          300: "#EDEDED",
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
