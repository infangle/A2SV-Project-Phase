/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        "custom-16": "16px",
      },
      colors: {
        customGray: "#7C8493",
        customBlue: "#25324B",
        customGreenBg: "rgba(86, 205, 173, 0.1)", // This represents the 10% opacity green background
        ustomGreenBg: "rgba(86, 205, 173, 0.1)",
        customGradientStart: "#4640DE",
        customGradientEnd: "#4640DE",
        customGreen: "#56CDAD",
      },
    },
  },
  plugins: [],
};
