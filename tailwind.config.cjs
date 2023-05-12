/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['roboto', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      fontFamily: {
        'openSans': ['opensans', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif'],
        'raleway': ['raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./assets/portfolio-hero.png')",
      },
    },
  },
  plugins: [],
}