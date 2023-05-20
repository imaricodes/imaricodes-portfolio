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
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    content: {
      'icon': "url('./assets/skills-icons/icon-git.svg')",
      ...defaultTheme.content,
    },
    extend: {
      fontFamily: {
        'openSans': ['opensans', 'sans-serif'],
        'poppins': ['poppins', 'sans-serif'],
        'raleway': ['raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./assets/portfolio-hero-bw-test.png')",
        'heroSmall': "url('./assets/header-sm-test-img.png')",
      },
   
    },
  },
  plugins: [],
}