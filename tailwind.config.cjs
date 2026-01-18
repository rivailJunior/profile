/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brand-cyan-gradient":
          "linear-gradient(to right bottom, #23bec5, #1fb1b8, #1aa5ab, #16989f, #128c92);",
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
