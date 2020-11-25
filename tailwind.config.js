module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    //'./public/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
    colors: {
      gray: "gray",
      black: "black",
      white: "white",
      blue: "#40798C"
    }
  },
  variants: {},
  plugins: []
}
