/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      'tablet': '988px',
      'laptop': '1380px',
      'desktop': '1580px',
    },
  },
  plugins: [],
}

