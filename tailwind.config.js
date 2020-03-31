module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'blue-green': ['-45deg', theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': ['-45deg', theme('colors.purple.500'), theme('colors.blue.500')]
    }),
    fontFamily: {
      display: ['Satisfy', 'cursive']
    }
  },
  variants: {},
  plugins: [
    require('./plugins/gradient')
  ]
};
