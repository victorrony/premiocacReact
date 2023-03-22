/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#231e26',
        "secondary":'#1c1e2a',
        "my-purple": '#231e26',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
