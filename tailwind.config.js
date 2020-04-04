const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'blue-green': ['-45deg', theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': ['-45deg', theme('colors.purple.500'), theme('colors.blue.500')]
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
