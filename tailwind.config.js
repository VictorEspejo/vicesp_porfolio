/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        DEFAULT: "#211C6A",
      },
      secondary: {
        DEFAULT: "#59B4C3",
      },
      vic_green: {
        DEFAULT: "#74E291",
      },
      vic_yellow: {
        DEFAULT: "#F2E205",
      },
    }
  },
  plugins: [],
}