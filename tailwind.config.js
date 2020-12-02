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
      gray: "gray",
      black: "black",
      white: "white",
      blue: "#40798C"
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
    },
    backgroundImage: ({
      // 'slide-1': "url('../img/slide_1.jpg')",
      // 'slide-2': "url('../img/slide_2.jpg')",
    }),
  },
  variants: {},
  plugins: []
}
