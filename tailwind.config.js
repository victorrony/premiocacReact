/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#231e26',
        "secondary":'#372f3c',
        "selected": '#cb2729'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
