/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {

    extend: {
      colors:{
        bg:"#fff",
        dark_bg:"#000"
      }
    },
  },
  plugins: [],
};
