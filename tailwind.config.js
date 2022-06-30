/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'londrina-sketch': [`"Londrina Sketch", cursive`]
    },
    extend: {
      dropShadow: {
        'icon': '0 4px 4px rgb(0 0 0 / 0.95)'
      }
    },
  },
  plugins: [],
}
