/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:"#4169E1",
        yellow:"#FF8C00",

        white:{
          DEFAULT:"#FFFFFF",
          fa:"#FAFAFAFA"
        },

        gray:{
          DEFAULT:"#E7E7E3",
          main:"#70706E",
          dark:"#232321",
        }
      },

      fontFamily: {
        sans:["Rubik","sans-serif"],
        open:["open","sans-serif"],
      }
    },
  },
  plugins: [],
}