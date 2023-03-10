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
          150: "#D9D9D9",
          200: "#E9E9E9",
          300: "#EDEDED",
          900: "#1B1B1B",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "30px",
        lg: "100px",
        xl: "150px",
        "2xl": "200px",
      },
    },
  },
  plugins: [],
};
