const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'blue-purple': ['135deg', theme('colors.blue.500'), theme('colors.purple.500')],
      'shades-of-gray': ['135deg', theme('colors.gray.300'), theme('colors.gray.200')]
    }),
    fontFamily: {
      ...defaultTheme.fontFamily,
      display: ['Satisfy', 'cursive']
    },
    stripes: theme => ({
      'construction': [theme('colors.orange.700'), theme('colors.gray.900')]
    })
  },
  variants: {
    padding: ['responsive']
  },
  plugins: [
    require('./plugins/gradient'),
    require('./plugins/stripes')
  ]
};
