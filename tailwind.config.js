/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "grey": "#363838",
        "secondary": "#7d75ed",
      },
      fontFamily:{
        "pacifico":"Pacifico"
      },
      gridAutoRows:{
        "grid-flow-row-reverse": "row-reverse"
      }
    },
  },
  plugins: [],
}

