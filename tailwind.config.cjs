/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brand-cyan-gradient":
          "linear-gradient(to right bottom, #5acdd2, #4fc4c9, #43bac0, #37b1b7, #29a8ae);",
      },
      colors: {
        brand: {
          black: "#272525",
          cyan: "#1AD8E1",
          cyanHover: "#23bec5",
          pink: "#F72B5F",
        },
      },
    },
  },
  plugins: [],
};
