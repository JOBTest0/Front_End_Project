/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: '#c9f31d',
        primary: '#fea928',
        secondary: '#ed8900',

      },
      fontFamily: {
        ubuntu: ['Ubuntu Sans', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
    // screens: {
    //   'sm': '576px',
    //   'md': '960px',
    //   'lg': '1024px',
    // },
    plugins: [],
  }
}



