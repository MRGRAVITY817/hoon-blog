const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans]
      }
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px'
    },
    colors: {
      main: '#08434E',
      bright: '#f8f9fa',
      dark: '#05282F',
      strong: '#FF4821',
      life: '#FF8121',
      travel: '#217DFF',
      rust: '#EEBC87',
      uiux: '#31D17A',
      webdev: '#EE87AF',
      blockchain: '#B13CFF'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
