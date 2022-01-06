const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans]
      },
      colors: {
        main: '#08434E',
        bright: '#f8f9fa',
        dark: '#05282F'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
