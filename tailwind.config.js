/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{ 
        blueOpra:"#3A86FF",
        greyLightOpra:"#77808B",
        greyDarkOpra:"#283646",
        whiteOpra:"#F8F9FA",
        whiteLight:"#EFEFEF",
        blackOpra:"#191919"
      }
    },
  },
  plugins: [],
}