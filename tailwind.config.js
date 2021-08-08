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
        },
        black: {
          '800': '#252B42'
        },
        green: {
          apple: '#68bc45'
        },
        red: {
          alert: '#c96e39'
        }
      },
      spacing: {
        '21': '21px'
      },
      maxWidth: {
        design: '1100px',
        small: '87%',
        extended: '1400px'
      },
      boxShadow: {
        mobileMenu: '0 8px 16px rgba(10,10,10,.1)'
      }
    }
  },
  plugins: []
}
