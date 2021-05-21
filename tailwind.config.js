module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          '500': '#636363'
        },
        yellow: {
          '50': '#f6f180',
          '150': '#c9e899'
        },
        brown: {
          '800': '#321A18'
        }
      }
    }
  },
  plugins: []
}
