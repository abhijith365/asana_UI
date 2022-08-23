/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '4%',
        '80': '10rem',
        '65': {
          'padding-left': '47rem',
          'padding-right': '14rem'
        }
      },
      color: {
        'white': "#fff",
        'light-gray': '#848F99'
      },
      width: {
        '98': '98%',
        "py-1.5": {
          "padding-top": "0.4rem",
          "padding-bottom": "0.4rem"
        },
        "px-05": "1rem"

        ,
        'ps-1': {
          'padding-left': '0.2rem'
        },
        'vHr-w': "1rem"
      },
      height: {
        'vHr-h': "1rem"
      },
      flex: {
        '2': '25%',
        '8': '75%'
      },
      text: {

        'lg-6': {
          'font-size': '3.125rem',
          'line-height': '2.75rem'
        }
      }

    },
  },
  plugins: [],
}
