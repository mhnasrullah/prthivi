/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sources/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "roboto" : ['Roboto', "sans-serif"],
      "merry" : ['Merriweather', "serif"]
    },
    colors:{
      "black" : "#000F08",
      "white" : "#FFFFFF",
      "gray" :"#D8D8D8",
      "trans" : "#00000000"
    },
    extend: {},
  },
  plugins: [],
}
