module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px'
      },
      colors: {
        primary: {
          100: '#969693',
          200: '#3f3f3e'
        },
        accent: {
          100: '#7dd5c9',
          200: '#266258'
        }
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
}
