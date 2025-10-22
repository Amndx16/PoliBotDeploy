/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        C90: "#750846",
        C80: "#D23E73",
        C10: "#eccfd9ff",
        G10: "#F1F1F1",
        G50: "#666666",
        G90: "#333333",
        V10: "#5CD162",
        R10: "#EE5D5D",
        Y10: "#FFD036", 
      },
      fontFamily: {
        mont: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
    plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],

}
