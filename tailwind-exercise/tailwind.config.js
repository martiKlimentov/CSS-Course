module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      colors: {
        'light-green': '#2ddf5c',
        'strong-pink': '#ff1b68',
        'melon-green': '#d5ffdc',
        'medium-green': '#19b84c',
        'dark-green': '#0e4f1f',
        'light-pink': '#ffcede',
      },
      boxShadow: {
        'my-shadow': '2px 2px 2px 2px rgb(0 0 0 / 50%)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        anton: ['Anton'],
      },
      backgroundImage: {
        'main-image': "linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent), url('/dist/images/freedom.jpg')",
        'plans-background': "url('/dist/images/plans-background.jpg')",
      },
      backgroundPosition: {
        'product-overview': '50% 25%',
      },
    },
  },
  plugins: [],
};
