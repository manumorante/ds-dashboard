module.exports = {
  content: ['./app/**/*.{js,jsx}', './ui/**/*.jsx'],
  theme: {},
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('children', '& *')
    },
  ],
}
