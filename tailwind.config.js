module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    colors: {
      primaryColor: "#40798C",
      blue: "#497DF5",
      gray: "gray",
      black: "black",
      white: "white",
      violet: "#5C3FFA",
    },
    extend: {
      spacing: {
        '52': '13rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: []
}
