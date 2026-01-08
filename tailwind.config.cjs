/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#272525",
          cyan: "#1AD8E1",
          pink: "#F72B5F",
        },
      },
    },
  },
  plugins: [],
};
