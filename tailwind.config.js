/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'headshot':"url('./images/headshot_2.JPG')"
      }
    },
  },
  plugins: [],
}