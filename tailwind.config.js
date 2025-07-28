/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "index.html"
  ],
  theme: {
    colors: {
        'ocean': '#16c0b0',
        'leaf': '#84cf6a',
        'mist': '#d8d8d8',
        'midnight': '#39495c',
        'cloud': '#ffffff'
      },
      screens: {
        'sm': '660px',
        'md': '860px',
        'lg': '1060px',
        'xl': '1260px',
        '2xl': '1460px'
      }
  },
  plugins: []
}

