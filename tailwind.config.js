const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '375px',
      tablet: '769px',
      laptop: '1025px',
      desktop: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans]
      },
      colors: {
        main: '#282E3D',
        bright: '#f8f9fa',
        dark: '#222838'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
