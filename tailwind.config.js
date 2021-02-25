const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        rose: colors.rose,
        lightBlue: colors.lightBlue,
        // coolGray: colors.coolGray,
        // gray: colors.trueGray,
        brand: colors.emerald,
        secondBrand: colors.lightBlue,
      },
    },
  },
  darkMode: 'class',
  purge: {
    content: [
      './pages/**/*.css',
      './pages/**/*.tsx',
      './components/**/*.tsx',
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
