/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FF33AE",
        darkgray: "#293C4E",
        lightgray: "#5E6C7A",
        lightborder: "#cbd5e1"
      }
    },
  },
  plugins: [],
}


