export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slideright:'slideright 1s linear',
        slideleft:'slideleft 1s linear'
      },
      keyframes:{
        slideright:{
          '0%':{transform:'translate(1000px)'}
        },
        slideleft:{
          '0%':{transform:'translate(-1000px)'}
        }
      }
    },
  },
  plugins: [],
}

