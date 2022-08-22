/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'white': "#fff",
        'light-gray': '#848F99'
      },
      width: {
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
      }

    },
  },
  plugins: [],
}
