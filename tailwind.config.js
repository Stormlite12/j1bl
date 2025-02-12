/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'410px',
      'md': '720px',
      'lg': '1024px',
      'lap':'1366px',
      'xl': '1440px',
      '2xl':'1536px',
      '3xl':'1920px',
      'mac': '1280px'
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        title: ["Lato"],
        pSans: ["Public Sans"],
        inter: ["Inter"],
        archivo: ["Archivo"],
        lexend: ["Lexend"]
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
}

