/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-grey":"#363636",
        "grey": "#363838",
        "secondary": "#7d75ed",
        "dark-grey":"#1f2020",
        "darkest-grey":"#0c0c0c",
        "skyblue":"#3776ff"
      },
      fontFamily:{
        "pacifico":"Pacifico"
      },
      gridAutoRows:{
        "grid-flow-row-reverse": "row-reverse"
      }
      ,
      screens: {

        'xs': '450px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

