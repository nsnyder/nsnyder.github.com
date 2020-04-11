const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'purple-blue': ['-45deg', theme('colors.purple.500'), theme('colors.blue.500')],
      'shades-of-gray': ['-45deg', theme('colors.gray.200'), theme('colors.gray.300')]
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
