module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-green': '#2ddf5c',
        'light-pink': '#ff1b68',
        'melon-green': '#d5ffdc',
        'medium-green': '#19b84c',
        'dark-green': '#0e4f1f',
      },
      boxShadow: {
        'my-shadow': '2px 2px 2px 2px rgb(0 0 0 / 50%)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        anton: ['Anton'],
      },
    },
  },
  plugins: [],
};
